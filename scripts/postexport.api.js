const fetch = require('isomorphic-unfetch');
const kill = require('kill-port')

const fs = require("fs-extra");
const siteURL = 'https://www.example.com';
const CONFIG = require('./postexport.config.js');
const slugify = require('../helpers/slugify');
const articlesJSON = require('../data/articles.js')

let pathscount = 0;
let pathsWritten = 0;


articlesJSON.forEach(article => {
  // use the title attribute slugged, and assign it `slug` when it is passed to the page. 
  // otherwise it will override the `title` value.
  const slugTitle = slugify(article.title)
  article.slug = slugTitle

  // APIs not supported in static export, so we manually grab them and save the output
  // paths[`/api/articles/${slugTitle}`] = { page: '/api/articles/[slug]', query: article};
  queryAPI(slugTitle)
  pathscount++
});

console.log('----- APIs requested ', pathscount)


function queryAPI(slug) {
    const origin = 'http://localhost:'+CONFIG.devServerPort
    const urlRequest = `${origin}/api/articles/${slug}`

    console.log( urlRequest );

    fetch(urlRequest)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json()
      })
      .then((json) => {
        // console.log(json);
        const file = CONFIG.exportFolder+'/api/articles/'+slug
        fs.ensureFile(file, err => {
          if (err) {
            console.log( err )
            return;
          }
          
          fs.writeFileSync(file, JSON.stringify(json));
          pathsWritten++
          
          if (pathscount == pathsWritten) {
            console.log('---- killing port ')
            kill(CONFIG.devServerPort, 'tcp')
          }
        });

        return;
      })
      .catch((error) => {
        console.error(error);
      });
    
    // const JSONResponse = await res.json()
}