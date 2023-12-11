const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.send('Hello from express!');
    next();
});

module.exports = app;