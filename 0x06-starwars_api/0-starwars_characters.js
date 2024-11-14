#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  const movie = JSON.parse(body);
  const characters = movie.characters;

  // Use Promise.all to handle asynchronous requests for characters in order
  Promise.all(characters.map((characterUrl) => {
    return new Promise((resolve, reject) => {
      request(characterUrl, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          const character = JSON.parse(body);
          resolve(character.name);
        }
      });
    });
  }))
  .then((characterNames) => {
    characterNames.forEach((name) => console.log(name));
  })
  .catch((error) => console.error('Error fetching character names:', error));
});
