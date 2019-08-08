// next.config.js

// Stylus mixins, utilities, components, and gradient image generation.
// const nib = require('nib')

// Simple media queries for stylus.
const rupture = require('rupture')

// Next.js with stylus
const withStylus = require('@zeit/next-stylus')
const poststylus = require('poststylus')
const autoprefixer = require('autoprefixer')

const ProjectJSON = require('./data/projects.json')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withStylus({
  stylusLoaderOptions: {
    use: [
      // nib(),
      rupture(),
      poststylus([
        autoprefixer({ 
        	
       	}),
        require('postcss-css-variables'),
      ]),
  ]},
  // set it up to run in a folder: 
  assetPrefix: isProd ? '' : '',
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    var paths = defaultPathMap;

    const data = ProjectJSON;
    console.log( data );

    const projects = data;

    projects.forEach(project => {
      paths[`/project/${project.title}`] = { page: '/project/[title]', query: project };
    });

    if (dev) {
      return paths;
    }
    console.log(' defaultPathMap ', paths);
    // This will copy robots.txt from your project root into the out directory
    // await copyFile(join(dir, 'robots.txt'), join(outDir, 'robots.txt'));
    return paths;
  }
})