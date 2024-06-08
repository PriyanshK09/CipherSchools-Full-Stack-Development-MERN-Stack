const myFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("This is inside Promise");
      resolve();
    }, 2000);
  });
};

myFunction()
  .then(() => {
    console.log("Resolved");
  })
  .catch(() => {
    console.error("Rejected");
  });
