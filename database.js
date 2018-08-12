var mongo_client = require('mongodb');
var url = "mongodb://localhost:27017/RBC";

mongo_client.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
