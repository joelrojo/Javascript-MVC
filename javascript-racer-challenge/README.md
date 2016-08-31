# Javascript Racer 1 Front End

## Learning Competencies

* Understanding events and callbacks in JavaScript
* Traverse and alter the DOM using JavaScript
* Write custom event handlers in JavaScript
* Build a pure JavaScript application

## Summary

Let's create a JavaScript-only version of [Ruby Racer][].  To keep it simple,
it will be a single html page with no back-end at all.

Unlike Ruby Racer, the outcome of the game won't be pure chance.  Each player
will advance their "car" by smashing some key.  For example, player 1 might be
the "q" key and player 2 might be the "p" key.

The goal here is to learn more about JavaScript, the DOM, and asynchronous
event handling.

When you submit your solution as a pull request, you should have at least three
files: an HTML file, a CSS file, and a JavaScript file. You can have more files,
but all CSS and JavaScript should be linked externally from the HTML file.

## Releases

### Release 0: The Setup

There is no skeleton for this challenge.  You will have to write the HTML, CSS and
JavaScript files yourself (and link them all together).  Let's just start with
building a simple two-player board.  This will be rendered via HTML.  There are
a few ways you could do it, e.g., a table that looks like:

```html
<table class="racer_table">
  <tr id="player1_strip">
    <td></td>
    <td class="active"></td>
    <td></td>
    <td></td>
    ... etc ...
  </tr>
  <tr id="player2_strip">
    <td></td>
    <td></td>
    <td></td>
    <td class="active"></td>
    ... etc ...
  </tr>
</table>
```

Then, using CSS, you can provide styles like:

```css
.racer_table td {
  background-color: white;
  height: 20px;
  width: 20px;
}

.racer_table td.active {
  background-color: black;
}
```

Updating a player's position could be achieved by adding the `active` class to
the appropriate `td`.  There are many other ways to achieve a sensible board
output; this is just one suggestion.

Make sure you're able to "manually" produce all the board layouts you might
care about before you jump into the JavaScript.  Whatever way you choose, it
should be easy for JavaScript to manipulate, so keep that in mind.

Use something like [normalize.css][] to enable sane default styles.

### Release 1: Add JavaScript

How is your JavaScript going to talk to your to HTML? There are many different
techniques and libraries to help you do it. For this challenge, we suggest using
[.querySelector()][], [.querySelectorAll()][], and [.addEventListener()][] for traversing the DOM.

We need some way for JavaScript to update the board state.  Create simple
JavaScript functions that can update a particular player's position.  You give
the functions a player position as input and they update the underlying HTML to
reflect the new position.

It could look something like:

```javascript
update_player_position('player1', 10);
```

Store this JavaScript in a separate file and use the JavaScript console to
debug it and pass in values manually.



### Release 2: Binding to Key Presses

Now we'll make the game interactive!  Bind to the keyup event to detect
when a player has "pressed" a key.  We don't bind to the keydown or
keypress events because those events fire when the keyboard repeats the
key, whereas the keyup event doesn't.

It'd be a boring game if you could just hold the key and go.  You want to bind
to the `document`, like so:

```javascript
window.onload = function() {
  document.addEventListener('keyup', someFunction, false)
}
```

### Release 3: Starting and Winning States

Now that you have a functioning game, its time to add some more features. You
need to store starting and winning states so we can restart the game, declare a
winner, and turn off the keyboard event listeners.

Up until now, we've been using the DOM to store state in the form of HTML. But
JavaScript memory can be used to store state as well, as long as the user remains
on the page.

### Release 4: Dynamic Games

In release 0, we had you hard code the length of the game as table data cells. But
what if the game changed based on a variable set at the top of your JavaScript
file? like this:

```javascript
var lengthOfTrack = 30
```

Your task is to dynamically create the board based on that value. If you're feeling
adventurous, try to dynamically set the number of available players as well.

### Release 5: Object-Oriented JavaScript

You've been writing your project so far in functional JavaScript, with your variables
and functions likely defined in the global space. You would never do this in Ruby!
Can you reorganize your code into objects with limited interfaces, using either
[Object literal notation][] or [Prototype-based OO][]?

There are many possible ways to architect your program. How many objects should
know how to query and alter the DOM? Should players be aware of the length of
the game? Which object should handle dynamic board creation? There aren't any
"correct" answers to these questions, but make sure you make these decisions
intentionally.

### Release 6: Testing

JavaScript is a fully featured programming language, and like any language, it
has its own testing framework. We suggest you try to implement a basic testing
suite in [Jasmine][], a unit testing framework for JavaScript.

You should download and install [the 2.0.0 standalone distribution](https://github.com/pivotal/jasmine/tree/master/dist) of Jasmine to get
your tests up and running.

## Resources

* [Ruby Racer][]
* [normalize.css][]
* [Moxilla documentation for: keyup](https://developer.mozilla.org/en-US/docs/Web/Reference/Events/keyup)
* [Moxilla documentation for: keydown](https://developer.mozilla.org/en-US/docs/Web/Reference/Events/keydown)
* [Moxilla documentation for: keypress](https://developer.mozilla.org/en-US/docs/Web/Reference/Events/keypress)

[.addEventListener()]: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener
[.querySelector()]: https://developer.mozilla.org/en-US/docs/Web/API/document.querySelector
[.querySelectorAll()]: https://developer.mozilla.org/en-US/docs/Web/API/Document.querySelectorAll
[Ruby Racer]: http://socrates.devbootcamp.com/challenges/230
[normalize.css]: http://necolas.github.com/normalize.css/
[Object literal notation]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
[Prototype-based OO]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
[Jasmine]: http://jasmine.github.io/2.0/introduction.html