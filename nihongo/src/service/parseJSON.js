var fs = require("fs");

module.exports = {
    getData
}

function getData(callback) {
  var content = fs.readFileSync("content.json");
  var jsonContent = JSON.parse(content);
  callback(jsonContent);
};

function editData(jsonData) {

}

// Test function
// getData((jsonData) => {
//   console.log("Kanji " + jsonData.kanji);
// })
