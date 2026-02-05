const express = require('express');
const campsiteCommentsRouter = express.Router({ mergeParams: true });

campsiteCommentsRouter.route('/')
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
    res.end(`PUT operation not supported on /campsites/${req.params.campsiteId}/comments`);
})
.delete((req, res) => {
    res.end(`Deleting ALL comments for campsite ${req.params.campsiteId}`);
});

campsiteCommentsRouter.route('/:campsiteCommentId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.statusCode = 403;
    res.end(`GET operation not supported on /campsites/${req.params.campsiteId}/comments/${req.params.campsiteCommentId}`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}/comments/${req.params.campsiteCommentId}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /campsites/${req.params.campsiteId}/comments/${req.params.campsiteCommentId}`);
})
.delete((req, res) => {
    res.end(`This endpoint will delete comment with Id ${req.params.campsiteCommentId} from campsite ${req.params.campsiteId}`);
});

module.exports = campsiteCommentsRouter;