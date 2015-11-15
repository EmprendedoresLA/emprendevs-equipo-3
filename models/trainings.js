// Trainings Model
// -----------------------------


/**
 __  __                          _           _
|  \/  | ___ _ __ _ __ ___   ___| | __ _  __| | __ _
| |\/| |/ _ \ '__| '_ ` _ \ / _ \ |/ _` |/ _` |/ _` |
| |  | |  __/ |  | | | | | |  __/ | (_| | (_| | (_| |
|_|  |_|\___|_|  |_| |_| |_|\___|_|\__,_|\__,_|\__,_|

*/
// Modules Dependencies:
//  - Mongoose (http://mongoosejs.com/docs/guide.html)
//
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

// Trainings Model
// -----------------------------
var trainingsSchema = new Schema({
    title : String,
    datetime : Date,
    description : String,
    state : Boolean,
    groups : Array,
    activities : Array,
    coverage : Number,
	  created : Date
});

// ### Hooks
// #### Pre-Save
trainingsSchema.pre("save", function(next) {
    if(!this.created)
        this.created = new Date();
    next();
});


// ### Method:
trainingsSchema.method("instanceMethod", function(param, cb) {
    var trainings = this;
    this.save(cb);
});

// ### Static:
trainingsSchema.statics.customMethod = function (paramid, cb) {
  var Trainings = this;
  Trainings.findOne({ _id: paramid}, function(err, trainings){
      cb(err, trainings);
  });
}

// Export module
module.exports = mongoose.model('Trainings', trainingsSchema);
