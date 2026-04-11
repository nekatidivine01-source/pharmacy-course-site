let index = 0;
let score = 0;
let currentQuestions = [];

function startQuiz(questions) {
  currentQuestions = questions;
  index = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const q = currentQuestions[index];
  let optionsHTML = "";
  q.options.forEach(opt => {
    optionsHTML += `
      <label>
        <input type="radio" name="answer" value="${opt}"> ${opt}
      </label><br>
    `;
  });

  document.getElementById("quiz").innerHTML = `
    <p>${q.q}</p>
    ${optionsHTML}
  `;
}

function checkAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert("Please select an answer!");
    return;
  }

  if (selected.value.toLowerCase() === currentQuestions[index].a.toLowerCase()) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong! Correct answer: " + currentQuestions[index].a);
  }

  index++;
  document.getElementById("score").innerText = "Score: " + score;

  if (index < currentQuestions.length) {
    showQuestion();
  } else {
    alert("Quiz finished! Final score: " + score);
    localStorage.setItem("lastScore", score);
  }
}
