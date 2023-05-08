# HTML_ADD
HTML ADD: Simplify your HTML programming in JavaScript

Have you ever wanted to manage HTML code within JavaScript in an easier way? With HTML ADD, you can finally make the formatting of your code more readable and improve your development experience.

The advantages of HTML ADD are obvious:

Simple to learn: You don't have to worry about complex learning processes. HTML ADD was designed to be intuitive and easily accessible to everyone, even beginners.

Fast to manage: Drastically reduce the time and effort required to create and manipulate HTML elements in your JavaScript code. With just a few lines of code, you can quickly generate the desired HTML markup.

Lightweight to install: HTML ADD is a lightweight library that won't burden your project. You can easily integrate it into your existing workflow without worrying about performance.

HTML ADD was created with one main goal: to make it easier to program and capture HTML elements in JavaScript. Unlike other complex frameworks, HTML ADD focuses solely on creating DOM elements, making your code leaner and more focused.

Here's an example that illustrates the power of HTML ADD in saving lines of code:

Traditional way
```sh
let new_div = document.createElement('div');
new_div.setAttribute('class', 'content');
new_div.setAttribute('id', 'my-content');
new_div.innerText = "proof of creation";
```
With HTML ADD
```sh
let new_div = _h.div({ class: 'content', id: 'my-content' }, "proof of creation");
```

As you can see, with HTML ADD you can create the same HTML element more concisely. You can specify the desired tag (such as "div", "a", "img", "input", "h1-h6", "video", etc.) and attributes inside the curly braces.

You can also place content inside the element, which can be both strings and other DOM elements.

```sh
let new_div = _h.div( { class: 'content', id:'my-content' },
  _h.div( { class:’data-in’ },
  _h.input( { type:number, placeholder:’Data entry’  } ) 
));
```

How can we create and insert a simple example button:

```sh
let my_btn = _h.botton( { class:’primary-btn’ }, “ HELLO ” );

let new_div = _h.div( { class: 'content', id:'my-content' }, my_btn );
```
To create the click we can use the native javascript system.

```sh
my_btn.onclick = function(){
  console.log('you clicked me');
}
```

An alternative that sometimes make it simple and can help you is this:

```sh
let my_btn = _h.button( { class:'primary-btn' }, “ HELLO ”, function(){
  console.log('you clicked me');
} );
```

On this example we have seen when a function is inserted inside the container it will be interpreted as (onclick), now I show you if we need to work with other events such as onmouseenter, onmouseleave, etc.., just put the event name inside the parenthesis : function.

```sh
let new_btn = _h.button( { 
        class:'primary-btn', 
        onmouseover : function(){ 
            console.log(‘onmouseover’);
            } },
        "HELLO", function(){
            console.log('clicked');
        } );

```

HTML ADD gives you an elegant alternative for working with custom events, by allowing you to specify the event name and associated function directly inside the curly braces.

HTML ADD was designed to make your job easier in creating

