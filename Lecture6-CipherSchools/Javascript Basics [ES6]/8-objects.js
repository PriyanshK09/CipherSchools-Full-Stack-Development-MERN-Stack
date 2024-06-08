const person = {
  FirstName: "John",
  LastName: "Doe",
  Age: 30,
  EyeColor: "Blue",
};

let id = Symbol("id");
person[id] = 140111;
console.log(person);
