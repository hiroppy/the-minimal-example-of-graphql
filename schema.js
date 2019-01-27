const { makeExecutableSchema } = require('graphql-tools');

const organizations = [
  {
    name: 'nodejs',
    url: 'https://github.com/nodejs'
  },
  {
    name: 'facebook',
    url: 'https://github.com/facebook'
  },
  {
    name: 'google',
    url: 'https://github.com/google'
  },
  {
    name: 'microsoft',
    url: 'https://github.com/microsoft'
  }
];

const typeDefs = `
  type Organization {
    name: String!
    url: String!
  }

  type Query {
    organizations: [Organization]
    organization(name: String!): Organization
  }
`;

const resolvers = {
  Query: {
    organizations: () => organizations,
    organization: (obj, { name }) => organizations.find((o) => o.name === name)
  }
};

module.exports = makeExecutableSchema({ typeDefs, resolvers });
