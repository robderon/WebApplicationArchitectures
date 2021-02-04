# Web Application Architectures WorkShop 6 : Server-side, REST API


## Web, a Big Picture : Interface vs Data

In the precedent worskhop, you've created an **interface** to generate figures. Then you've stored all figures specifications into a Json object in localStorage : your **data**.

Internet is all about interfaces and data.

To be shareable, to be available 24/7 to users, data must be stored on a server. Think about the 30 trillions webpage in google's database.

To access this data, and act upon it, users need an interface. Think about google homepage : one text input, one search button, and results page : a list, and buttons to paginate results.

Before the mobile era, data and interfaces were usually mixed together on server side, and sent as HTML to the client. this is what we call **SERVER SIDE RENDERING (SSR)** ( some big websites, like Google Search, still use SSR for performance reasons)

Nowadays, since the data need to be accessible from different types of platforms, data and interfaces tend to be separated until they reach the browser :

- One server will send html ,css, js and images to allow the browser to display an interface. Exactly like we did on WS2 using nginx.

- Then the interface in the browser will call another server, the REST API Server, to receive the data in JSON format and render it inside the interface **( CLIENT SIDE RENDERING, CSR)**, or to send the data inputted by the user. This Api Server commonly stores the data by communicating with a database server.

This is why full stack web developer has many jobs:  
- Creating the interface
- Creating the data model
- Make the interface available 24/7
- Make the data available 24/7

On small websites, API server, static files server and database server can be on the same machine. This what we will implement during the next two sessions.

This big picture does not change a bit when using React. Your React file will be served as is by a web server, and executed by your browser. React code within your browser will in turn, call your API server to receive data and render the page upon it, and to send data when needed. ( not true when you do React SSR, but this is another story)

This will be the central subject of our 6th Workshop : 
Develop an interface that will make calls to a REST API.
Setup a server that will deliver the interface, and a server that will serve the REST API to speak with the interface.

In order to reach this objective, you need to know more about a few essential modern Javascript principles

<sub> ( to know more on google search and SSR : https://news.ycombinator.com/item?id=22794143 )</sub>


---

## Modern Javascript Essential Concepts


### 1. Asynchronous execution, JS Event loop, Callbacks

Javascript is single-threaded
it can't in himself run many tasks simultaneously. 

" But I can see many js instructions happen simultaneously in my browser !"

Yes, it's because the browser can, it's written in c++

To handle this, Javascript offers non blocking, aynchronous functions. When you use them, Javascript will not wait until they are finished to execute the next line. Javascript will send them to the browser engine so that he can execute it, while Javascript goes to the next line.

To have a solid understanding of this concept, please watch this (very) important 26' video :   

**Must Watch:**  
https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=1s

Please note that since Node is running on the same javascript engine than your browser, this concept is valid on both sides : Server, and Client !


### 2. Using fetch to load external files, Promises

Wether  Vanilla JS or React, interfaces usually make use of Fetch() to load external files from your browser.
Fetch is asynchronous, and uses Promises. **You must understand the principle of Promises to become a proficient Javascript Web Developer.**

**Must Read:** 
https://github.com/robderon/WebApplicationArchitectures/blob/master/JS%20Load%20files%20with%20FETCH%20-%20Promises.pdf


