// next.config.js
const compose = require('next-compose');

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
const ProjectJSON = require('./data/projects.json')

// helper function
const slugify = require('./helpers/slugify');


const stylusConfig = {
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

module.exports = compose([
  [withBundleAnalyzer, {}],
  [withStylus, stylusConfig],
  {
    // set it up to run in a folder: 
    assetPrefix: isProd ? '' : '',
    
    exportPathMap: async function(
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      var paths = defaultPathMap;

      const projectData = ProjectJSON;
      
      projectData.forEach(project => {
        paths[`/project/${slugify(project.title)}`] = { page: '/project/[title]', query: project };
      });

      console.log(' defaultPathMap ', paths);

      if (dev) {
        // return paths;
      }
      
      // This will copy robots.txt from your project root into the out directory
      // await copyFile(join(dir, 'robots.txt'), join(outDir, 'robots.txt'));
      return paths;
    },
  }]);
