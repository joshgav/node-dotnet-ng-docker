// inherited: root_dir, assets_dir, lib_dir, api_dir
const path = require('path');
const os = require('os');
const request = require('request');
const lutil = require('../util.js');
const cache_client = lutil.cache_client();

const dotnetHostname = 'service-dotnet';

exports = module.exports = function api (req, res) {
  // increment requestCount each time API is called
  cache_client.incr('requestCount', function (err, reply) {
    if (err) console.error(err);
  });

  // invoke dotnet service
  request(`http://${dotnetHostname}`, function (error, response, body) {
    if (error) console.error(error);

    res.send(
      [ 'Hello from service A running on',
        os.hostname(),
        'and service B says:',
        body
      ].join(' ')
    );

  });

};

