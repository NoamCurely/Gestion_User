const { DataTypes, Model } = require("sequelize");
const sequelize = require("../Config/Database");
const User = require("./UserModel");

class Role extends Model {}

Role.init({
    id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        enum: ["user", "admin"],
        allowNull: false
    },
},
    {
        sequelize: sequelize,
        modelName: "role",
        freezeTableName: true,
        timestamps: false,
        initialAutoIncrement: 0
    }
);

Role.associate = function() {
    Role.belongsTo(User, { foreignKey: "id_user" });
}

sequelize.sync().then(() => {
    console.log('User table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = Role;