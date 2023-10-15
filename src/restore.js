const request = require('request');
const fs = require('fs');
var category = 'happiness';
let value = [];
request.get({
  url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
  headers: {
    'X-Api-Key': 'MuUkhgtCizYq7IyNBzrnkQ==QFFy5AKJHXXD7U01'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else {
    
    fs.writeFile('quote.json', body.slice(1,-1), err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
  }
});

const url = "https://api.thecatapi.com/v1/images/search?=api_key=live_TCEQ500WZxDwqe7ZPYqHq74Uvt3qE2PpH2Ni0LWEnwkidYH2RD9ZcJboA8t7HZXR";

async function fetchData () {
    const url = "https://api.thecatapi.com/v1/images/search?=api_key=live_TCEQ500WZxDwqe7ZPYqHq74Uvt3qE2PpH2Ni0LWEnwkidYH2RD9ZcJboA8t7HZXR";
    const response = await fetch(url)
    const data = await response.json()
    const stringedData = JSON.stringify(data[0]);
    fs.writeFile('image.json', stringedData, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
  }

  fetchData()
