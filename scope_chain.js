function outer() {
  let outerVar = "I’m outside!";
  function inner() {
    console.log(outerVar);
  }
  inner();
}
outer();

// Output: I’m outside!
