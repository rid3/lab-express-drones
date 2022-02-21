const express = require('express');
const router = express.Router();
const Drone = require ("../models/Drone.model")

// require the Drone model here

router.get('/', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((oneDrone) => {
    res.render("drones/list.hbs", {oneDrone})
  })
  .catch ((err) => {
    next(err)
  })
});

router.get('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
 res.render ("drones/create-form.hbs")
});

router.post('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create({
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  })
  .then ((oneDrone) => {
    res.redirect("/drones")

  })
  .catch((err)=> {
    next(err)
  })

});

router.get('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params

  Drone.findById(id)
  //console.log(id)
  .then((oneDrone)=>{
    res.render("drones/update-form.hbs", {oneDrone})
  })
  .catch((err)=>{
    next(err)
  })
});

router.post('/:id/edit', (req, res, next) => {
   // Iteration #4: Update the drone
   const {id} = req.params

   const {name, propellers, maxSpeed} = req.body

   Drone.findByIdAndUpdate(id,{
     name,
     propellers,
     maxSpeed
   })
   .then((updateDrone)=>{
     res.redirect(`/drones`)
   })
   .catch((err)=>{
    next(err)
  })
});

router.post('/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    const { id } = req.params
  
    await Drone.findByIdAndDelete(id)
  
    res.redirect("/drones")
  }
  catch(err) {
    next(err)
  }
});

module.exports = router;
