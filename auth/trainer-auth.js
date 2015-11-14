var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  config = module.parent.exports.config,
  logger = module.parent.exports.logger,
  Trainer = require('../models/trainers.js'),
  trainerAuth = {};

// Route Authorizer
trainerAuth.autorizer = function(req, res, next){
    logger.info(req.user);
    //authorize role
    if(typeof req.user != "undefined" && typeof req.user.role != "undefined" && req.user.role == "trainer"){
        next();
    }else{
        //Not authorized go to the login form
        res.redirect('/admin'); //cambiar luego en app.js
    }
};

// Rest Authorizer
trainerAuth.rest = {};
trainerAuth.rest.prereq = function(req){
    // pre-request analisys
    if(typeof req.user != "undefined" && typeof req.user.role != "undefined" && req.user.role == "trainer"){
        return true;
    }else{
        //Not authorized
        return false;
    }
};

// trainerAuth Strategy
trainerAuth.strategy = new LocalStrategy(
  {
    usernameField: 'username',
    passwordField: 'password'
  },
  function(username, password, done) {
    Trainer.findOne({ username: username }, function(err, trainer) {
      if (err) {
          done(null, false, { message: 'There was an error with the auth.' });
      }
      if (!trainer) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!trainer.authenticate(password)) {
        logger.info("trainer auth failure");
        return done(null, false, { message: 'Incorrect password.' });
      }
      logger.info("trainer auth success");
      trainer.nLogins++;
      trainer.last_login = Date.now();
      trainer.provider = 'adminlocal';
      trainer.role = 'trainer';
      trainer.save(function(err){
          if(err){
              logger.info("Error guardando trainer >>", err);
          }else{
              logger.info("Trainer guardado")
          }
      });
      return done(null, trainer);
    });
  }
);

// Use Strategy
passport.use('trainers', trainerAuth.strategy);

module.exports = trainerAuth;
