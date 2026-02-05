const express = require('express');
const overlookRouter = express.Router();

overlookRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('A JSON representation of an array of overlook objects will be returned from this endpoint');
})
.post((req, res) => {
    res.end(`This endpoint will accept a JSON representation of overlook object to add to the database. Overlook name: ${req.body.title}. Overlook description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /overlooks`);
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end(`DELETE operation not supported on /overlooks`);
});

overlookRouter.route('/:overlookId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Returns data for a overlook with Id: ${req.params.overlookId}`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /overlooks/${req.params.overlookId}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /overlooks/${req.params.overlookId}`);
})
.patch((req, res) => {
    res.end(`This endpoint is for toggling the favorite value of an overlook with Id: ${req.params.overlookId}`);
})
.delete((req, res) => {
    res.end(`This endpoint will delete overlook with Id ${req.params.overlookId}`);
});

module.exports = overlookRouter;