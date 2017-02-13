const redis = require('redis');
const redisHostname = 'mycache';
const path = require('path');
var _cache_client = null;

var _dirs = {
  root_dir: path.resolve(path.join(__dirname, '..'))
};
_reset_dirs();

exports = module.exports = {
  cache_client,
  dirs
}

function cache_client () {
  if (_cache_client) return _cache_client;
  _cache_client = redis.createClient(`redis://${redisHostname}`);
  return _cache_client;
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
