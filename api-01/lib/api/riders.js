'use strict'

const util = require('../util');

/*
  {
    "name": "Josh",
    "direction": "work", // or "home"
    "date": "04-04-2018"
  }
*/

exports = module.exports = {
  getAll,
  putOne,
  // getOne,
}

function getAll (req, res) {
  util.riders_collection().then((riders) => {
    riders.find({}).toArray((err, docs) => {
      res.status('200').send(docs);
    });
  });
}

function putOne (req, res) {
  util.riders_collection().then((riders) => {
    riders.insertOne({
      name: req.body.name,
      direction: req.body.direction,
      date: req.body.date
    })
    .then((result) => {
      res.status('200').send(`Inserted ${result.insertedCount} records.\n`);
    })
    .catch((err) => {
      console.log(err);
      res.status('401').send(err);
    });
  });
}
