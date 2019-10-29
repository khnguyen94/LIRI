// Load in JQuery
var $ = require("jquery");

// Add code to read and set any environment variables with the dotenv package, for Spotify
require("dotenv").config();

// Not used
var nodePath = process.argv[0];
var filePath = process.argv[1];

// Establish variables for action-function and input-variable
var action_function = process.argv[2];
var input_variable = process.argv[3];

// Format the input_variable
input_variable = String(input_variable);
input_variable = input_variable.replace(/ /g, "+");

// Establish the output variable that we will modify based on what the user calls our liri.js app to do
var liriOutput = "";

// "concert-this" Command
// "node liri.js concert-this <artist/band name here>"

// * This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:
// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")

// EX URL: for "Celine Dion" it would be:
// `https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp`
var artistName;

var spotifyQueryURL =
  "https://rest.bandsintown.com/artists/" +
  artistName +
  "/events?app_id=codingbootcamp";

function retrievBITArtistEvents() {}

// "spotify-this-song" Command
// "node liri.js spotify-this-song '<song name here>"

// Add the code required to import the `keys.js` file and store it in a variable, there is only a Spotify key stored in this file
var keys = require("../LIRI/key.js");

function retrieveSpotifySongInfo() {}

// Create variable for access for Spotify
var spotify_key = new Object(keys.spotify_key);

var spotifyQueryURL = "";

$.ajax({
  url: spotifyQueryURL,
  method: "GET"
}).then(function() {});

// Search the Spotify API for a song
// If no song, default song is: "The Sign" by Ace of Base
// render the following information about the song:
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from

// "movie-this" Command
// "node liri.js movie-this '<movie name here>"
// Import axios into a variable
const axios = require("axios");

var movieName = input_variable;

var omdbURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + movieName + "%5C";

axios
  .get(omdbURL + movieName)
  .then(function(response) {
    // If axios was successful, log body from the site
    console.log(response.data);
    // Title of the movie.
    // Year the movie came out.
    // IMDB Rating of the movie.
    // Rotten Tomatoes Rating of the movie.
    // Country where the movie was produced.
    // Language of the movie.
    // Plot of the movie.
    // Actors in the movie.

    // Else, if unsuccesful catch the error
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

// Search the OMDB API for a movie
// If no movie input, then default movie is: "Mr. Nobody."
// EX URL: http://www.omdbapi.com/?t=Mr.+Nobody.%5C

// `do-what-it-says` Command
// "node liri.js do-what-it-says"
// Import the `fs` Node package into a variable
var fs = require("fs");

// LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

// It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

// Edit the text in random.txt to test out the feature for movie-this and concert-this.
function retrieveCustomRandomInstruction() {}

// Create a switch:case function that will read what the user has put as action-function in at process.argv[2]
switch (action) {
  // Bands in Town
  case "concert-this":
    retrievBITArtistEvents();
    break;
  // Spotify
  case "spotify-this-song":
    retrieveSpotifySongInfo();
    break;
  // OMDB
  case "movie-this":
    retrieveOMDBMovieInfo();
    break;
  // Custom from random.txt doc
  case "do-what-it-says":
    retrieveCustomRandomInstruction();
    break;
}
