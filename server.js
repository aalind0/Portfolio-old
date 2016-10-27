
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('../jade/views/index');
});

app.get('/:page', function (req, res) {
  res.render('../jade/views/' + req.params.page);
});

app.use('/', express.static('public/'));

app.listen(port, function () {
  console.log('listening on port ' + port);
});
