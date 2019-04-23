// next.config.js

// Stylus mixins, utilities, components, and gradient image generation.
// const nib = require('nib')

// Simple media queries for stylus.
const rupture = require('rupture')

// Next.js with stylus
const withStylus = require('@zeit/next-stylus')

const poststylus = require('poststylus')
const autoprefixer = require('autoprefixer')

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
  // set it up to run in a folder: .com/rappler/
  assetPrefix: isProd ? '/rappler/' : '',
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    if (dev) {
      return defaultPathMap;
    }
    console.log(' defaultPathMap ', defaultPathMap);
    // This will copy robots.txt from your project root into the out directory
    // await copyFile(join(dir, 'robots.txt'), join(outDir, 'robots.txt'));
    return defaultPathMap;
  }
})