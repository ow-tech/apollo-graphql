
const { RESTDataSource } = require("apollo-datasource-rest")

// class implementation for fetching data
class GithubApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = "https://api.github.com"
    
  }

  // attaching auth before sending request
  willSendRequest(request) {
    request.headers.set('Authorization', `${process.env.TOKEN}` );
  }

  // fetching data and setting it to order.
  async getCommitsFromGithubApi() {
    const data =await this.get("/repos/facebook/react/commits");
    return Array.isArray(data)?
    data.map(commit => this.commitReducer(commit)):[]
  }

  // function to handle the format of data returned
  commitReducer(commit) {
    return {
      cursor: commit.node_id,
      sha: commit.sha,
      author: commit.commit.author.name,
      date:commit.commit.author.date,
      message:commit.commit.message,
      html_url:commit.html_url
    }
  }

}




module.exports = GithubApi