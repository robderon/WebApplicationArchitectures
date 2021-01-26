# Web Application Architectures WorkShop 3 : HTML / CSS / Vanilla JS


## QUIZZ 

The questions will be relative to the things we've learnt during Workshop 1. The two links below are a good recap, and also add some basic knowledge. please read them well.

https://www.preethikasireddy.com/post/how-the-web-works-a-primer-for-newcomers-to-web-development-or-anyone-really

https://www.preethikasireddy.com/post/how-the-web-works-part-ii-client-server-model-the-structure-of-a-web-application




## CORRECTIONS QUIZZ

## WS 3.1 Simple HTML / CSS : BLOCK vs INLINE, ELEMENTS POSITIONING , FONTS

### The Box Model, BLOCK Elements, INLINE Elements :

The first thing to learn to code nice Web apps, is how to position elements on the screen, and how content is positionned inside elements.

**Must read:**  https://www.internetingishard.com/html-and-css/css-box-model/ in case you did not.  
**Must read:**  https://www.w3schools.com/html/html_blocks.asp
**Must read:**  https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements

you must understand difference between BLOCK and INLINE Html elements 
PLEASE Remember : 

BLOCK elements `<P>,<H1>,<OL>,<TABLE><DIV>`... :
- takes full width of the page (flows top to bottom)
- Have Height and Width, that can be modified
- Can have block or inline elements as children

INLINE elements `<A>,<EM>,<BR>,<SPAN>`... :
- Take as much width as needed by their content (flows left to right, like text in a book)  
- Cannot have height and width. If you try to set it it will be ignored.  
- Cannot have a block element child. if you put a block element inside an inline element, browser will treat them as if they where outside.  
- Cannot be positioned

INLINE-Block elements `<IMG>` :
- inline content with height and width `<IMG>`

You can change the behaviour of elements using the display: CSS property  

don't put BLOCK elements inside INLINE elements !  
dont' try to apply block properties to inline elements !

### Fonts :

you must understand how fonts are displayed in a browser. Sometimes, a font you choosed will not be available on a visitor's computer. His browser will then have to pick another font. Visually speaking, the results could break all your design work !

**Must read:** https://www.w3schools.com/cssref/css_websafe_fonts.asp



### Exercise :


- Code the webpage captured on this jpg image using HTML and CSS
- No JS
- HTML and CSS must be separated in two files
- the black borders around the image are the window borders. don't try to code them.
- Upload on github and send me a PRIVATE link

https://github.com/robderon/WebApplicationArchitectures/blob/master/codeme.jpg


### Correction


## WS 3.2 Vanilla JS / DOM Manipulation  / InnerHTML



**Must Read:** https://www.springboard.com/blog/history-of-javascript/  

**MUST READ** https://jgthms.com/javascript-in-14-minutes/  

To implement the most basic webpage maniulation in javascript, for instance to modify an html element contents or style, or to detect an event on the webpage and execute some code, you must first understand the DOM and DOM events

**MUST READ** 
https://www.w3schools.com/js/js_htmldom.asp  
https://www.w3schools.com/js/js_htmldom_methods.asp  
https://www.w3schools.com/js/js_htmldom_document.asp  
https://www.w3schools.com/js/js_htmldom_elements.asp  
https://www.w3schools.com/js/js_htmldom_html.asp  
https://www.w3schools.com/js/js_htmldom_css.asp  
https://www.w3schools.com/js/js_htmldom_events.asp  
https://www.w3schools.com/js/js_htmldom_eventlistener.asp  
https://www.w3schools.com/js/js_htmldom_nodes.asp  


### then

Download article.html file on github. Add some javasccript code in it to implement the following features : 

- Find all article words ( not in the whole html only the article !) of more than 7 characters, and highlight them in fluorescent green  
you can use regexps without a loop, or Split() and String length Property with a loop

- Split blocks of 5 sentences into a paragraph.  
you can use regexps, JavaScript Split function
- Link all occurences of the word "google" to http://www.google.com
- Display article total word count in big bold letter before the text.
- Upload on github and send me a PRIVATE link

Pages that can help you :   
https://www.w3schools.com/jsref/jsref_length_string.asp  
https://www.w3schools.com/jsref/jsref_replace.asp  
https://www.w3schools.com/jsref/jsref_split.asp  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions  





## WS 3.3 JS Vanilla JS / DOM Manipulation  / InnerHTML / Events


Create a responsive webpage with buttons : 
- one that will change the bg color of the page
- one that will remove the first button
- one that will Uppercase all the buttons text
- one that will Lowercase all the buttons text
- one that will write a huge HELLO WORLD! in the center of the page.
- one that will play a sound
- one that when hovered will make disappear all other buttons ( of course hover won't work on mobile)  

Webpage should display nicely on desktop and mobile.



## For Our Next WorkShop
You must finish this workshop exercises
** MUST READ**
JS canvas, JS Canvas animations
exercise : code a small game.

## General Web culture
https://www.reddit.com/r/webdev/

https://www.reddit.com/r/webdev/comments/l566mm/the_urge_to_learn_javascript_with_css_basics/ !

https://www.theatlantic.com/magazine/archive/2008/07/is-google-making-us-stupid/306868/