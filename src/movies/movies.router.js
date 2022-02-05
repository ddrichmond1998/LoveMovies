//no req, res, send in router.js
//requiring express router, the controller, and the error handler
const router= require('express').Router();
const controller = require('./movies.controller');
const methodNotAllowed= require('../errors/methodNotAllowed');
//key words for router: .get, .post. .put, .delete, .all
//.get is for get request
//controllers are the functions called by the router
//.all is for all other requests
router.route('/')
  .get(controller.list).all(methodNotAllowed);

router.route('/:movieId')
  .get(controller.read).all(methodNotAllowed);

router.route('/:movieId/theaters')
.get(controller.readTheatersByMovieId).all(methodNotAllowed)

router.route('/:movieId/reviews')
.get(controller.readReviewsByMovieId).all(methodNotAllowed)

module.exports= router;



