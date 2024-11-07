const replaceString = (string, valueToReplace, valueToReplaceWith) => {
  const result = [];
  const stringToArr = string.split(" ");

  for (const word of stringToArr) {
    if (word === valueToReplace) {
      result.push(valueToReplaceWith);
    } else {
      result.push(word);
    }
  }
  return result.join(" ");
};

console.log(
  replaceString(
    "Hello my name is avto , i am front end developer",
    "Hello",
    "Wassup"
  )
);

// --------------------------------- 2 -------------------- //

const makeCapitalize = (string) => {
  let result = [];
  const stringToArr = string.split(" ");

  stringToArr.map((e) => {
    result.push(e[0].toUpperCase() + e.substring(1, e.length));
  });
  return result.join(" ");
};

console.log(
  makeCapitalize("hello i am react front end developer i am 19 years old")
);

// ------------------------------ 3 ------------------------- //

let students = [
  {
    name: "Tika",
    lastName: "Gamsaxurdia",
    age: 20,
    activeStatus: true,
  },
  {
    name: "Nika",
    lastName: "Gabisonia",
    age: 21,
    activeStatus: true,
  },
  {
    name: "Nini",
    lastName: "Goglichidze",
    age: 21,
    activeStatus: false,
  },
  {
    name: "Zura",
    lastName: "Zaalishvili",
    age: 22,
    activeStatus: false,
  },
  {
    name: "Nato",
    lastName: "Msxiladze",
    age: 18,
    activeStatus: true,
  },
  {
    name: "Zaal",
    lastName: "Udumashvili",
    age: 18,
    activeStatus: true,
  },
  {
    name: "Zurab",
    lastName: "Zarievi",
    age: 24,
    activeStatus: false,
  },
];

function sortStudentsByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}
console.log(sortStudentsByAge(students));


