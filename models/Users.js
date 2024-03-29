"use stict"

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("user", {
        firstName: {type: DataTypes.STRING, allowNull: false},
        lastName: {type: DataTypes.STRING, allowNull: false},
        email: {type: DataTypes.STRING, allowNull: false}
    }, {freezeTableName: true, timeStamps: true})

    return Users;
}