const express = require('express')
const bodyParser = require('body-parser')

//Initializing dishRouter as an express router 
const dishRouter = express.Router()

dishRouter.use(bodyParser.json())

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text-plain')
    next()
})
.get((req, res, next) => {
    res.end('Will send all the dishes to you!')
})
.post((req, res, next) => {
    res.end(`Will add the dish: ${req.body.name} whit details: ${req.body.description}`)
})
.put((req, res, next) => {
    res.statusCode = 403 //Operation not supported
    res.end('PUT operation not supported on /dishes')
})
.delete((req, res, next) => {
    res.end('Deleting all the dishes to you!')
})

module.exports = dishRouter