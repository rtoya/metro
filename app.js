var request = require('request');

var url = "https://api.tokyometroapp.jp/api/v2/datapoints?rdf:type=odpt:TrainInformation&#38;acl:consumerKey=4f8c117d75b85cbd6be19d82e043d5a280c6603a1270a387a70e0052d5a218d0";

request(url, function (error,  response,  body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});
