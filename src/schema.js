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
    Commits(
        pageSize: Int
       
        after: String
      ): CommitConnection!
}

type CommitConnection {
    cursor: String!
    hasMore:Boolean!
    Commits:[Commits]
    
}
 
`
 
module.exports = typeDefs

