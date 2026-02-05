const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('A JSON representation of an array of campsite objects will be returned from this endpoint');
})
.post((req, res) => {
    res.end(`This endpoint will accept a JSON representation of a campsite object to add to the database. Campsite name: ${req.body.title}. Campsite description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /campsites`);
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end(`DELETE operation not supported on /campsites`);
});

campsiteRouter.route('/:campsiteId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Returns data for a campsite with Id: ${req.params.campsiteId}`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /campsites/${req.params.campsiteId}`);
})
.patch((req, res) => {
    res.end(`This endpoint is for toggling the favorite value of a campsite with Id: ${req.params.campsiteId}`);
})
.delete((req, res) => {
    res.end(`This endpoint will delete campsite with Id ${req.params.campsiteId}`);
});

module.exports = campsiteRouter;