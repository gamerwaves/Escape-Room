let finish1 = false;
let finish2 = false;
let finish3 = false;
let finish4 = false;
let finish5 = false;

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".shape-option").forEach(option => {
      option.addEventListener("click", function () {
          let shape = this.getAttribute("data-shape");
          let emptyBox = document.querySelector(".shape-box:not([data-filled])");

          if (emptyBox) {
              emptyBox.innerHTML = this.innerHTML;
              emptyBox.setAttribute("data-shape", shape);
              emptyBox.setAttribute("data-filled", "true");
          }
      });
  });

  document.getElementById("clear-all").addEventListener("click", function () {
      document.querySelectorAll(".shape-box").forEach(box => {
          box.innerHTML = "";
          box.removeAttribute("data-shape");
          box.removeAttribute("data-filled");
      });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.color-option').forEach(option => {
      option.addEventListener('click', function () {
          let color = this.getAttribute('data-color');
          let emptyCircle = document.querySelector('.circle:not([data-filled])');

          if (emptyCircle) {
              emptyCircle.style.backgroundColor = color;
              emptyCircle.setAttribute('data-filled', 'true');
          }
      });
  });

  document.getElementById('clear-all').addEventListener('click', clearAll);
});

function hideLocks() {
  for (let i = 1; i <= 4; i++) {
    document.getElementById('lock' + i).style.display = 'none';
    document.getElementById('lock' + i).style.visibility = 'hidden';
  }
}

function loadLock(lock) {
  for (let i = 1; i <= 4; i++) {
    document.getElementById('lock' + i).style.display = 'none';
    document.getElementById('lock' + i).style.visibility = 'hidden';
  }
  document.getElementById('container').style.display = 'none';
  document.getElementById(lock).style.display = 'block';
  document.getElementById(lock).style.visibility = 'visible';
}

function clearInput(inputId) {
  document.getElementById(inputId).value = '';
}

function clearAll() {
  document.querySelectorAll('input').forEach(input => input.value = '');
  document.querySelectorAll('.circle').forEach(circle => {
    circle.style.backgroundColor = 'transparent';
    circle.removeAttribute('data-filled');
    document.querySelectorAll('.shape-box').forEach(shape => {
      shape.textContent = '';
      shape.removeAttribute('data-shape');
    });
  });
}
// Answers
// Answer 1
function checkAnswer1() {
  const selectedShapes = Array.from(document.querySelectorAll(".shape-box"))
      .map(box => box.getAttribute("data-shape") || "");

  const correctSequence = ["circle", "triangle", "circle", "diamond", "square"];

  if (selectedShapes.join(",") === correctSequence.join(",")) {
      alert("Correct! Move to the next lock.");
      finish1 = true;
      goBack();
  } else {
      alert("Wrong answer. Try again!");
  }
}

// Answer 2
function checkAnswer2() {
  const circles = document.querySelectorAll('.circle[data-filled]');
  const selectedColors = Array.from(circles).map(circle => circle.style.backgroundColor);

  // Define the correct color order for the answer
  const correctAnswer = ['orange', 'white', 'brown', 'purple', 'blue']; 

  if (selectedColors.length === correctAnswer.length && selectedColors.every((color, index) => color.toLowerCase() === correctAnswer[index])) {
    alert("Correct! Move to the next lock.");
    finish2 = true;
    goBack();
  } else {
    alert("Wrong answer. Try again!");
    clearAll()
  }
}


function checkAnswer3() {
  const answer = document.getElementById("answer3").value.trim().toLowerCase();
  if (answer === "coldcase") {
    alert("Correct! Move to the next lock.");
    finish3 = true;
    goBack();
  } else {
    alert("Wrong answer. Try again!");
  }
}

function checkAnswer4() {
  const answer = document.getElementById("answer4").value.trim().toLowerCase();
  if (answer === "9658") {
    alert("Correct! Move to the next lock.");
    finish4 = true;
    goBack();
  } else {
    alert("Wrong answer. Try again!");
  }
}

const checkConditions = () => {
  if (finish1 && finish2 && finish3 && finish4) {
    document.getElementById("container").innerHTML = `
      <h1>Congratulations!</h1>
      <p>You BROKE OUT!</p>
    `;
    clearInterval(interval);
  }
};

const interval = setInterval(checkConditions, 1);
