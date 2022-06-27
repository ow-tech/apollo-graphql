require("dotenv").config()
const { ApolloServer } = require("apollo-server")
const typeDefs = require("./schema")
const GithubApiCommits = require("./datasources/GithubApi")

const APIS = require("./apiObject")

const resolvers = require("./resolvers")
const port = process.env.port || 9000
const server = new ApolloServer({
  dataSources: () => ({
    GithubApi: new GithubApiCommits()
    
  }),
  typeDefs, resolvers})
  // const data=() => ({
  //   commitsApi: new GithubApiCommits()
    
  // })
server.listen(port).then(() => {
  console.log(`server running 🚀 http://localhost:${port}`)
})