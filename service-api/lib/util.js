const redis = require('redis');
const mongo = require('mongodb');
const path = require('path');

var _cache_client = null;
var _db = null;
var _collection = null;

const REDIS_HOSTNAME = 'mycache';
const MONGO_HOSTNAME = 'mymongo';
const MONGO_PORT     = '27017';
const MONGO_DB_NAME  = 'vanpool';
const MONGO_COLLECTION_NAME = 'riders';
const MONGO_URL = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB_NAME}`;

var _dirs = {
  root_dir: path.resolve(path.join(__dirname, '..'))
};
_reset_dirs();

exports = module.exports = {
  cache_client,
  riders_collection,
  dirs
}

// TODO: promisify?
function cache_client () {
  if (_cache_client) return _cache_client;
  _cache_client = redis.createClient(`redis://${REDIS_HOSTNAME}`);
  return _cache_client;
}

function riders_collection () {
  return new Promise((resolve, reject) => {
    if (_collection) resolve(_collection);

    mongo.MongoClient.connect(MONGO_URL, (err, db) => {
      if (err) reject(err);

      _db = db;

      db.collection(MONGO_COLLECTION_NAME, (err, coll) => {
        if (err) reject (err);

        _collection = coll;
        resolve(_collection);
      });
    });
  });
}


function dirs (root_dir) {
  root_dir = path.resolve(root_dir);
  if (root_dir && root_dir !== _dirs.root_dir) {
    _dirs.root_dir = root_dir;
    _reset_dirs();
  }
  return _dirs;
}

function _reset_dirs () {
  _dirs.assets_dir = path.join(_dirs.root_dir, 'assets'),
  _dirs.lib_dir = path.join(_dirs.root_dir, 'lib'),
  _dirs.api_dir = path.join(_dirs.lib_dir, 'api')
}
