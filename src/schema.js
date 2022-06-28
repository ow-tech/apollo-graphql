const { gql } = require("apollo-server")

const typeDefs = gql`


type Commits{
    sha: String!
    html_url:String!
    author: String!
    date: String!
    message:String!

}

type Query{
    GetCommits(
        pageSize: Int
       
        after: String
      ): CommitConnection!

      hello: String
}

type CommitConnection {
    Commits:[Commits]
    
}

type Api{
    api: String
}

type Mutation{
    generateNewApiKey(api:String):Api
}


 
`
 
module.exports = typeDefs

