# MongoDB examples

**NOTE: Populating the dictionary database**
- For the dictionary examples, you should first **populate your dictionary** on your computer using the `formatted-dictionary.json` file in `load-dict-script`.
- To do this:
  - In your terminal, navigate to the `load-dict-script/` directory
  - Run `$ mongoimport --db eng-dict2 --collection words --file formatted-dictionary.json`
  - It should print out "connected to: localhost" and "imported 28035 documents"


## dictionary app using MongoDB
- To run:
  - In your terminal, run `$ mongod`. Keep that process running and don't close the terminal.
  - Create a second terminal window. In this terminal window, navigate to the `dictionary-with-mongodb/` directory
  - Run `$ npm install`
  - Run `$ npm start`
  - View the running app at http://localhost:3000
  

MIT License

Copyright (c) 2017 Victoria Kirst (vrk@stanford.edu)