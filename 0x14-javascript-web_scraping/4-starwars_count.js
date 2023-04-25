#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const movies = JSON.parse(body).results;
  const moviesWithWedge = movies.filter(movie => {
    return movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`);
  });

  console.log(`Number of movies where Wedge Antilles is present: ${moviesWithWedge.length}`);
});

