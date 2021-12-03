if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();

//Routes

const moviesRouter = require('./movies/movies.router');
const theatersRouter = require('./theaters/theaters.router');
const reviewsRouter = require('./reviews/reviews.router');

//Error Handlers
const notFound = require('./errors/notFound');
const errorHandler = require('./errors/errorHandler');

app.use(cors());
app.use(express.json());

//Route Handlers
app.use('/movies', moviesRouter);
app.use('/theaters', theatersRouter)
app.use('/reviews', reviewsRouter);

//Error Handlers
app.use(notFound);
app.use(errorHandler);

module.exports = app;