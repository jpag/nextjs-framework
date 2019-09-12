// 
// For static deployment this endpoint is used to generate fetch calls on each page.
// Thus each page will not store the entire JSON of all "articles"
// the GetInitialProps will query the API for the json of a specific article.
// 

const slugify = require('../../../helpers/slugify');
const ArticlesJSON = require('../../../data/articles.js')

export default function handle(req, res) {
  
  // console.log(req.body) // The request body
  
  console.log(req.query) // The url querystring
  console.log(req.cookies) // The passed cookies

  var itemMatch = {
    error: "no match found",
  }

  ArticlesJSON.some( (val, index) => {
    const slug = slugify(val.title)
    if (slug == req.query.slug) {
      itemMatch = val
      itemMatch.slug = req.query.slug
      // 'some' will break as soon as there is a return.
      return true;
    }
  })

  res.end(JSON.stringify(itemMatch))
}