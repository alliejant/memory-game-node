const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    password: String!
  }

  type Game {
    id: ID!
    userID: ID!
    gameType: GameType
    squares: Number
    bestScore: Number
    icon: String
  }

  type Query {
    currentUser: User
    currentGame(userID: ID!, gameType: String!): Game
  }

  type Mutation {
    signup(username: String!, password: String!): String #token
    login(username: String!, password: String!): String #token
    updateBestScore(userID: ID!, gameType: GameType!, bestScore: Number!)
    updateCustomGame(userID: ID!, squares: Number!)
    updateIcons(userID: ID!, icon: String!)
  }

  enum GameType {
    EASY
    MEDIUM
    HARD
    CUSTOM
  }
`;

module.exports = typeDefs;
