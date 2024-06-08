var x = 15;

{
  let x = 5;
  console.log(x);
}

console.log(x);

{
  const x = 5;
  console.log(x);
  // x = 6; // This will cause an error because you can't reassign a constant
  console.log(x);
}
