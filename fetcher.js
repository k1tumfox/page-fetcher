const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
//first arg, http://www.example.edu/
//second arg should be  ./index.html  
//print message: Downloaded and saved 1235 bytes to ./index.html

request(args[0], (error, response, body) => {
  fs.writeFile(args[1], body, (error) => {
    const pageSize = fs.statSync(args[1]).size;
    console.log(`Downloaded and saved ${pageSize} to ${args[1]}`);
  });
});


