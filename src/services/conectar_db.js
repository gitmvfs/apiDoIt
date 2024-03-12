const { resolve } = require("path")
const dotenv = require("dotenv").config({ path: resolve(__dirname , "../" , "../" , ".env") })
const Sequelize = require("sequelize")

//Conectando com o banco

const sequelize = new Sequelize(
    process.env.database_name,
    process.env.database_user,
    process.env.database_password, {
    host: process.env.database_host,
    dialect: "mysql"
})

async function conectar_db() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return sequelize;
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
        throw error;
    }
}


module.exports = sequelize;
