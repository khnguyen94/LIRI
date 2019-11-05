// Add code to read and set any environment variables with the dotenv package, for Spotify
require("dotenv").config();

// Not used
var nodePath = process.argv[0];
var filePath = process.argv[1];

// Establish default movie/song names (must check for undefined, statements later in code)
var artistName = "kanye+west";
var songName = "The Sign";
var movieName = "Mr. Nobody";

// Establish variables for action-function and input-variable
var action_function = process.argv[2];
var input_variable = process.argv[3];

// // Format the input_variable
// input_variable = input_variable;
// input_variable = input_variable.replace(/ /g, "+");

// "concert-this" Command
// "node liri.js concert-this <artist/band name here>"
// Import axios into a variable
const axios = require("axios");
const moment = require("moment");

function retrievBITArtistEvents(itemInterest) {
  // Search the BIT API for artist event
  // If no artist, default artist is: "Kanye West"
  // If statement to check if process.argv[3] is defined, then set artistName to be equal to that custom song by User
  
  if (input_variable != undefined) {
    // console.log("input: " + input_variable);
    itemInterest = input_variable;

    //loop through the arg array until there aren't any more arguments
    for (var i = 4; process.argv[i] != undefined; i++) {
      console.log("inside for loop in spotify");

      //add each arg to the artistName var to use in the QueryURL
      itemInterest += "+" + process.argv[i];

      console.log(itemInterest);
    }
  }

  // Define queryURL
  var bandsInTownQueryURL =
    "https://rest.bandsintown.com/artists/" +
    itemInterest +
    "/events?app_id=codingbootcamp?date=upcoming";

  console.log(bandsInTownQueryURL);

  // Run the axios.get function...
  // The axios.get function takes in a URL and returns a promise (just like $.ajax)
  axios
    .get(bandsInTownQueryURL)
    .then(function(response) {
      var results = response.data;

      console.log(" \n These are the upcoming concerts for this artist: \n");

      for (var i = 0; i < results.length; i++) {
        console.log("\n Concert" + (i + 1) + ": ");
        // Venue name
        console.log("\n" + results[i].venue.name);
        // Venue location
        console.log(results[i].venue.city);
        // Date of the Event (use moment to format this as "MM/DD/YYYY")
        console.log(moment(results[i].datetime).format("MM/d/YYYY"));
      }
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
}

// "spotify-this-song" Command
// "node liri.js spotify-this-song "<song name here>"

// Node Dependencies
var Spotify = require("node-spotify-api");

// Add the code required to import the `keys.js` file and store it in a variable, there is only a Spotify key stored in this file
var keys = require("./key.js");

// Create variable for access for Spotify
var spotify = new Spotify(keys.spotify_key);

function retrieveSpotifySongInfo(itemInterest) {
  // Search the Spotify API for a song
  // If no song, default song is: "The Sign" by Ace of Base
  // If statement to check if process.argv[3] is defined, then set songName to be equal to that custom song by User
  if (input_variable != undefined) {
    // console.log("input: " + input_variable);
    artistName = input_variable;

    //loop through the arg array until there aren't any more arguments
    for (var i = 4; process.argv[i] != undefined; i++) {
      //   console.log("inside for loop in spotify");

      //add each arg to the movieName var to use in the QueryURL
      itemInterest += "+" + process.argv[i];

      //   console.log(songName);
    }
  }

  var spotifySearchParameters = {
    type: "track",
    query: itemInterest,
    limit: "1"
  };

    console.log(spotifySearchParameters);

  spotify
    .search(spotifySearchParameters)
    .then(function(response) {
      // render the following information about the song:
      // Artist(s)
      console.log("Artist: " + response.tracks.items[0].album.artists[0].name);
      // The song's name
      console.log("Song Name: " + response.tracks.items[0].name);
      // A preview link of the song from Spotify
      console.log("Song Preview URL: " + response.tracks.items[0].preview_url);
      // The album that the song is from
      console.log("Off Album Name: " + response.tracks.items[0].album.name);
    })
    .catch(function(err) {
      console.log(err);
    });
}

// "movie-this" Command
// "node liri.js movie-this '<movie name here>"

function retrieveOMDBMovieInfo(itemInterest) {
  // If no movie, default movie is: "Mr. Nobody"
  // If statement to check if process.argv[3] is defined, then set movieName to be equal to that custom movie by User
  if (input_variable != undefined) {
    // console.log("input: " + input_variable);

    movieName = input_variable;

    //loop through the arg array until there aren't any more arguments
    for (var i = 4; process.argv[i] != undefined; i++) {
      //   console.log("inside for loop in spotify");

      //add each arg to the movieName var to use in the QueryURL
      itemInterest += "+" + process.argv[i];

      console.log(itemInterest);
    }
  }

  var omdbQueryURL =
    "http://www.omdbapi.com/?apikey=trilogy&t=" + itemInterest + "%5C";

  axios
    .get(omdbQueryURL)
    .then(function(response) {
      var result = response.data;
      // If axios was successful, log following info:
      // Title of the movie.
      console.log("Movie Title: " + result.Title);
      // Year the movie came out.
      console.log("Release Year: " + result.Year);
      // IMDB Rating of the movie.
      console.log("IMDB Rating: " + result.Ratings[0].Value);
      // Rotten Tomatoes Rating of the movie.
      console.log("Rotten Tomatoes Rating: " + result.Ratings[1].Value);
      // Country where the movie was produced.
      console.log("Country of Production: " + result.Country);
      // Language of the movie.
      console.log("Languages: " + result.Language);
      // Plot of the movie.
      console.log("Plot: " + result.Plot);
      // Actors in the movie.
      console.log("Actors: " + result.Actors);
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
}

// `do-what-it-says` Command
// "node liri.js do-what-it-says"
// Import the `fs` Node package into a variable
var fs = require("fs");

function retrieveCustomRandomInstruction() {
  // Read the file
  fs.readFile("random.txt", "utf8", function(error, data) {
    // If there is an error
    if (error) {
      return console.log(error);
    }
    // If read was successful
    console.log("Successfully read the file.");
    // console.log(data);

    // Read the contents of the data by parsing into its distinct parts, assign it to new variable
    var customLIRICommandArray = data.split(",");

    // Check the newly parsed array to see how it is structured, want to check that it was parsed into: a command and an item-of-interest
    console.log(customLIRICommandArray);

    // Create new variables for these two array items
    var custom_function = customLIRICommandArray[0].toString().trim();   
    var custom_item = customLIRICommandArray[1].toString().trim();       

    console.log(custom_function);
    console.log(custom_item);

    // Create a switch statement that focuses in on the action/command item of the array, run the respective command on the item-of-interest
    switch (custom_function) {
      // Bands in Town
      case "concert-this":
        retrievBITArtistEvents(custom_item);
        break;
      // Spotify
      case "spotify-this-song":
        retrieveSpotifySongInfo(custom_item);
        break;
      // OMDB
      case "movie-this":
        retrieveOMDBMovieInfo(custom_item);
        break;
    }
  });
}

// Create a switch:case function that will read what the user has put as action-function in at process.argv[2]
switch (action_function) {
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
