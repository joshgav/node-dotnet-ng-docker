const path = require('path');
const util = require('./util.js');
const ejs  = require('ejs');

exports = module.exports = function main (req, res) {
  const index = path.join(util.dirs().assets_dir, 'index.ejs');
  ejs.renderFile(index, {ikey: process.env.APPINSIGHTS_INSTRUMENTATIONKEY}, {cache: false}, (err, str) => {
    if (err) console.log(err);
    res.status('200').send(str);
  });
}

