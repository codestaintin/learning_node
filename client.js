const http = require('http');

let options = {
  host: 'localhost',
  port: '8081',
  path: '/index.html'
};

let callback = response => {
  let body = '';
  response.on('data', data =>{
    body += data;
  });

  response.on('end', () => {
    // Data recieved completely

    return console.log(body);
  });
}

let req = http.request(options, callback);
req.end();
