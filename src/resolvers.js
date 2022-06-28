const {paginateResults} = require('./utils');
const { AuthenticationError, Error } = require("apollo-server")


module.exports = {
 
    Query: {
        GetCommits: async (_, {pageSize = 5, after}, context) => {

          const token = context.token;
          const api = await context.dataSources.authAPI.getApis();  
         
          // check validity of API KEY
        
          if(api){
           
            const apiObject = api.find(key => key.api === token );
          
              if(apiObject==undefined){
                throw new AuthenticationError('Your Authorization API KEY is invalid')
              }
                };

          const allCommits = await context.dataSources.GithubApi.getCommitsFromGithubApi();
          // we want these in reverse chronological order
          allCommits.reverse();
          // console.log(api)
    
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
    },

    // hello word function
      hello: () => {
          return 'Hello World!';
      },

      

  },
  Mutation:{
    generateNewApiKey: async (_, {api}, context) => {
      // console.log(api)
      try{
        await context.dataSources.authAPI.addApis(api);
        // console.log(context.dataSources.authAPI.getApis())
        return {"api":api};
      }catch(err){
        return (err);
      }
    }

}

  // {
    
    

  }