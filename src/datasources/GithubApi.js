// const { RESTDataSource } = require("apollo-datasource-rest")

// class GithubApi extends RESTDataSource {
//   constructor() {
//     super()
//     this.baseURL = "https://catfact.ninja"
//   }

//   async getAllCommits() {
//     const response = await this.get(`/fact`);
   
//     return response || [];
// }
// }

// module.exports = GithubApi
const { RESTDataSource } = require("apollo-datasource-rest")

class GithubApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = "https://api.github.com"
    
  }
  willSendRequest(request) {
    request.headers.set('Authorization', `${process.env.TOKEN}` );
  }
  async getTracksForHome() {
    const data =await this.get("/repos/facebook/react/commits");
    return data;
  }

  
}

module.exports = GithubApi