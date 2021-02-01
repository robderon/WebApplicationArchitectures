# Web Application Architectures WorkShop 4 : CSS Animations, Graphics drawing


## WS3 exercises correction

send codepen
(commented correction ? )

## CAN I Invent HTML Tags and give them some style in my CSS ?

Answer : yes & no  
it will work sometimes, but it's totally advised against doing so, because it will make your code a mess, for you, and for other developer that will work on your code, and mostly because it may not work in the future, and it may not work on every browsers.

you should stick to official tags list : https://developer.mozilla.org/en-US/docs/Web/HTML/Element

Why does it work ? because at first, web browsers was very tolerant, rules were unclear.  Websites bloomed in this anarchy. Telling the browser to become strict about it afterwards would have broke many websites.

## CSS Selectors recap

Now that you've spent some time writing CSS, let's sum up the Rules.
You've learned that to give style to some elements of your page, before opening curly brackets to set the style properties, you must write a specific selector in your css.

Here are your options : 

|Selector Type | Syntax | Elements affected|
|---|---|---|
|Element Selector|p| All `<p>` elements|
|Id Selector|#abc| Elements with **id="abc"**|
|Class Selector|.abc| Elements with **class="abc"**|
|Element Class Selector|p.abc| `<p>` elements with **class="abc"**|
|Descendent selector|div strong| `<strong>` elements that are descendants of a `<div>`|
|Comma selector|h2,div| `<h2>` elements and `<div>` elements|

    p {
        color: green;
    }

    #abc {
        color: blue;
    }

    .abc {
        color: red;
    }

    p.abc {
        color: purple;
    }

    div strong {
        color: yellow;
    }

    h2,div{
        color: brown;
    }


And don't forget:

- if there is style conflicts in your css, the most specific rule prevails
- Styles are inherited from parent to child. if you give style to BODY, all the page will have the style. ( except layout-related properties. )
- Your browser have a default style sheet. The one you see if you click inspect on a page with no associated style.
- HTML should contain content NOT style, CSS should contain style NOT content


## Most of you already know this, but just to be sure:

- In case you have not read last time, read this at list once (5mn read) : https://www.w3schools.com/cssref/css_units.asp
- Just in case you are not clear about margin, border, padding , read this short version : https://www.w3schools.com/css/css_boxmodel.asp
- If you forgot `<meta name="viewport" content="width=device-width, initial-scale=1">` in the HEAD section of your html, your mobile browser will render at desktop screen width ( 1000px) and then zoom out. You will have a tiny undreadable website on you mobile.
- Using media queries in your css, you will then be able to give specific styles depending on the screen width.



## WS 4.1 CSS animations

CSS animations allows to create animated transitions between values of your css properties such as color, background-color, height, or width. 
example : https://gameoftheyear.withgoogle.com/

**Must Read**  
https://css-tricks.com/almanac/properties/a/animation/



**Assignement :**

Create a webpage with (from top to bottom):  
- A title
- A control bar (just a space with buttons)
- A drawing box (just an empty space)

The drawing box must contains a centered 250x250 px div with 1px black solid border  
The control bar must contains:  
- A HTML color picker ( `<input type="color">` ) to choose div bordercolor with instant effect
- A HTML color picker ( `<input type="color">` ) to choose div bgcolor with instant effect

- A HTML color picker ( `<input type="color">` ) to choose div bordercolor at the end of animation
- A HTML color picker ( `<input type="color">` ) to choose div bgcolor at the end of animation

- A button to start the animation

Instructions :  
- Every button and color picker must have its label
- Animation duration is 5sec
- Animation must reverse after its ending to come back to original state
- All colors are white by default
- Webpage must work well on mobile.
- the start button always restart from start.
- put your code on codepen and send me a private zoom message when done

v1.1  

- Add a button in the control bar to start and stop a zoom in and out animation.  

Instructions :  
The zoom animation can be started and stopped without interfering with the color animation

v1.2  

- Add a button in the control bar to start and stop a movement animation.  

Instructions :  
Be creative on movement design..  
The movement animation can be started and stopped without interfering with the precedent animations.

v1.3  

- Once all steps done, suggest ideas of improvement and new features  
