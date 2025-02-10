let finish1 = false;
let finish2 = false;
let finish3 = false;
let finish4 = false;
let finish5 = false;

// Hide all locks initially
function hideLocks() {
for (let i = 1; i <= 4; i++) {
  document.getElementById('lock' + i).style.display = 'none';
  document.getElementById('lock' + i).style.visibility = 'hidden';
} }

function loadLock(lock) {
  // Hide all sections first
  for (let i = 1; i <= 4; i++) {
    document.getElementById('lock' + i).style.display = 'none';
    document.getElementById('lock' + i).style.visibility = 'hidden';
  }
  document.getElementById('container').style.display = 'none';
    
  // Show the selected section
  document.getElementById(lock).style.display = 'block';
  document.getElementById(lock).style.visibility = 'visible';
}

function clearInput(inputId) {
  document.getElementById(inputId).value = '';
}

function checkAnswer1() {
  const answer = document.getElementById("answer1").value.trim().toLowerCase();
  if (countMatchingCharacters(answer, "a keyboard") >= 8) {
    alert("Correct! Move to the next lock.");
    finish1 = true;
    goBack();
  } else {
    alert("Wrong answer. Try again!");
  }
}

function checkAnswer2() {
  const answer = document.getElementById("answer2").value.trim().toLowerCase();
  if (countMatchingCharacters(answer, "a cloud") >= 5) {
    alert("Correct! Move to the next lock.");
    finish2 = true;
    goBack();
  } else {
    alert("Wrong answer. Try again!");
  }
}

function checkAnswer3() {
  const answer = document.getElementById("answer3").value.trim().toLowerCase();
  if (countMatchingCharacters(answer, "a joke") >= 4) {
    alert("Correct! Move to the next lock.");
    finish3 = true;
    goBack();
  } else {
    alert("Wrong answer. Try again!");
  }
}

function checkAnswer4() {
  const answer = document.getElementById("answer4").value.trim().toLowerCase();
  if (countMatchingCharacters(answer, "footsteps") >= 9) {
    alert("Correct! Move to the next lock.");
    finish4 = true;
    goBack();
  } else {
    alert("Wrong answer. Try again!");
  }
}

function checkAnswer5() {
  const answer = document.getElementById("answer5").value.trim().toLowerCase();
  if (countMatchingCharacters(answer, "an echo") >= 4) {
    alert("Correct! Move to the next lock.");
    finish5 = true;
    goBack();
  } else {
    alert("Wrong answer. Try again!");
  }
}

function countMatchingCharacters(userStr, correctStr) {
    let count = 0;
    let userStrLower = userStr.toLowerCase();
    let correctStrLower = correctStr.toLowerCase();
    
    for (let i = 0; i < correctStrLower.length; i++) {
        if (userStrLower.includes(correctStrLower[i])) {
            count++;
        }
    }
    return count;
}

// Function to check the conditions
const checkConditions = () => {
  if (finish1 && finish2 && finish3 && finish4 && finish5) {
    document.getElementById("game-container").innerHTML = `
      <h1>Congratulations!</h1>
      <p>You have escaped the room!</p>
    `;

    // Stop checking once the conditions are met
    clearInterval(interval);
  }
};

// Check the conditions every 1 milliseconds
const interval = setInterval(checkConditions, 1);
