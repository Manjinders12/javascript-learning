function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("I HAVE LEARNING JAVASCRIPT"), 1000);
  });
}

async function showData() {
  const data = await getData();
  console.log(data);
}

showData();

// Output: I HAVE LEARNING JAVASCRIPT
