var express = require("express");
var router = express.Router();
var MyMongoLib = require("../MyMongoLib");
const myMongoLib = MyMongoLib();

router.get("/location", (req, res) => {
  let conductor = req.query.conductor;
  console.log(conductor);
  myMongoLib
    .getLocation(conductor)
    .then(docs => {
      res.send(docs);
    })
    .catch(err =>
      res.send({ err: err, msg: "error al obtener los datos de la bd aa" })
    );
});

module.exports = router;
