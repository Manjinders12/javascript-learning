const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data received!"), 1000);
});

promise.then((data) => console.log(data));
