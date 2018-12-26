const express = require('express');
const router = express.Router();
const axios = require('axios');
const stringify = require('json-stringify-safe');
// const RequestSchema = require('../models/request');
// const config = require('../config/database');
const Id = require('../models/id');

// Register
router.post('/search', (req, res, next) => {
  let newRequest = {
    language: req.body.language,
    owner: req.body.owner,
    repo: req.body.repo
  };

  let url = '';

  if (newRequest.owner){
    url = 'https://api.github.com/search/repositories?q='+ newRequest.repo +'+language:'+ newRequest.language +'+user:'+ newRequest.owner +'&sort=stars&order=desc'
  }else{
    url = 'https://api.github.com/search/repositories?q='+ newRequest.repo +'+language:'+ newRequest.language +'&sort=stars&order=desc'
  }
  // let url = 'https://api.github.com/search/repositories?q='+ newRequest.repo +'+language:'+ newRequest.language +'+user:'+ newRequest.owner +'&sort=stars&order=desc'
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

});

router.post('/addId', (req,res,next) => {
  let newId =  new Id({
    id : req.body.id
  });
  Id.addId(newId, (err, id) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register ID'});
    } else {
      res.json({success: true, msg: 'ID registered'});
    }
  });
});

router.post('/getIds', (req,res,next) => {
  let newId =  new Id({
    id : null
  });
  Id.findId(newId, (err, ids) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register ID'});
    } else {
      res.json({ids});
    }
  });
});

module.exports = router;
