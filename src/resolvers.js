
module.exports = {
   
    Query: {
        Commits: (_, __,{ dataSources }) => {
            return dataSources.GithubApi.getTracksForHome()
        }
    }
  }