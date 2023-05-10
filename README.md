# HTML_ADD
HTML ADD: Simplify Your HTML Programming in JavaScript

Have you ever wanted to manage HTML code within JavaScript in a more streamlined way? With HTML ADD, you can finally enhance the readability of your code and improve your development experience.

The benefits of HTML ADD are clear:

Easy to Learn: You don't need to stress over complex learning processes. HTML ADD was designed to be intuitive and easily accessible for everyone, even beginners.

Quick to Manage: Drastically reduce the time and effort required to create and manipulate HTML elements in your JavaScript code. With just a few lines of code, you can swiftly generate the desired HTML markup.

Lightweight Installation: HTML ADD is a lightweight library that won't overburden your project. You can easily incorporate it into your existing workflow without worrying about performance.

HTML ADD was developed with one main objective: to simplify programming and capturing HTML elements in JavaScript. Unlike other complex frameworks, HTML ADD focuses solely on creating DOM elements, making your code more streamlined and focused.

Here's an example that showcases the power of HTML ADD in saving lines of code:

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

As demonstrated, with HTML ADD you can create the same HTML element more concisely. You can specify the desired tag (such as "div", "a", "img", "input", "h1-h6", "video", etc.) and attributes within the curly braces.

You can also insert content inside the element, which can be either strings or other DOM elements.

```sh
let new_div = _h.div( { class: 'content', id:'my-content' },
  _h.div( { class:'data-in' },
  _h.input( { type:number, placeholder:'Data entry'  } ) 
));
```

How can we create and insert a simple example button:

```sh
let my_btn = _h.botton( { class:'primary-btn' }, “ HELLO ” );

let new_div = _h.div( { class: 'content', id:'my-content' }, my_btn );
```
To create the click event, we can use the native JavaScript system.

```sh
my_btn.onclick = function(){
  console.log('you clicked me');
}
```

An alternative that sometimes simplifies things and can be helpful is this:

```sh
let my_btn = _h.button( { class:'primary-btn' }, “ HELLO ”, function(){
  console.log('you clicked me');
} );
```

In this example, we have seen that when a function is inserted inside the container, it will be interpreted as an onclick event. Now, let me show you how to work with other events such as onmouseenter, onmouseleave, etc.., you just put the event name inside the function.

```sh
let new_btn = _h.button( { 
        class:'primary-btn', 
        onmouseover : function(){ 
            console.log('onmouseover');
            } },
        "HELLO", function(){
            console.log('clicked');
        } );

```

HTML ADD provides an elegant alternative for working with custom events, by allowing you to specify the event name and the associated function directly inside the curly braces.

HTML ADD was designed to make your job easier when creating...


