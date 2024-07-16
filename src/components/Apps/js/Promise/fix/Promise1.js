// what will show in console?

console.log('apple')

setTimeout(()=> console.log("melon"), 0)

Promise.resolve("pear").then((res)=> console.log(res));

new Promise((res, rej) => {
    console.log("strawberry");
    res("orange");
}).then((response) => console.log(response))

console.log("blueberry")


