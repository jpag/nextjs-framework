// 
// For static deployment this endpoint is used to generate fetch calls on each page.
// Thus each page will not store the entire JSON of all "articles"
// the GetInitialProps will query the API for the json of a specific article.
// 

const slugify = require('../../helpers/slugify');
const ArticlesJSON = require('../../data/articles.js')

export default function handle(req, res) {
  
  // console.log(req.body) // The request body
  console.log("------ list ")
  // console.log(req.query) // The url querystring
  // console.log(req.cookies) // The passed cookies
  
  const list = ArticlesJSON.map( (val, index) => {
    const slug = slugify(val.title)
    return {
      slug: slug,
      title: val.title,
    }  
  })

  res.end(JSON.stringify(list))
}