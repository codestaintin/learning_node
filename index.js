const fs = require('fs');

fs.readFile('index.txt', (err, data) =>{
  if (err) {
    console.log(err.stack);
    return;
  }
  console.log(data.toString());
});

console.log('Program Ended');
