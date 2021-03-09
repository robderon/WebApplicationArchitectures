# Web Application Architectures WorkShop 8 : Real-time, bidirectional and event-based communication through websockets.



**A few tips before we start :**

- seeing full URLS in chrome
https://www.xda-developers.com/google-chrome-hiding-full-url-experiment/

- searching chrome tabs ( enable Tab Search)
chrome://flags/


**Introduction:**

Until now, every communications we made between client and server was  
- one way / roundtrip  : Client Made Request, Server sent response. 
- Temporary : communication is closed after Server response is sent

This is good for most of our web usage. But for anything "Live", it's too limited : live messaging, real time stock market, sports results, gaming...

You could go over this limitation by asking your client to do one request every 5sec, but this is not real live communication, and it's very  unefficient in terms of resources : there is a lot of "overhead" cost in terms of cpu and network usage. 

We need something persistent ( that stays open), and full duplex  : Server and client can send and receive data, until the communication is intentionnaly closed. This is the role of the WebSocket API, which is now implemented in most browsers.

Socket.io is a Library built on WebSocket, consisting of a Node.js package for the server , and a javascript client library for the browser.

SHOULD WATCH UNTIL 3'33, For a more visual description :
https://www.youtube.com/watch?v=LenNpb5zqGE



## WS 8.1 Live Whiteboard : Sending and receiving others users Figurespecs using Socket.io

**Assignement :** 

**Must read before 8.1.1 :**
https://socket.io/docs/v3/index.html

**Must do before 8.1.1 :**
socket.io live chat tutorial, based on Node and Express  
https://socket.io/get-started/chat

**8.1.1: Live Whiteboard**
Fork code from 7.2.2 ( copy your code in a new folder), Modify client and server to create a live whiteboard for geometric figures using Socket.io: 
- Everyfigure you draw is sent to the server. 
- The server send all received figures to all connected clients. 
- Clients must draw all received figures together with figures drawn by the user.
- On client side, do not memorize all figures in a variable. Just draw a figure on the canvas when the local user draw one, or when you receive one, and forget about it.
- Display the username of the last painted figure below the canvas

You can remove all mongodb code, this assignement is live only, and will forget all figures when the server shutdown.

Put your server online using localtunnel (or by enabling port forwarding on your router), and test your server with a second client.

Tell the class when you are ready so that we can test your app together.


**8.1.2: Live Mouse Drawing**

Add a basic pencil tool to your drawing app using this example : https://codepen.io/robderon/pen/KKNGQRj

Add a section to the menu so that the user can choose color and size of the pencil.

The drawing must be sent live to the server, not when the user release the click. The canvas must display simultaneously all users drawings live.

**8.1.3: DDOS the whiteboard**
Send way too many figures to the board. See what happens. ( Save your work before, just in case..)
Bottlenecks can appear at different levels : 
local CPU
local RAM
wifi router
your internet connection
routers on the way to the server
Server internet connection

If you're using NGROG, it is another point of possible failure. NGROK implement rate limiting, and will block your requests..


**8.1.4: Secure your board**
Prevent users from overloading the board using rate-limiting.
For every user, memorize the time of last figure sent. When a new figure is sent, count the time since the user sent his last figure. if it's too short, refuse the figure.
