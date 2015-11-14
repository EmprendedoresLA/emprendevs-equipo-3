// Groups Model
// -----------------------------

// Modules Dependencies:
//  - Mongoose (http://mongoosejs.com/docs/guide.html)
//
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var groupsSchema = new Schema({
    players : Array,
    trainings : Array,
    name : String,
    description : String,
  	created : Date
});

// ### Hooks
// #### Pre-Save
groupsSchema.pre("save", function(next) {
    if(!this.created)
        this.created = new Date();
    next();
});

// ### Method:
groupsSchema.method("instanceMethod", function(param, cb) {
    var groups = this;
    this.save(cb);
});

// ### Static:
groupsSchema.statics.customMethod = function (paramid, cb) {
  var Groups = this;
  Groups.findOne({ _id: paramid}, function(err, groups){
      cb(err, groups);
  });
}

// Export module
module.exports = mongoose.model('Groups', groupsSchema);
