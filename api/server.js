// BUILD YOUR SERVER HERE
const express = require('express')
const server = express();
const User = require('./users/model')

server.get('/api/users', (req, res) => {
  User.find()
  .then(users =>{
    res.send(users)
  })
  .catch(err =>{
    res.status(500).json({
        message: 'Error getting users',
        err: err.message,
    })
  })
})

server.get('/api/users/:id', (req, res) => {
    const {id} = req.params
    User.findById(id)
    .then(user =>{
       res.json(user)
    })
    .catch(err =>{
      res.status(500).json({
          message: 'User not found',
          err: err.message,
      })
    })
  })

server.use('*', (req, res)=>{
   res.status(404).json({
    message: "You have an error"
   })
})
module.exports = server; // EXPORT YOUR SERVER instead of {}
