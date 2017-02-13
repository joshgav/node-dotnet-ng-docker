const path = require('path');
const lutil = require('./util.js');

exports = module.exports = function main (req, res) {
  res.sendFile(path.join(util.dirs().assets_dir, 'index.html'));
}

