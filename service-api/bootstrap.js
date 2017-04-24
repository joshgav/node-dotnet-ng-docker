const dotenv        = require('dotenv').config();
const appInsights   = require('applicationinsights');
const diagChannel   = require('diagnostic-source').channel;
const pkg           = require('./package.json');

diagChannel.autoLoadPackages(__dirname);

if (!process.env.APPINSIGHTS_INSTRUMENTATIONKEY) {
  process.exitCode = 2;
  throw new Error("Expected ai env var.");
}

// start AppInsights data collection
// APPINSIGHTS_INSTRUMENTATIONKEY env var must be set
appInsights.setup()
  .setAutoDependencyCorrelation(true)
  .setAutoCollectRequests(true)
  .setAutoCollectPerformance(true)
  .setAutoCollectExceptions(true)
  .setAutoCollectDependencies(true)
  .start();

// run the user's app
require(`./${pkg.main}`);

