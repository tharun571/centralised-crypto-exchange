const express = require("express");
const app = express();
  
// Define routes here ...
  
app.listen(3000, function(){
  console.log("server is running on port 3000");
})

// post a json request to the sandbox api   
function post(url, data, callback) {
    let options = { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
    let req = https.request(url, options, function(res) {
        let body = '';
        res.on('data', function(d) {
            body += d;
        });
        res.on('end', function() {
            let parsed = JSON.parse(body);
            callback(parsed);
        });
    });
    req.write(JSON.stringify(data));
    req.end();
}
// get a json request to the sandbox api
function get(url, callback) {
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
    let req = https.request(url, options, function(res) {
        let body = '';
        res.on('data', function(d) {
            body += d;
        });
        res.on('end', function() {
            let parsed = JSON.parse(body);
            callback(parsed);
        });
    });
    req.end();
}