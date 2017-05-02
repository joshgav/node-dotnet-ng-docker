const dotenv        = require('dotenv').config();
const appInsights   = require('applicationinsights');
const pkg           = require('./package.json');

// to be removed once integrated in AI
const diagChannel   = require('diagnostic-channel').channel;
diagChannel.autoLoadPackages(__dirname);
diagChannel.addContextPreservation((cb) => {
  return Zone.current.wrap(cb, "AI-ContextPreservation");
});
// /end

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

