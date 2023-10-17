const { DataTypes } = require("sequelize");
const sequelize = require("../Config/Database");

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    firstname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {});

sequelize.sync().then(() => {
    console.log('User table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = User;