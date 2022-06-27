const {paginateResults} = require('./utils');


module.exports = {
   
    // Query: {
    //     Commits: (_, __,{ dataSources }) => {
    //         return dataSources.GithubApi.getTracksForHome()
    //     }
    // }

    Query: {
        Commits: async (_, {pageSize = 5, after}, {dataSources}) => {
          const allCommits = await dataSources.GithubApi.getCommitsFromGithubApi();
          // we want these in reverse chronological order
          allCommits.reverse();
    
          const Commits = paginateResults({
            after,
            pageSize,
            results: allCommits
          });
          return{
          Commits,
          cursor: Commits.length ? Commits[Commits.length - 1].cursor : null,
          // if the cursor at the end of the paginated results is the same as the
          // last item in _all_ results, then there are no more results after this
          hasMore: Commits.length
            ? Commits[Commits.length - 1].cursor !==
              allCommits[allCommits.length - 1].cursor
            : false
        };
    }
}

  }