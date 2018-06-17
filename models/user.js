module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        user_firstName: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        user_lastName: {
            type: DataTypes.STRING(255)
        }
    }, {
        timestamps: false
     });

    return User;
}