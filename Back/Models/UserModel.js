const { DataTypes, Model } = require("sequelize");
const sequelize = require("../Config/Database");
const Role = require("./RoleModel");

class User extends Model {}

User.init({
    id_user: {
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
},  {
        sequelize: sequelize,
        modelName: "user",
        freezeTableName: true,
        timestamps: false,
        initialAutoIncrement: 0
    }
);

User.associate = function() {
    User.belongsTo(Role, { foreignKey: "id_user" });
};

// console.log(User.belongsTo(Role));

sequelize.sync().then(() => {
    console.log('User table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = User;