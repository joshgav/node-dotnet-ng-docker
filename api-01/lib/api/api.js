// inherited: root_dir, assets_dir, lib_dir, api_dir
const path = require('path');
const os = require('os');
const request = require('request');
const lutil = require('../util.js');
const cache_client = lutil.cache_client();

const dotnetHostname = 'api-11';

exports = module.exports = function api (req, res) {
  // increment requestCount each time API is called
  cache_client.incr('requestCount', function (err, reply) {
    if (err) console.error(err);
  });

  // invoke dotnet service
  request(`http://${dotnetHostname}`, function (error, response, body) {
    if (error) console.error(error);
    
    if (Math.random() < 0.05) {
      res.status(500).send(
        "Whoops, something broke! Zone: " +
        (global.Zone || { current: { name: "no zone" }}).current.name
      );
      return;
    }

    res.send(
      [ 'Hello from service A running on',
        os.hostname(),
        'and service B says:',
        body
      ].join(' ')
    );
  });
};
