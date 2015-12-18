var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demo_app');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("Successfully connected to database..");
});
module.exports = mongoose;
