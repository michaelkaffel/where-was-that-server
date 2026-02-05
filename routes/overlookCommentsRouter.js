const express = require('express');
const overlookCommentsRouter = express.Router({ mergeParams: true });

overlookCommentsRouter.route('/')
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
    res.end(`PUT operation not supported on /overlooks/${req.params.overlookId}/comments`);
})
.delete((req, res) => {
    res.end(`Deleting ALL comments for overlook ${req.params.overlookId}`);
});

overlookCommentsRouter.route('/:overlookCommentId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.statusCode = 403;
    res.end(`GET operation not supported on /overlooks/${req.params.overlookId}/comments/${req.params.overlookCommentId}`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /overlooks/${req.params.overlookId}/comments/${req.params.overlookCommentId}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /overlooks/${req.params.overlookId}/comments/${req.params.overlookCommentId}`);
})
.delete((req, res) => {
    res.end(`This endpoint will delete comment with Id ${req.params.overlookCommentId} from overlook ${req.params.overlookId}`);
});

module.exports = overlookCommentsRouter;