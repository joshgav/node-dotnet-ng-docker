This repo contains a demo app with Node.js and .NET backends and an Angular frontend. The backend services are in Docker containers and created along with a Redis cache container by docker-compose.

Each component (.NET, Node.js, and HTML page) are instrumented with AppInsights.
The instrumentation key for .NET and Node.js is picked up by docker-compose from
a local .env file. The key for the HTML page is hardcoded (for now).

The frontend service (service-a) is available at http://localhost:8080.
It's also configured to support --inspect for debugging.

