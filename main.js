let myObject = {
  navn: "Sander",
  alder: 27,
  erStudent: true,
  favorittFrukt: ["appelsin", "banan", "pære"],
  addresse: {
    by: "Tromsø",
    Tromsøveien: "12345",
  },
};
console.log(myObject);

function performOperation(num1, num2) {
  let result = num1 + num2;
  return result;
}

let sum = performOperation(3, 7);
console.log("Er lik: " + sum);

function splitString(str) {
  let resultat = str.split(" ");
  return resultat;
}

let inputString = "Dette er en test";
let splittedString = splitString(inputString);

console.log("Original string: " + inputString);
console.log("Splittet array:", splittedString);

// inputstringen kjører bare teksten som den er, men ved bruk av str.split, ett mellomrom, og ett komma, splitter man hvert ord eller element i stringen til hver sin del

let tittelElement = document.getElementById("tittel");
let paragrafElement = document.getElementById("paragraf");

tittelElement.innerHTML += " Syntes det er en fin tittel";
paragrafElement.innerHTML += " Men her er litt mer tekst uansett da.";

let num1 = 10;
let num2 = 5;
let resultat = num1 * num2;

let resultatElement = document.createElement("p");
resultatElement.innerHTML =
  "Resultatet av " + num1 + " * " + num2 + " er: " + resultat;

document.body.appendChild(resultatElement);
