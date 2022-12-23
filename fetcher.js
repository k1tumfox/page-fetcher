// const request = require('request');
// const fs = require('fs');

// // takes url and local file path and download the resource to file path
// //callback
// const input = process.argv.slice(2);
  
  
// request(input[0], (error, response, body) => {
  
//   fs.writeFile(input[1], body, (err) => {
//     if (err) throw err;
//     else if (error || response.statusCode !== 200) {
//       console.log('Error occurred, see below: \n', error, '\n', response.statusCode);
//       return;
//     } else {
//       const pageSize = fs.statSync(input[1]).size;
//       console.log(`Downloaded and saved ${pageSize} bytes to ${input[1]}`);
//     }
//   });
// });
  

const request = require('request');
const fs = require('fs');

const [url, filePath] = process.argv.slice(2);

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(filePath, body, error => {
    !error ? console.log(`Downloaded & saved ${body.length} bytes to ${filePath}`) : console.error(error);
  });

});

// input: node fetcher.js http://www.example.edu/ ./index.html
// exp-out: Downloaded and saved 1235 bytes to ./index.html
