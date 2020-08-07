const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
//first arg, http://www.example.edu/  
//https://www.google.com/fdsafsafsa.html
//second arg should be  ./index.html  
//print message: Downloaded and saved 1235 bytes to ./index.html

request(args[0], (error, response, body) => {
  
  fs.writeFile(args[1], body, (err) => {
    if (err) {    //local filepath invalid handler
      console.log("invalid path / file DNE", err);
    } else if (error || response.statusCode !== 200) { //URL error handler
      console.log('Error occurred, see below: \n', error, '\n', response.statusCode);
      return;
    } else {
      const pageSize = fs.statSync(args[1]).size;
      console.log(`Downloaded and saved ${pageSize} to ${args[1]}`);
    }
  });
});


