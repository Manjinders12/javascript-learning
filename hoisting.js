console.log(x); // undefined
var x = 5;

hoisted(); // "Hoisted!"
function hoisted() {
  console.log("Hoisted!");
}

//output: undefined
//output: Hoisted!
