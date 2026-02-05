
const express = require('express');
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');
const overlookRouter = require('./routes/overlookRouter');
const hikeRouter = require('./routes/hikeRouter');
const campsiteCommentsRouter = require('./routes/campsiteCommentsRouter');
const hikeCommentsRouter = require('./routes/hikeCommentsRouter');
const overlookCommentsRouter = require('./routes/overlookCommentsRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/campsites', campsiteRouter);
app.use('/campsites/:campsiteId/comments', campsiteCommentsRouter);
app.use('/overlooks', overlookRouter);
app.use('/overlooks/:overlookId/comments', overlookCommentsRouter);
app.use('/hikes', hikeRouter);
app.use('/hikes/:hikeId/comments', hikeCommentsRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server for <a href="https://where-was-that-mk-react.web.app/">Where Was That</a></h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/\n
        Data available at:\n
        http://${hostname}:${port}/campsites\n
        http://${hostname}:${port}/overlooks\n
        http://${hostname}:${port}/hikes\n
        Nested resources:\n
        http://${hostname}:${port}/campsites/:campsiteId/comments\n
        http://${hostname}:${port}/hikes/:hikeId/comments\n
        http://${hostname}:${port}/overlooks/:overlookId/comments`
    )
});