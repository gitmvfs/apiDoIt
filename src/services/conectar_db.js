const { resolve } = require("path")
const dotenv = require("dotenv").config({ path: resolve(".env") })
const Sequelize = require("sequelize")

//Conectando com o banco

async function conectar_db() {

    const sequelize = new Sequelize(
        process.env.database_name,
        process.env.database_user,
        process.env.database_password, {
        host: process.env.database_host,
        dialect: "mysql"
    })

    try {
        await sequelize.authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            }).catch((error) => {
                console.error('Unable to connect to the database: ', error);
            });
        return sequelize

    }
    catch (err) {
        return err
    }

}

module.exports = {conectar_db}