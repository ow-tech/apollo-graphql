const { Sequelize, Model, DataTypes } =require('sequelize');
const { DataSource } = require('apollo-datasource');


// sequalize is a modern  nodejs Object-Relational Mapping (ORM) for i.e SQLite

// defining API_KEY model
const sequelize = new Sequelize('sqlite::memory:');
const APIKEY = sequelize.define('API_KEY', {
  api: DataTypes.STRING
},
// overriding naming convention of infection library
{
    freezeTableName: true
  }
);



class AuthKey extends DataSource {
  constructor() {
    super();
    
  }

  async createApis(){
    await sequelize.sync();
   
    await APIKEY.bulkCreate([{"api":'alex'},{"api":"barasa"}]);
    return await APIKEY.findAll();

  }

  async addApis(api){
    // await sequelize.sync();
   console.log(api)
    await APIKEY.create({"api":`${api}`});
    return await APIKEY.findAll();

  }

  async getApis(){
    // await sequelize.sync();
    return await APIKEY.findAll();

  }

}




module.exports = AuthKey;

