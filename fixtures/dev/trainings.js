var actions = require('../../models/trainings');

module.exports.Trainings = [
  {
    title: "Warming",
    datetime: "11/19/2015 08:30",
    description: "Warmup before main training",
    state: true,
    groups: [],
    activities: [
        {
          name : "Run",
          description: "Running at a slow pace",
          duration: 15 },
        {
          name: "Abs + Squats",
          description:"4 series of abs (10 times)+ 5 series of squats without weight" ,
          duration: 10 },
        {
          name:"Stretching" ,
          description: "Procure stretch all the muscles involved",
          duration: 5 }
        ]
  },
  {
    title: "Warming",
    datetime: "11/20/2015 16:30",
    description: "Warmup before main training",
    state: true,
    groups: [],
    activities: [
        {
          name : "Run",
          description: "Running at a slow pace",
          duration: 15
        },
        {
          name: "Abs + Squats",
          description:"4 series of abs (10 times)+ 5 series of squats without weight" ,
          duration: 10
        },
        {
          name:"Stretching" ,
          description: "Procure stretch all the muscles involved",
          duration: 5
        }
        ]
  },
];
