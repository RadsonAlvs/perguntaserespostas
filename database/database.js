const Sequelize = require('sequelize');

const connection = new Sequelize('pergunteiblog', 'root', '210922',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection