/*
* server.js
*/

// require express and other modules
var express = require('express'),
    app = express();

// serve static files from public folder
app.use('/static',express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));

// set view engine to ejs
app.set('view engine', 'ejs');

//Home view
app.all('*', function (req, res) {
  res.render('index');
});

// listen on port 3000



app.listen(process.env.port || 3000), function() {
  console.log('server started');
};