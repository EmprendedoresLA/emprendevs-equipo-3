// teams Model
// -----------------------------

// Modules Dependencies:
//  - Mongoose (http://mongoosejs.com/docs/guide.html)
//
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var teamsSchema = new Schema({
    name : String,
    sport : String,
    groups : Array,
    trainer : String,
  	created : Date
});

// ### Hooks
// #### Pre-Save
teamsSchema.pre("save", function(next) {
    if(!this.created)
        this.created = new Date();
    next();
});

// ### Method:
teamsSchema.method("instanceMethod", function(param, cb) {
    var teams = this;
    this.save(cb);
});

// ### Static:
teamsSchema.statics.customMethod = function (paramid, cb) {
  var teams = this;
  teams.findOne({ _id: paramid}, function(err, teams){
      cb(err, teams);
  });
}

// Export module
module.exports = mongoose.model('teams', teamsSchema);
