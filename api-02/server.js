const express = require('express');
const graphql = require('express-graphql');
const RidersSchema = require('./schema').RidersSchema;

const port = process.env.PORT || 8080;

let app = express();
app.use('/api', graphql({
  schema: RidersSchema,
  graphiql: true
}));

app.listen(port, () => { console.log(`Listening on port ${port}`) });

