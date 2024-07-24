# Promise1 Output

- ##### "apple"
- ##### "strawberry"
- ##### "blueberry"
- ##### "pear"
- ##### "orange"
- ##### "melon"

# WHY ?

- #### Synchronous code runs first.
- #### Microtasks (resolved promises) are processed next.
- #### Tasks (like setTimeout, setInterval, setImmediate) are processed last.

## Synchronous Code

Synchronous code is executed immediately as it is encountered in the script.

```js
console.log("apple");
console.log("strawberry"); //inside the promise executor
console.log("blueberry");
```

## Microtasks

Microtasks are queued by promises and other microtask sources and are executed after the current synchronous code, but before tasks.

```js
Promise.resolve("pear").then((res) => console.log(res));
new Promise((res, rej) => {
  res("orange");
}).then((response) => console.log(response));
```

## Tasks

Tasks are queued by functions like setTimeout and are executed after the synchronous code and microtasks have been processed.

```js
setTimeout(() => console.log("melon"), 0);
```

[Video to watch about Promises RU](https://www.youtube.com/watch?v=mlXk4ALUsec&t=1s)
