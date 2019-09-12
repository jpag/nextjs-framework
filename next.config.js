// next.config.js
const NextComposeWithPlugins = require('next-compose-plugins');

// Environment
const isProd = process.env.NODE_ENV === 'production'

// Stylus mixins, utilities, components, and gradient image generation.
// const nib = require('nib')

// Simple media queries for stylus.
const rupture = require('rupture')

// Next.js with stylus
const withStylus = require('@zeit/next-stylus')
const poststylus = require('poststylus')
const autoprefixer = require('autoprefixer')

// Bundle analyzer for reviewing what your build files look like.
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// Defines all project paths.
const articlesJSON = require('./data/articles.js')

// helper function
const slugify = require('./helpers/slugify');


const StylusConfig = {
  stylusLoaderOptions: {
    use: [
      // nib(),
      rupture(),
      poststylus([
        autoprefixer({}),
        require('postcss-css-variables'),
      ]),
  ]},
}

const NextConfig = {
  // set it up to run in a folder: 
  assetPrefix: isProd ? '' : '',
  
  // https://github.com/zeit/next.js/issues/8119
  exportTrailingSlash: true,
  
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    var paths = defaultPathMap;
    let pathscount = 0;

    articlesJSON.forEach(article => {
      // use the title attribute slugged, and assign it `slug` when it is passed to the page. 
      // otherwise it will override the `title` value.
      const slugTitle = slugify(article.title)
      article.slug = slugTitle

      paths[`/articles/${slugTitle}`] = { page: '/articles/[slug]', query: article };
      pathscount++

      // APIs not supported in static export.
      // paths[`/api/articles/${slugTitle}`] = { page: '/api/articles/[slug]', query: article};
      // pathscount++

    });

    console.log(" - number of paths created -", pathscount);
    const keys = Object.keys(paths)
    console.log(keys)


    if (dev) {
      // return paths;
    }
    
    // This will copy robots.txt from your project root into the out directory
    // await copyFile(join(dir, 'robots.txt'), join(outDir, 'robots.txt'));
    return paths;
  },
};


module.exports = NextComposeWithPlugins([
  [withBundleAnalyzer, {}],
  [withStylus, StylusConfig],
  NextConfig]);
