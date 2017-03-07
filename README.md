This repo contains a demo app with Node.js and .NET backends and an Angular
frontend. The backend services are in Docker containers and created along with
a Redis cache container by docker-compose.

To run:

```shell
git clone <this_repo> && cd <this_repo>
git submodule update --init
echo APPINSIGHTS_INSTRUMENTATIONKEY=<your_ikey> > .env
docker-compose up --build
```

Each component (.NET, Node.js, and HTML page) are instrumented with AppInsights.
The instrumentation key for .NET and Node.js is picked up by docker-compose from
a local .env file. The key for the HTML page is hardcoded (for now).

The frontend service (service-api) is available at http://localhost:8080.
It's also configured to support --inspect for debugging.

