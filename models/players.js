// Players Model
// -----------------------------

// Modules Dependencies:
//  - Mongoose (http://mongoosejs.com/docs/guide.html)
//
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var playersSchema = new Schema({
    username      : String,
    name          : String,
    lastname          : String,
    password          : String,
    state          : Boolean,
    role          : String,
    email          : String,
    dni          : String,
    phone          : String,
    address          : String,
    birthday          : Date,
    height          : Number,
    weight          : Number,
    groups          : Array,
	  created       : Date
});

playersSchema.pre("save", function(next) {
    if(this.isModified('password'))
        this.password = crypto.createHash('md5')
            .update(this.password)
            .digest("hex");
    if(!this.created)
        this.created = new Date();
    next();
});

playersSchema.method('authenticate', function(password) {
    return crypto.createHash('md5').update(password).digest("hex") === this.password;
});

// ### Hooks
// #### Pre-Save
playersSchema.pre("save", function(next) {
    if(!this.created)
        this.created = new Date();
    next();
});

// ### Method:
playersSchema.method("instanceMethod", function(param, cb) {
    var players = this;
    this.save(cb);
});

// ### Static:
playersSchema.statics.customMethod = function (paramid, cb) {
  var Players = this;
  Players.findOne({ _id: paramid}, function(err, players){
      cb(err, players);
  });
}

// Export module
module.exports = mongoose.model('Players', playersSchema);
