module.exports = function(sequelize, Datatypes) {
  var User = sequelize.define('Users', {
    'id': {
      type: Datatypes.INTEGER,
      primaryKey: true
    },
    'name': Datatypes.TEXT
  }, {
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Scores, {
          foreignKey: 'userId'
        })
      }
    }
  })

  return User;
}
