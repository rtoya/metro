var express = require('express');
var app = express();
 
app.get('/', function(req, res) {
  res.send('hello world');
});
 
app.listen(3000);

// var d3 = require("d3");
// var svg = d3.select("body")
//   .append("svg")
//   .attr({
//     "xmlns": "http://www.w3.org/2000/svg",
//     "width": 750,
//     "height": 750
//   });

//   svg.append('circle')
//     .attr({
//       cx:100,
//       cy:100,
//       r:80,
//       fill:'red'
//     })

// console.log(d3.select('body').node().innerHTML); //JSDOMから出力


/*
var request = require('request');

var url = "https://api.tokyometroapp.jp/api/v2/datapoints?rdf:type=odpt:TrainInformation&#38;acl:consumerKey=4f8c117d75b85cbd6be19d82e043d5a280c6603a1270a387a70e0052d5a218d0";

request(url, function (error,  response,  body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});

*/
