Summary
At its essence, this is an application which replicate some extremely basic inquiry commands that the user may ask a personal assistant. The operations that this application can execute are to: retrieve concert data for an artist, information for a specific song, informationf or a specific movie, and take in pre-existing text commands from a linked text file all from the terminal command line. 


Importance
- One of the more revolutionary pieces of technology that has been released in the past few years are personal assistants speakers (the two popular ones are Google's Google Home device variations and Amazon's Alexa device variations). 
- This application mimics some of the functionality found in these devices software
- Rather than providing a better service than what these existing devices already offer, the main purpose of this application is to teach users what these technologies do on the most basic levels


Key Technologies
- node.js
- axios
- dotenv
- moment
- node-spotify-api


Get Started
- As this is a node application, please first navigate to the following link: [Link]
- Perform a 'git clone' on the repository to your personal device at a location of your choosing
- If on macOS, open up a new Terminal instance
- If on Windows PC, open up a new Command Prompt instance
- NOTE: If you are planning to use the Spotify functionality of this application, please make sure you have proper access creditials to the Spotify API saved as an .env file in the same root directory as the LIRI.js file
- Navigate to the root directory of the LIRI application
- The following is a list of commands you can prompt the LIRI assistant to execute

    1. Search the Bands In Town API for concert and event information for any artist
        - In the Terminal window enter this command: "node LIRI.js concert-this <name-of-artist>" 
        - This command will work if your artist of interest has a name with more than one word
        - Here is a screenshot example of what Terminal command input and output should look like: https://imgur.com/8i4G8Nv

    2. Search the Spotify API for song information for any song of interest
        - In the Terminal window enter this command: "node LIRI.js spotify-this-song <name-of-artist>" 
        - This command will work if your song of interest has a name with more than one word
        - Here is a screenshot example of what Terminal command input and output should look like: https://imgur.com/e5tXSxy

    3. Search the OMDB API for information for any movie of interest
        - In the Terminal window enter this command: "node LIRI.js <name-of-file>" 
        - This command will work if your movie of interest has a name with more than one word
        - Here is a screenshot example of what Terminal command input and output should look like: https://imgur.com/GKlhoQ3

    4. Access the custom text document and runs the commands that are pre-defined  
        - In the Terminal window enter this command: "node LIRI.js movie-this <name-of-artist>" 
        - Be sure that your custom text document has the correct syntax
        - Here is a screenshot example of what Termainal command input and output should look like: https://imgur.com/lPAI3rj


Contributors
- Khoa Nguyen (Github: khnguyen94) : Sole contributor who worked on all 4 major functionalities of this application

