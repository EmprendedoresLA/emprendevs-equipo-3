var actions = require('../../models/trainers');

module.exports.Trainers = [
  {
    username : "mgallardo",
    password: "asd123",
    name:"Marcelo",
    lastname: "Gallardo",
    email: "mgallardo@gmail.com",
    state: true,
    role: "trainer",
    team:
      {
        name: "River Plate - Primera División",
        sport: "futbol"}//,
        //created: "2015-11-13T09:03:58 +03:00"
      },
    {
      username : "shernandez",
      password: "123456",
      name:"Sergio",
      lastname: "Hernandez",
      email: "shernandez@gmail.com",
      state: true,
      role: "trainer",
      team:
        {
          name: "Argentina  - Selección Mayor",
          sport: "basquet"
        }//,
        //created: "2015-11-13T09:03:59 +03:00"
      },
      {
        username : "Juan Jefe",
        password: "asd123",
        name:"Juan",
        lastname: "Jefe",
        email: "jjefe@gmail.com",
        state: true,
        role: "trainer",
        team:
          {
            name: "Ventas - Empresa SA",
            sport: "company"
          }//,
          // created: "2015-11-13T09:04:00 +03:00"
      }
];
