console.log("start");

const myPromise = new Promise((resolve, reject) => {
  console.log("Promise started");
  setTimeout(() => {
    resolve("Resolved");
  }, 1000);
});

myPromise.then((result) => {
  console.log("Resolved with:", result);
});

console.log("After promise created");

// execute before the promise is resolved
setTimeout(() => {
  console.log("Timeout callback");
}, 500);

console.log("End");
