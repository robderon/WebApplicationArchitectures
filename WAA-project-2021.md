# Web Application Architectures Project 2021


Choose the Assignement you prefer. You don't need to make them all, they can be done separately. Your maximum score for each Assignement is given. The more you do, the more points you can get.

This document is still a Draft, I will add new assignements, and I may modify some parts.


**NO VERY EASY TO FIND BUGS**
This goes without saying, features must work well, with no easy to find bug. I must be able to change user without problems and without the need to reload the page, if it's a multiuser app  (I will test it using multiple usernames.)
I will use Chrome 89 to review your work.
==> TEST YOUR APP BEFORE RELEASING IT


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


## Assignement 1 : Static html + js. 5 points** 
Starting from the live multiuser whiteboard drawing app, add the following feature

- Add a button in the menubar to open image in a new tab. the opened image will be static, and can be saved by the user using right click | save image as. 

If you have trouble to display the image in a new tab, you can display it in a new image tag below the live canvas.


use canvas.toDataURL() method

MINIMUM 1 file in your assignment directory : 
index.html
You can also add index.js and index.css

## Assignement 2 : Node.js. 10 points** 
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

