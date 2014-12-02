var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World N!');
});

var port = precess.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
