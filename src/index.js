require("dotenv").config()
const { ApolloServer} = require("apollo-server")
const typeDefs = require("./schema")
const GithubApiCommits = require("./datasources/GithubApi")

// model importation, authentication and sync
const AuthAPI = require("./datasources/AuthKey")



const resolvers = require("./resolvers")

const port = process.env.PORT || 5000


const createTable = async () => {
  new AuthAPI().createApis()
}
createTable()
const server = new ApolloServer({

  
  // context function modification to handle authorization
  context: ({ req }) => {
    // get the user token from the headers
    const token = req.headers.authorization || '';
  
    // // try to retrieve a user with the token
  
    // optionally block the request
  
   
  
    // add the token to the context
    return {token};
  },

  dataSources: () => ({
    GithubApi: new GithubApiCommits(),
    authAPI: new AuthAPI()
    
  }),

  typeDefs, resolvers,
})
 
server.listen(port).then(console.log(`server running 🚀 http://localhost:${port} `))