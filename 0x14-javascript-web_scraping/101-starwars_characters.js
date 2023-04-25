#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const movie = JSON.parse(body);
  const characterUrls = movie.characters;
  const characterNames = [];

  let charactersProcessed = 0;

  characterUrls.forEach((characterUrl, index) => {
    request.get(characterUrl, (error, response, body) => {
      if (error) {
        console.error(error);
        return;
      }

      const character = JSON.parse(body);
      characterNames[index] = character.name;

      charactersProcessed++;

      if (charactersProcessed === characterUrls.length) {
        characterNames.forEach(name => console.log(name));
      }
    });
  });
});

