const express = require('express');
const CandidateController = require('./controllers/CandidateController');
const routes = new express.Router();


routes.post('/register', CandidateController.register);
routes.get('/', (req, res)=> {
    res.json('Olá Mundo');
})

module.exports = routes;