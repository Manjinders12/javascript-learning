function javascript(name, callback) {
  console.log("Hello " + name);
  callback();
}
function sayBye() {
  console.log("Goodbye!");
}
javascript("Manjinder", sayBye);

// Output: Hello Manjinder → Goodbye!
