# Web Application Architectures WorkShop 7 : Databases, MongoDB, MongoDB requests from Node.js



## WS 7.1 Storing our figures specs on Server Side using MongoDB


**Assignement :**  

**7.1.1:** starting from 6.2.3 , modify your Server code so that instead of writing figures specs to console, your server code will make a request to MongoDB to store all figures specs in the database.  


**7.1.2** add a new endpoint to your API so that your browser can request the figures specs from the server.


## WS 7.2 One Server , Many Clients

Until now, we were in a very specific scenario where our Server had only one client to speak to. In the real world, a Server will be requested by many clients. He will need to keep track of the username for each stored figure specification. and also to propose a way to authenticate push and pull requests, so that one user cannot add a figure pretending he is someone else.


### How To Access your server from outside your local network ?

If you give your local  IP (192.X.X.X , or 10.X.X.X) to someone outside of your local network, and he tries to open http://192.X.X.X:3000 , it won't work. these adress cannot be accessed directly, they are made for local network. Only your router ("box") have a Public IP, meaning its visible from the outside world. 

What can I do ?

- Deploy your app to a 24/7 available Computer with a Public IP ( commonly called "a Server"). This is the best option for production, and will be the subject of our last workshop.

- Make your personal computer accessible from the outside world by configuring port forwarding on your router.  
This works only if you have admin access to your router, and won't work at school. Configuring port forwarding means that you will tell your router to accept incoming requests on a specific port on its public IP adress, and redirect it to a specific port on one computer of the local network. You can then give your router public IP adress (the one given by https://www.whatismyip.com/ ) to outside users so that they can access your app.

- Or, even simpler, you could use localtunnel ( Ngrok free alternative) : https://github.com/localtunnel/localtunnel



**Assignement :**  

** 7.2.1:** Make your server available to the outside world

Then ask some of your classmates to use your app using your url. You can use a telephone only if it's connected to a 3/4/5G network ( to validate that its working from the outside world).
Every user connecting to your url will be able to add figures. All users figures will be mixed, the server will not remember figures authors.
This could be the desired behaviour, but for now, let's evolve to something more conventionnal :


** 7.2.2:** Create a very basic and unsecure authentication system

On client side , add a field and a button so that user can input its username. he should not be able to send figure until the username has been submitted.  
Then, modify api requests so that you add a username key/value pair to every figure specification you will send to the server. Also add the username to the pull query ( the query the client makes to get the figure specs)

On server side, add the username to the data you will write in the database. when you will server the figures (in the pull endpoint), send only the figures corresponding to the username transmitted by the client.


Users should be able to connect to your server and see only THEIR figures.

