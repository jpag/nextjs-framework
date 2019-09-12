// APIs not supported in nextjs static export
// so we manually grab them while the dev instance is running 
// and save the output in the static-export folder.
    
const path = require('path');
const fs = require("fs-extra");
const rimraf = require('rimraf');
const CONFIG = require('./export.config.js');

function removeUnnecessaryFilesFolders() {
  // setup a globe pattern to remove any "dynamic pages such as `[slug]`"
  const slugsGlobPattern = path.join(process.cwd(), CONFIG.exportFolder, '**/\[*');

  rimraf(slugsGlobPattern, {
      glob: {
        ignore: '**/_next/**'
      }
    }, (r) => {

      if (r === null) {
        console.log("rimraf found and cleaned the exports folder.")
      }
    }
  );

}

removeUnnecessaryFilesFolders();
// killPorts();