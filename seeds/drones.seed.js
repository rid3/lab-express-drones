const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

const Drone = require ("../models/Drone.model")
const mongoose = require ("mongoose")

mongoose.connect("mongodb://localhost/drone-app")
.then((response)=>{
  console.log("Conectado a la DB")
  return Drone.insertMany(drones)
})
.then((response)=>{
    console.log("Drone add")
    mongoose.connection.close()
})
.catch((err)=>{
    console.log(err)
})

