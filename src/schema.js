const { gql } = require("apollo-server")

const typeDefs = gql`

type Commits{
    sha: String!
    message: String!
    html_url:String!
    commit: Committer!
    hasAuthor:[Author]!

}

type Committer{
    message:String!
    author:Author!


}
type Author{
    name: String!
    date: String!

}

type Query{
    Commits: [Commits]
}

 
`
 
module.exports = typeDefs

