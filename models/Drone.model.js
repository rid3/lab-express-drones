// Iteration #1
const mongoose = require ("mongoose")

const droneSchema = new mongoose.Schema ({
    name : String, 
    propellers: Number,
    maxSpeed: Number,
})

const DroneModel = mongoose.model("drone", droneSchema)

module.exports = DroneModel