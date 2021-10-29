var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'GET',
  'hostname': 'api.hyra.io',
  'path': '/v2/activity?workspace=idM2RGFOloTOcgmvllML&userId=121331445',
  'headers': {
    'Authorization': 'c749332f088ddb095377148f95f8c30d1665ba2a'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();