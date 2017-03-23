## Vanpool Riders

In Seattle many of us, including me, get to work in county-sponsored vanpools
and vans. The site where we used to sign up and track riders was taken down a
couple years ago :(. So this sample app will eventually replace it!

The app contains several components for testing App Insights, Node.js, .NET
Core, and Docker. Not all of them do useful work at the moment :).

**NOTE** The ikey in the HTML page is hardcoded at the moment, see [#1][].

[#1]: https://github.com/joshgav/vanpool-riders/issues/1

## Get Started

First [create an Azure App Insights resource][], copying the instrumentation key
(aka "ikey") for use below.

For now, overwrite the instrumentation key in
[./service-api/assets/index.html#L15][] manually (see [#1][]).

Then, execute the following commands:

```shell
$ git clone https://github.com/joshgav/vanpool-riders && cd ./vanpool-riders
$ git submodule update --init
$ echo APPINSIGHTS_INSTRUMENTATIONKEY=<your_ikey> > .env
$ docker-compose up --build
```

[create an Azure App Insights resource]: https://docs.microsoft.com/en-us/azure/application-insights/app-insights-create-new-resource
[./service-api/assets/index.html#L15]: https://github.com/joshgav/vanpool-riders/blob/de2f45197b9942f87b8319f5cbefb5091f6408fd/service-api/assets/index.html#L15

Each component (.NET, Node.js, and HTML page) are instrumented with AppInsights.
The instrumentation key for .NET and Node.js is picked up by docker-compose from
a local .env file. The key for the HTML page is hardcoded (for now).

The frontend service (service-api) is available at http://localhost:8080.
It's also configured to support --inspect for debugging.

## Things to try:

* Browse to http://localhost:8080 and click the "Say It Again" button a few
  times. Refresh the page too.
* API calls which call MongoDB:
  * `curl -d '{"name":"Josh","direction":"work","date":"2017-03-22"}' -H "Content-Type: application/json" http://localhost:8080/riders`
  * `curl http://localhost:8080/riders`

