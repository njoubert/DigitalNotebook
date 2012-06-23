/* This is where the magic starts. */
var connect = require('connect');

var app = connect();
app.use(connect.logger('dev'));
app.use(connect.static('client/'));
app.listen(3000);

console.log("Server listening on port 3000");