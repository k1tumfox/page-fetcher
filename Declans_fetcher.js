const fs = require("fs");
const request = require("request");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
args = process.argv.slice(2);
request(args[0], (error, response, body) => {
  if (error) {
    return "error:", error; // Print the error if one occurred
  }
  if (response.statusCode !== 200) {
    return "statusCode:", response && response.statusCode;
  }
  fs.writeFile(args[1], body, (err) => {
    if (err) {
      return console.log(err);
    }
    if (args[1]) {
      rl.question(
        "File already exists!\nWould you like to overwrite? type (y/n)\n",
        (answer) => {
          if (answer === "y") {
            const bytes = fs.statSync(args[1]).size;
            console.log(`Downloaded and saved ${bytes} bytes to ${args[1]}`);
            rl.close();
          } else {
            console.log(`File not downloaded.`);
            rl.close();
          }
        }
      );
    }
  });
});