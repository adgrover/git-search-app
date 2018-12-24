const express = require('express');
const router = express.Router();
const axios = require('axios');
const stringify = require('json-stringify-safe');
// const RequestSchema = require('../models/request');
// const config = require('../config/database');
// const User = require('../models/user');

// Register
router.post('/search', (req, res, next) => {
  let newRequest = {
    language: req.body.language,
    owner: req.body.owner,
    repo: req.body.repo
  };
  let url = 'https://api.github.com/search/repositories?q='+ newRequest.repo +'+language:'+ newRequest.language +'&sort=stars&order=desc'
  axios.get(url)
  .then(response => {
    let arrayOfIds = [];
    const data = JSON.parse(stringify(response.data));
    
    for(let i=0; i<data.items.length; i++){
      arrayOfIds.push(data.items[i].id);
    }

    res.json(data);
  })
  .catch(error => {
    res.json(404, 'Not Found');
  });

  // User.addUser(newUser, (err, user) => {
  //   if(err) {
  //     res.json({success: false, msg: 'Failed to register user'});
  //   } else {
  //     res.json({success: true, msg: 'User registered'});
  //   }
  // });
});

module.exports = router;
