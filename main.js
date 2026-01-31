let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guessed = false;

while (attempts < 5) {
  let userGuess = Number(prompt("გამოიცანი რიცხვი (1-100):"));
  attempts++;

  if (userGuess === secretNumber) {
    alert("🎉 სწორია! ცდების რაოდენობა: " + attempts);
    guessed = true;
    break;
  } else if (userGuess > secretNumber) {
    alert("📉 ძალიან დიდია");
  } else {
    alert("📈 ძალიან პატარაა");
  }
}

if (!guessed) {
  alert("წააგე! სწორი რიცხვი იყო: " + secretNumber);
}



let names = [];
let upperNames = [];
let longestName = "";
let totalLength = 0;

for (let i = 0; i < 3; i++) {
  let name = prompt("შეიყვანე სახელი:");
  names.push(name);

  let upper = name.toUpperCase();
  upperNames.push(upper);

  totalLength += name.length;

  if (name.length > longestName.length) {
    longestName = name;
  }
}

let averageLength = Math.round(totalLength / names.length);

alert(
  "სახელები დიდ ასოებში: " + upperNames.join(", ") +
  "\nყველაზე გრძელი სახელი: " + longestName +
  "\nსაშუალო სიგრძე: " + averageLength
);
