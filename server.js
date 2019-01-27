const { join } = require('path');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(join(`${__dirname}/index.html`));
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(5000);