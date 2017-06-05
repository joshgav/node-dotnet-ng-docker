const graphql = require('graphql');
const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
const fs = require('fs');

const SCHEMA_PATH = `${__dirname}/schema.gql`;
const schema_string = fs.readFileSync(SCHEMA_PATH, 'utf8');
const resolvers_object = require('./resolvers');
let RidersSchema; // :graphql.GraphQLSchema

try {
  // to build schema without resolvers:
  // RidersSchema = graphql.buildSchema(schema_string);
  RidersSchema = makeExecutableSchema({
    typeDefs: schema_string,
    resolvers: resolvers_object,
    logger: console
  });
} catch (err) {
  console.error(`[error processing schema]: ${err}`);
}

module.exports = exports = {
  RidersSchema
};

