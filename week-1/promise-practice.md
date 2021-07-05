complete these exercises from javascript.info and paste your solutions in to this file:

- [promise basics](https://javascript.info/promise-basics#tasks)

## Re-resolve a promise?

What’s the output of the code below?

```js
let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

//1
```

## Delay with a promise

The built-in function setTimeout uses callbacks. Create a promise-based alternative.

The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

```js
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms)); //just return resolve without value
}

delay(3000).then(() => alert('runs after 3 seconds'));
//Promise {<pending>}
//[[PromiseStatus]]: "resolved
//runs after 3 seconds (after 3 secs)
```

## Animated circle with promise

Rewrite the showCircle function in the solution of the task Animated circle with callback so that it returns a promise instead of accepting a callback.

The new usage:

```js
showCircle();
showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append('Hello, world!');
});
```

Take the solution of the task Animated circle with callback as the base.

solution:

```js
showCircle();
showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append('Hello, world!');
});
function showCircle(x, y, rad) {
  let div = document.createElement('div');
    div.style.width = 2em;
    div.style.height = 2em;
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.className = 'circle';
    document.body.append(div);

  let promise = new Promise(resolve => {
    setTimeout(() => {
      div.style.width = rad * 2 + "px";
      div.style.height = rad * 2 + "px";

      div.addEventListener('transitionend', function handler() { //transitionend	The event occurs when a CSS transition has completed
          resolve(div);
      });
    }, 0);

  })
}
```

- [promise chaining](https://javascript.info/promise-chaining#tasks)

## Promise: then versus catch

Are these code fragments equal? In other words, do they behave the same way in any circumstances, for any handler functions?

```js
promise.then(f1).catch(f2);
```

Versus:

```js
promise.then(f1, f2);
```

Answer: They don't behave the same way in any circumstances, because in the first one there are .then and .catch and .catch handles the errors with its function (.catch(errorHandlingFunction)).
But in the second one there is only one then, and it doesn't have any description (.then(null, errorHandlingFunction)) to handle the errors, it an error is passed to is from promise.

- [promise api](https://javascript.info/promise-api)

## Summary

There are 5 static methods of Promise class:

1. 'Promise.all(promises)' – waits for all promises to resolve and returns an array of their results. If any of the given promises rejects, then it becomes the error of Promise.all, and all other results are ignored.
2. Promise.allSettled(promises) (recently added method) – waits for all promises to settle and returns their results as array of objects with:
   *state: "fulfilled" or "rejected"
   *value (if fulfilled) or reason (if rejected).
3. Promise.race(promises) – waits for the first promise to settle, and its result/error becomes the outcome.
4. Promise.resolve(value) – makes a resolved promise with the given value.
5. Promise.reject(error) – makes a rejected promise with the given error.
   Of these five, Promise.all is probably the most common in practice.

and here's another [helpful resources](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
