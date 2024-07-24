# Promise4 Output

- ##### "script start"
- ##### "promise3"
- ##### "script end"
- ##### "promise1"
- ##### "promise2"
- ##### "setTimeout"

# WHY ?

- #### Synchronous code runs first.
- #### Microtasks (resolved promises) are processed next.
- #### Tasks (like setTimeout, setInterval, setImmediate) are processed last.

## Synchronous Code

Synchronous code is executed immediately as it is encountered in the script.

```js
console.log("script start");
new Promise((resolve) => {
  console.log("promise3");
});
console.log("script end");
```

## Microtasks

Microtasks are queued by promises and other microtask sources and are executed after the current synchronous code, but before tasks.

```js
Promise.resolve()
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });
```

## Tasks

Tasks are queued by functions like setTimeout and are executed after the synchronous code and microtasks have been processed.

```js
setTimeout(function () {
  console.log("setTimeout");
}, 0);
```

[Video to watch about Promises RU](https://www.youtube.com/watch?v=mlXk4ALUsec&t=1s)
