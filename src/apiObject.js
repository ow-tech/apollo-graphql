const { Sequelize, Model, DataTypes } =require('sequelize');

// sequalize is a modern  nodejs Object-Relational Mapping (ORM) for i.e SQLite

// defining API_KEY model
const sequelize = new Sequelize('sqlite::memory:');
const API_KEY = sequelize.define('API_KEY', {
  api: DataTypes.STRING
},
// overriding naming convention of infection library
{
    freezeTableName: true
  }
);


(async () => {
    await sequelize.sync({ force: true });
    const newApi = await API_KEY.create({"api":'alex'})

// console.log(newApi.id)
  })().then(module.exports);


// console.log(jane.findData);

// async function createData(){
//    return await API_KEY.create({
//         api: 'janedoe',
       
//       });

// } 



// async function findData(){
//     return await API_KEY.findAll()
// }

// const newApi = findData()
  
//   const APIS = async ()=>{ API_KEY.findAll()};
// console.log(newApi)
  module.exports = API_KEY