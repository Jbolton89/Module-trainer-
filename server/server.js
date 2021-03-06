const typeDefs = require('./schemas/typeDefs')
const resolvers = require('./schemas/resolvers')

const express = require('express');
const graphqlHTTP = require('express-graphql');
const path = require('path');
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');

const { authMiddleware } = require('./utils/auth');


const app = express();
const PORT = process.env.PORT || 3001;


const server = new ApolloServer({ 
  typeDefs, 
  resolvers
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('./images', express.static(path.join(__dirname, '../client/src/images')));
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => { 
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.post("/submit", ({body}, res) => {
  const user = new User(body);
  user.setFullName();
  user.userCreated();

  User.create(user)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});