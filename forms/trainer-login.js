var forms = require('mongoose-forms');
var Trainer  = require('../models/trainers.js');

module.exports = function() {
  return forms.Form(Trainer, {
    method: 'post',
    action: '/trainer',
    maps: ['username', 'password'],
    fields: {
      username: {
        formname: "loginForm"
      },
      password: {
        template: 'Password',
        validate: function(value, check) {
          check(value, 'Minimum 6 characters and maximum 10').len(6, 10);
        }
      }
    }
  });
};
