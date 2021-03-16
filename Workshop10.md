# WS10: Deploying your app


## Deployment ?
- Make your app available to its public
- = putting your code on machines that are (or should be) always on and available. 


PaaS ? Iaas ? Container Hosting ? Dedicated Hosting ?

(Lot of Markting BS if you want my opinion )


Dedicated Hosting is where I come from. As opposed to Cloud hosting (iaas , paas), where you are using services from multiple machines without knowing where they are and how they are connected, with Dedicated Hosting you have YOUR machine, and you know all the details. you can't be closer to hardware, except by running the server in your room. You are in absolute control, you know what's going on. Of course, this also mean you can destroy your environment in 2 sec, and it can take a long time to repair.
Also, you should understand that when logged in on a dedicated server shell using ssh, you will be able to deploy your apps exactly as you would do on your own personal computer.
You won't need more knowledge than what you already know to make your app run




IaaS offers you access to highly configurable virtual hardware. You will not have your machine. You will create virtual servers, that you can upgrade in time. 

PaaS offers you a higher level of abstraction. here we don't speak about machine. you won't feel the machine, just services that will run your code. You don't need to know about the machine

When using PaaS or IaaS, you will have to learn for each of them how they work, and how to deploy. They all have their own way to call things, their own processes, their own tools. There is NO STANDARD way to go.

Container Hosting allows you to deploy a docker container image to a online host. You will need to build and push your image to the host registry.



Type | Services
---  | ---
Paas | Heroku, Google App Engine, AWS Elastic...
Iaas | DigitalOcean, AWS, Azure, CGE...
Container | Jelastic, Google Cloud Run, Amazon ECS, Azure, Heroku...
Dedicated | OVH, Scaleway...


( Please note that big could brands are in multiple categories)



## DEPLOYING A DOCKER CONTAINER ON A DEDICATED SERVER
```
ssh username@yourserver
docker run -P robderon/nodeexpresshello
docker ps | grep node pour retrouver le port
```

open in web browser 




## DEPLOYING A DOCKER CONTAINER ON HEROKU

First, you must understand that heroku don't let you chose the port your web server will listen to. The port to bind to is assigned by Heroku as the PORT environment variable. This must be implemented directly in your node server code, by using process.env.PORT

https://devcenter.heroku.com/articles/runtime-principles



Also, Heroku will not use the docker registry, but their registry. You will create your Docker file, and use the heroku CLI (heroky shell) to build and push your container to the Heroku Container Registry.

STEP BY STEP GUIDE

1. Create a directory for your app
```
md HelloHeroku
```

2. initialize your node app.
I suggest you change entrypoint to server.js or app.js
```
npm install -g npm
npm init
npm install express
```

1. Create a node server app using process.env.PORT in server.js
```javascript
'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT;

// App
const app = express();
app.get('/', (req, res) => {
   var regip = req.ip;
   if (regip.substr(0, 7) == "::ffff:") {
      regip=regip.substr(7)
   }
   console.log(regip);
   res.send('Hello World');

});

app.listen(PORT, console.log(`Running on port ${PORT}`)  );
```



3. Create your Dockerfile
```dockerfile
FROM node:10-alpine
WORKDIR /app
COPY package.json .
COPY server.js .
RUN npm install

# Run the server as a non-root user
RUN adduser -D myuser
USER myuser

CMD ["node", "server.js"]
```


1. Sign up and login on Heroku.com

2. Donwload and Install the heroku shell ( CLI)

https://devcenter.heroku.com/articles/heroku-cli

(relaunch powershell)

3. log  in to heroku from command line
```
heroku login
```

4. log in to heroku container registry
```
heroku container:login
```

5. Create a Heroku app to obtain a public URL
```
heroku create
```

6. Copy your app name. Mine was frozen-dusk-39761


7. build and push your container to the heroky registry  
you must specify the "process type". for us it's "web" ( heroku internal terminology)

```
heroku container:push -a PASTE_YOUR_APP_NAME web 
```

8. Release your container
```
heroku container:release -a PASTE_YOUR_APP_NAME web
```

9. Open your app in your browser
```
heroku open -a PASTE_YOUR_APP_NAME
```






![](https://www.hubcityspokes.com/sites/default/files/field/image/Fireworks.jpg)




more info here :
https://devcenter.heroku.com/articles/container-registry-and-runtime

## What's next ?


API you should try :

- google doc api
- spotify
- youtube
- tmdb


Things you should know how to do

- File uploads
- Create secure login  ( and github/fb/google connect )
- CRUD
- Handle touchscreen in javascript

## BUT MOST OF ALL, I BEG YOU : HAVE FUN !

You will probably need to spend some time coding boring stuff. While doing this, try to take pleasure by learning, write better code, and working with others. You can do this even if the final product is not your cup of tea.

The meaning is not always in the final product, but in the path to go there. learn, understand, working with others.

of course, if you find yourself in a situation where you don't like the final product, don't learn anything, and work alone : RUN !

in any case, you should ALWAYS have your side projects, your personal web projects. This what I meant when I said "have fun" This is how Dailymotion came to life. I had my side projects, since the beginning of my web career. 

Thank you for your participation to this module. I hope you've learnt things that will help you **build projects you love**, and **have fun** while coding !




