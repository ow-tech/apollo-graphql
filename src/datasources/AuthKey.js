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
    await sequelize.sync({ force: true });
   
    return await APIKEY.create({"api":'alex'});

  }

}




module.exports = AuthKey;

