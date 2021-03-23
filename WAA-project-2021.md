# Web Application Architectures Project 2021


Below is a list of 4 Web projects of different nature and size. 
Assignements must be done separately, except Assignements 1 & 2 that you can submit using a single URL. The maximum score for each Assignement is given. The more you do, the more points you can get. Choose the Assignements you prefer WITHIN A LIMIT OF 25 POINTS. If you have more than 20 points after grading, your final note will be 20.


This project is individual and can't be done in pairs or groups.

This document is still a Draft, I will add new assignements, and I may modify some parts.


**DUE DATE**

April 5th 11 AM

I will send you a link to a online form to submit your work



**Available on a public web url**
Apps must be available on a public web url. 

Use Heroku, Azure, GCP, AWS, or any other service. You can also host it yourself, but the server must be up when I will review your work.



**Publish all code on github**
Create one repository that will contain all your assignements
Inside this repository Create one directory by assignement.
The directory name must start with the Assignement number.
YOU WILL RECEIVE NO SCORE IF YOU DON'T RESPECT THE IMPOSED DIRECTORY NAME AND FILE STRUCTURE.

**Write your own code**
A code plagiarism checker will be used. Students with too similar code will receive less points.
I invite you to work together, to ask for help and help your classmates.
I also invite you to never transmit full snippets of your project code.



**UI Tips**
- Be nice with your users : if you have a text field, accept submission with the enter key. this will minimize keyboard-mouse round-trips.
( https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp )



## Assignements Grading

I will start with full points for every assignement. then : 

1.  Code plagiarism detector will check originality of your code.
Of course, i will not search in the image drawing app base code.
If detector detect similarities, I will do a manual check, and remove points to all assignements with similar code.

2. I will click on your deployed URL and test the product as an end user. 
This goes without saying, features must work well, with **NO EASY TO FIND BUGS**. I must be able to change user without problems and without the need to reload the page, if it's a multiuser app  (I will test it using multiple usernames.) I will use Chrome 89 to review your work.
I will remove points for every major bug I find.
You will have no points if the app is not working.
=> BE NICE WITH USERS : TEST YOUR APP, DEBUG YOUR CODE


3. Every function must be understandable without clicking : put good labels on your buttons and links. I will remove points if functions are note clearly presented

4. I can't ask you to make it beautiful, but I can ask you to make it Readable. Don't overcharge display with disturbing images or colors. Use web fonts or google fonts.

5. Then I will briefly watch your code. I will remove points if code is hard to read because of poor indentation. I will remove points if I see not meaningful variable and functions names. Meaningful variable names helps you debug your code, and helps others to read it. 


## Assignement 1 : Static html + client-side js. 5 points** 
Starting from the live multiuser whiteboard drawing app, add the following feature

- Add a button in the menubar to open image in a new tab. the opened image will be static, and can be saved by the user using right click | save image as. 

If you have trouble to display the image in a new tab, you can display it in a new image tag below the live canvas.


use canvas.toDataURL() method

MINIMUM 1 file in your assignment directory : 
index.html
You can also add index.js and index.css

You can start from this code base from one of your classmate :
https://github.com/Tnemlec/Whiteboard

## Assignement 2 : Node.js + static html + client-side js. 10 points** 
Starting from the live multiuser whiteboard drawing app, add the save image on server feature :


- Create a new endpoint on your node server able to receive http post file uploads.
File upload will be stored in a dedicated folder. Watch out for directory permissions
Whenever a file is uploaded, insert a document in a mongodb database with username, datetime, path to image.


use canvas.toDataURL() method

- On client side, Add a button in the menubar to save the image on the server.
- use Fetch to send the image stored in the DataURL to the new endpoint.
- Display a sucess message on client when upload is done.


- Create a new endpoint on your node server to send the list of uploaded images with username, datetime, URL to image
- Add a "saved images" button in the menubar that will open a new page listing all saved images with links to open them.


you can use the "Formidable" Node Module to handle file uploads :
https://www.w3schools.com/nodejs/nodejs_uploadfiles.asp
https://www.npmjs.com/package/formidable


The assignement directory will contain your node.js file structure including
server.js ( your main node code)
package.json
a public directory including your static files

NEVER UPLOAD node_modules directory to github, modules will be downloaded by npm start from package.json

You can start from this code base from one of your classmate :
https://github.com/Tnemlec/Whiteboard



## Assignement 3 : static html+js. 10 points** 
Create a movie quizz static web application using the tmdb api

- Choose a movie to start with on tmdb. the app will always start from this movie, user cannot change it.


1. On top of the page display a div containing movie info : title , image and release date of the movie
2. Below the movie info div, display a div containing a form
3. In this form Ask the user to give the director or one of the actors of the movie in an input text field with a submit button.
4. the user must enter full name, the search will be case insensitive
5. If the answer is wrong display a message in red near the submit button 
6. If the answer is good, add a new div below the form div with the actor or director info : name, photo
7. Below this div display a div containing a form
8. In this form, Ask the user to give the name of a movie where this person was actor or director.
4. the user must enter full name, the search will be case insensitive
5. If the answer is wrong display a message in red near the submit button 
6. If the answer is good, add a new div below the form div with the movie info : title, image and release date of the movie
7. GO TO 2.

Users must never enter the same movie name twice. if they do , don't accept the answer and display an adapted error message.



MINIMUM 1 file in your assignment directory : 
index.html
You can also add index.js and index.css

## Assignement 4 : Node.js + static html + client-side js. 10 points** 

Create a Gaming Screenshots Quizz app.

1. Make a selection of game screenshots. This must be gameplay screenshots, not intermediary scenes or other non game screens. Minimum 20 screens.

2. Create a Mongodb collections for the questions. Each document will contain at least id, image name and game name. 

3. Create an admin web tool, allowing the administrator to create the questions. It will only display the list of existing questions, with a button to delete the question, a button for modification. And a button "create question" must appear on top of the list.

The edit/create form show two fields : one for image url, one for game name. and a submit button. once submitted, the Node.js server must download the image and store it in one directory, and then create the question in the database.

3. Create a playing interface. User must first enter his name, the pictures are shown one by one, with a text field under it. Be nice with your user, use a fuzzy matching library to tolerate some misspellings.
https://www.npmjs.com/package/fuzzy-matching , see example "quizzes or user inputs with certain expected answers" on bottom of the page.
You must show 10 questions to the user in random order.
Display its score at the end.
Keep track of all game sessions, and display a "top 10 high scores" at the end of the game, with username, and score.

You will of course need to create appropriate collection in mongodb to keep track of gaming sessions : username, score, date


The assignement directory will contain your node.js file structure including
server.js ( your main node code)
package.json
a public directory including your static files
