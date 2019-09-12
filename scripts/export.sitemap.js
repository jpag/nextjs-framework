const fs = require("fs");
const CONFIG = require('./export.config.js');

function getPathsObject() {
  const fileObj = { };

  const walkSync = dir => {
    // Get all files of the current directory & iterate over them
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      // Construct whole file-path & retrieve file's stats
      const filePath = `${dir}${file}`;
      const fileStat = fs.statSync(filePath);

      	fileObj['/'] = {
  			page : '/',
  			lastModified : fileStat.mtime
  		};

      if (fileStat.isDirectory()) {
      	const cleanFileName = filePath
          .substr(filePath.indexOf('/'));
        
        // ignore these file paths. but recurse if they exist.
        if (filePath.indexOf('_next') == -1 && 
        	filePath.indexOf('index') == -1 &&
        	filePath.indexOf('[slug]') == -1 &&
        	filePath.indexOf('/static') == -1 ) {
        
        	// Recurse one folder deeper
        	walkSync(`${filePath}/`);

          // do not add if it is just "/articles" nothing at that page.
          // if (cleanFileName.indexOf('/articles') == 0 && 
          //     cleanFileName.length == ('/articles').length ) {
          //   return;
          // }
          
          // console.log(dir, '----',cleanFileName)
          fileObj[`${CONFIG.siteURL}${cleanFileName}`] = {
	          page: `${CONFIG.siteURL}${cleanFileName}`,
	          lastModified: fileStat.mtime
	        };
        
        }
      }
    });
  };

  // Start recursion to fill `fileObj`
  walkSync(CONFIG.exportFolder+"/");

  return fileObj;
}

function formatDate(date) {
  if (typeof date == 'undefined') {
    console.log('------- eeep date was undefined! ')
    date = new Date();
  }
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = "" + d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  
  const result = `${year}-${month}-${day}`;
  return result;
};

const pathsObj = getPathsObject('./'+CONFIG.exportFolder);

const urlsXML = Object.keys(pathsObj).map(
    (path) => {
      return(
      `<url>
        <loc>${path}</loc>
        <lastmod>${formatDate(pathsObj[path].lastModified)}</lastmod>
      </url>`);
  })

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
  ${urlsXML.join('')}
</urlset>`;

fs.writeFileSync(CONFIG.exportFolder+"/sitemap.xml", sitemapXml);