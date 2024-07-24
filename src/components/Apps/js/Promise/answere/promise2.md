# Promise2 Output

- ##### 1
- ##### 7
- ##### 3
- ##### 5
- ##### 2
- ##### 6
- ##### 4

# WHY ?

- #### Synchronous code runs first.
- #### Microtasks (resolved promises) are processed next.
- #### Tasks (like setTimeout, setInterval, setImmediate) are processed last.

## Synchronous Code

Synchronous code is executed immediately as it is encountered in the script.

```js
console.log(1);
console.log(7);
```

## Microtasks

Microtasks are queued by promises and other microtask sources and are executed after the current synchronous code, but before tasks.

```js
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => console.log(5));
Promise.resolve().then(() => setTimeout(() => console.log(4))); //the setTimeout inside the then creates a task and moves to task que
```

## Tasks

Tasks are queued by functions like setTimeout and are executed after the synchronous code and microtasks have been processed.

```js
setTimeout(() => console.log(2))
setTimeout(() => console.log(6))
setTimeout(() => console.log(4)) (created by the microtask)
```

[Video to watch about Promises RU](https://www.youtube.com/watch?v=mlXk4ALUsec&t=1s)
