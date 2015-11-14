// Trainers Model
// -----------------------------

// Modules Dependencies:
//  - Mongoose (http://mongoosejs.com/docs/guide.html)
//
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');

var trainersSchema = new Schema({
    username : String,
    password : String,
    name : String,
    lastname : String,
    email : String,
    state : Boolean,
    role : String,
    team : {
      name : String,
      sport : String
    },
  	created : Date
});

// ### Hooks
// #### Pre-Save
trainersSchema.pre("save", function(next) {
    if(this.isModified('password'))
        this.password = crypto.createHash('md5')
            .update(this.password)
            .digest("hex");
    if(!this.created)
        this.created = new Date();
    next();
});


trainersSchema.method('authenticate', function(password) {
    return crypto.createHash('md5').update(password).digest("hex") === this.password;
});


// ### Method:
trainersSchema.method("instanceMethod", function(param, cb) {
    var trainers = this;
    this.save(cb);
});

// ### Static:
trainersSchema.statics.customMethod = function (paramid, cb) {
  var Trainers = this;
  Trainers.findOne({ _id: paramid}, function(err, trainers){
      cb(err, trainers);
  });
}

// Export module
module.exports = mongoose.model('Trainers', trainersSchema);
