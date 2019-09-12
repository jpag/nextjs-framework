/*
 * We take the `npm run build && next export -o static-export`
 * and place it into this script so every page can fetch() the APIs for content when rendering. 
 * using the `dev` server during build.
 * 
 */
const spawn = require('child_process').spawn
const fs = require("fs-extra");
const fetch = require('isomorphic-unfetch');
const rimraf = require('rimraf');
const path = require('path');
const chalk = require('chalk');

const CONFIG = require('./export.config.js');
const slugify = require('../helpers/slugify');
const articlesJSON = require('../data/articles.js')

let devServerReady = false;
let countAPI = 0;

function buildExportAndCapture() {
  
  console.log(chalk.yellow('Spinning up Dev Server for API capture.'));

  const child = spawn('./node_modules/.bin/next', [
    '-p',
    CONFIG.devServerPort,
  ]);

  child.stdout.on('data', async (data) => {
      
      // process.stdout.write(data);

      if (data.indexOf('[ ready ]') == 0 && !devServerReady) {
        
        console.log(chalk.bgGreen('Dev server booted up. Ready to Capture API Fetch requests.'));
        devServerReady = true;

        // run next build
        try {
          await nextBuild();
        } catch(e) {
          console.log(chalk.red("Build Error "), e )
        }

        console.log(chalk.bgGreen('Build done'));
        
        // and run next export.
        try {
          await nextExport();
        } catch(e) {
          console.log(chalk.red("Export Error "), e )
        }

        console.log(chalk.bgGreen('Export done'));
        
        // clean the API folder:
        const apiGlobPattern = path.join(process.cwd(), CONFIG.exportFolder, 'api/**/*');
        await rimraf.sync(apiGlobPattern);

        await loopThroughAPIEndpoints();
        console.log(chalk.bgGreen('API Endpoints retrieval done'));

        // goodbye:
        child.kill();
      }
  });

  child.stderr.on('data', (data) => {
      console.log(' error!!! ')
      process.stdout.write(data);
  });

  // child.on('exit', (data) => {
    // process.stdout.write('All done!');
  // });
}

async function nextBuild() {
  // run the npm next scripts.
  return new Promise((resolve, reject) => {
    const childBuild = spawn('./node_modules/.bin/next', [
      'build',
    ]);
    childBuild.stdout.on('data', (data) => {
      process.stdout.write(chalk.inverse(data))
    })

    childBuild.stderr.on('data', (data) => {
      process.stdout.write(chalk.inverse(data))
      reject();
    })

    childBuild.on('close', (code) => {
      resolve(true);
    });
  });
}

async function nextExport() {
  console.log(chalk.yellow('Running export'));

  return new Promise((resolve, reject) => {
    const childExport = spawn('./node_modules/.bin/next', [
      'export',
      '-o',
      'static-export',
    ]);
    childExport.stdout.on('data', (data) => {
      process.stdout.write(chalk.inverse(data))
    })

    childExport.stderr.on('data', (data) => {
      process.stdout.write(chalk.inverse(data))
    })

    childExport.on('close', (code) => { 
      resolve(true);
    });
  });
 
}

async function loopThroughAPIEndpoints() {
  // add or remove api endpoints here.
  await Promise.all(articlesJSON.map(async (article) => {
    // use the title attribute slugged, and assign it `slug` when it is passed to the page. 
    // otherwise it will override the `title` value.
    const slugTitle = slugify(article.title)
    article.slug = slugTitle
    await queryAPI(slugTitle, '/api/articles/')
    countAPI++
  }));

  console.log(chalk.yellow('Number of APIs requested '), countAPI)
}

async function queryAPI(slug, apiPath) {
    const origin = 'http://localhost:'+CONFIG.devServerPort
    const urlRequest = `${origin}${apiPath}${slug}`

    console.log(chalk.yellow(`fetching`), `${apiPath}${slug}` );

    const response = await fetch(urlRequest)
    const data = await response.json()
    const file = CONFIG.exportFolder+apiPath+slug

    fs.ensureFile(file, err => {
        if (err) {
          console.log( err )
          return;
        }
        fs.writeFileSync(file, JSON.stringify(data));
    });
}

buildExportAndCapture();