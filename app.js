var models = require('./models');

models.Users.findAll({
  include: [{
    model: models.Scores
  }],
  raw: true
}).then(function(data) {
  console.log(data);
}).then(function() {
  return models.Scores.findAll({
    include: [{
      model: models.Users
    }],
    raw: true
  })
}).then(function(data) {
  console.log(data);
  process.exit(0);
})
