//key identifiers of service file: methods + the knex queries and the error hanlder, sql queries
//will only require the db connection
const knex = require('../db/connection');
//example: list returns the movies table and selects all columns
function list() {
    return knex('movies').select('*');
}

function listCritics() {
    return knex('critics').select('*');
}
//movies as m lets you use 'm shorthand for movies
function listIsShowing() {
    return knex('movies as m')
    //joining movie id as movies and movieid from movie theaters table
        .join('movies_theaters as mt', 'm.movie_id', 'mt.movie_id')
        .distinct('m.*')
        .where({ 'mt.is_showing': true });
}

function read(id) {
    return knex('movies').select('*').where({ movie_id: id });
}

function readTheatersByMovieId(id) {
    return knex('theaters as t')
        .join('movies_theaters as mt', 't.theater_id', 'mt.theater_id')
        .select('t.*', 'mt.is_showing', 'mt.movie_id')
        .where({ 'mt.movie_id': id });
        //joining ___ where movie id matches id parameter
}

function readReviewsByMovieId(id) {
    return knex('reviews as r')
        .join('movies as m', 'r.movie_id', 'm.movie_id')
        .select('r.*')
        .where({ 'r.movie_id': id });
}

module.exports = {
    list,
    listCritics,
    listIsShowing,
    read,
    readTheatersByMovieId,
    readReviewsByMovieId
};