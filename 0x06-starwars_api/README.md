# Star Wars API Characters

This project is a Node.js script that interacts
with the [Star Wars API (SWAPI)](https://swapi.dev/)
to fetch and display character names from a specified
Star Wars movie. The script takes a movie ID as a 
command-line argument and prints each character’s name
from that movie in the same order as they appear in the API.

## Features

- Retrieves data from the Star Wars API.
- Uses the `request` module to make HTTP GET requests.
- Displays character names in the order they are listed
  in the movie’s character array.

## Requirements

- **Node.js**: Ensure Node.js is installed (Tested on Node 10).
- **request module**: Install globally by running:
  ```bash
  npm install request --global
