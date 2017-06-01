const fs = require('fs');
const watcher =  fs.watch('index.txt');
watcher.on('change', (event, fllename) =>{
  console.log(`{$event} on file ${filename}`);
});
