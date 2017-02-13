// inherited: root_dir, assets_dir, lib_dir, api_dir
const path = require('path');
const util = require('../util.js');
const cache_client = util.cache_client();

exports = module.exports = function metrics (req,res) {
  cache_client.get('requestCount', function (err, reply) {
    if (err) console.err(err);
    res.send({ requestCount: reply });
  });
};
