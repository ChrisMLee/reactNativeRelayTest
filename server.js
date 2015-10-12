import express from 'express';
import graphQLHTTP from 'express-graphql';
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import Schema from './data/schema';

import mongoose from 'mongoose';

const GRAPHQL_PORT = 3000;


// Expose a GraphQL endpoint
var graphQLServer = express();
// Serve Graqhiql
graphQLServer.use('/graphiql', express.static('graphiql'));
graphQLServer.use('/graphiql', graphQLHTTP({schema: Schema, pretty: true}));

graphQLServer.use('/graphql', graphQLHTTP({schema: Schema, pretty: true}));

graphQLServer.listen(GRAPHQL_PORT, () => {
  console.log(`GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`);
  mongoose.connect('mongodb://localhost/rnRelayTest');
});
