module.exports = function(sequelize, Datatypes) {
  var Score = sequelize.define('Scores', {
    'id': {
      type: Datatypes.INTEGER,
      primaryKey: true
    },
    'userId': {
      type: Datatypes.INTEGER
    }
  }, {
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        Score.belongsTo(models.Users, {
          foreignKey: 'userId'
        })
      }
    }
  });

  return Score;
}
