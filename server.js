const jsonServer = require('json-server');
const express = require('express');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use('/api', middlewares, router);

server.use(express.static(path.join(__dirname, 'build')));
server.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(port);