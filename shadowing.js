let x = 10;
function test() {
  let x = 20; // Shadows outer x
  console.log(x); // 20
}
test();
console.log(x); // 10

//output: 20
//output: 10
