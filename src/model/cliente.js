const database = require('../config/database')
const databaseCliente = require ('../config/database')

class ModelCliente{
    constructor(){
        this.model = database.db.define('pessoas', {
            id: {
                type: database.db.Sequelize.INTEGER,
                //INTEGER PARA NÚMEROS!!
                primaryKey: true,
                autoIncrement: true,
            },
            name:{
                type: database.db.Sequelize.STRING

            },
            email:{
                type: database.db.Sequelize.STRING,
                unique: true
            },
            password:{
                type: database.db.Sequelize.STRING
            }
        });
    }
}

module.exports = new ModelCliente().model
