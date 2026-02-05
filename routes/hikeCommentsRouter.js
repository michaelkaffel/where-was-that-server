const express = require('express');
const hikeCommentsRouter = express.Router({ mergeParams: true });

hikeCommentsRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('A JSON representation of an array of comment objects will be returned from this endpoint');
})
.post((req, res) => {
    res.end(`This endpoint will accept a JSON representation of a comment object to add to the database. Comment text: ${req.body.text}. Comment date: ${req.body.date}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /hikes/${req.params.hikeId}/comments`);
})
.delete((req, res) => {
    res.end(`Deleting ALL comments for hike ${req.params.hikeId}`);
});

hikeCommentsRouter.route('/:hikeCommentId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.statusCode = 403;
    res.end(`GET operation not supported on /hikes/${req.params.hikeId}/comments/${req.params.hikeCommentId}`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /hikes/${req.params.hikeId}/comments/${req.params.hikeCommentId}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /hikes/${req.params.hikeId}/comments/${req.params.hikeCommentId}`);
})
.delete((req, res) => {
    res.end(`This endpoint will delete comment with Id ${req.params.hikeCommentId} from hike ${req.params.hikeId}`);
});

module.exports = hikeCommentsRouter;