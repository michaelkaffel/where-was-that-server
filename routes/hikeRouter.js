const express = require('express');
const hikeRouter = express.Router();

hikeRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('A JSON representation of an array of hike objects will be returned from this endpoint');
})
.post((req, res) => {
    res.end(`This endpoint will accept a JSON representation of a hike object to add to the database. Hike name: ${req.body.title}. Hike description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /hikes`);
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end(`DELETE operation not supported on /hikes`);
});

hikeRouter.route('/:hikeId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Returns data for a hike with Id: ${req.params.hikeId}`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /hikes/${req.params.hikeId}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /hikes/${req.params.hikeId}`);
})
.patch((req, res) => {
    res.end(`This endpoint is for toggling the favorite value of a hike with Id: ${req.params.hikeId}`);
})
.delete((req, res) => {
    res.end(`This endpoint will delete hike with Id ${req.params.hikeId}`);
});

module.exports = hikeRouter;