const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;

const MyMongoLib = function() {
  const exports = this || {};
  // Connection URL
  let url = "";
  if (process.env.PROD_MONGODB) {
    url = process.env.PROD_MONGODB + "&w=majority";
  } else {
    url =
      "mongodb+srv://mateo:mateo12345@taxis-timah.mongodb.net/test?retryWrites=true";
  }
  const client = new MongoClient(url, { useUnifiedTopology: true });
  let conn = MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  // Database Name
  const dbName = "taxis";

  exports.getLocation = conductor =>
    new Promise((resolve, reject) => {
      console.log("se va a conectar al cliente");
      conn.then(client => {
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        // Insert a single document
        const testCol = db.collection("usuarios");
        let o_id = new ObjectID(conductor);
        return testCol
          .find({ _id: o_id })
          .toArray()
          .then(res => {
            resolve({ lat: res[0].lat, lon: res[0].lon });
          })
          .catch(reject);
      });
    });

  exports.listenToChanges = cbk => {
    client.connect(function(err, client) {
      if (err !== null) {
        return;
      }
      console.log("Connected correctly to server");
      const db = client.db(dbName);
      console.log("listening to changens on mongo");

      // Insert a single document
      const testCol = db.collection("usuarios");
      const csCursor = testCol.watch();
      csCursor.on("change", data => {
        if (data.documentKey) {
          exports
            .getLocation(data.documentKey._id)
            .then(docs => cbk(JSON.stringify(docs)));
        }
      });
    });
  };
  return exports;
};

module.exports = MyMongoLib;
