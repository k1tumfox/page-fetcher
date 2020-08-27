const request = require('request');
const fs = require('fs');

// takes url and local file path and download the resource to file path
//callback
const input = process.argv.slice(2);
  
  
request(input[0], (error, response, body) => {
  
  fs.writeFile(input[1], body, (err) => {
    if (err) throw err;
    else if (error || response.statusCode !== 200) {
      console.log('Error occurred, see below: \n', error, '\n', response.statusCode);
      return;
    } else {
      const pageSize = fs.statSync(input[1]).size;
      console.log(`Downloaded and saved ${pageSize} bytes to ${input[1]}`);
    }
  });
});
  

// input: node fetcher.js http://www.example.edu/ ./index.html
// exp-out: Downloaded and saved 1235 bytes to ./index.html
