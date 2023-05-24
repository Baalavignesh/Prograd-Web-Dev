userScore = 0;
compScore = 0;
let compChoice, userChoice;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("comp-score").innerHTML = 0;
  document.getElementById("user-score").innerHTML = 0;

  const video = document.getElementById("video");

  video.addEventListener(
    "ended",
    () => {
      console.log("ended");
      video.pause();
    },
    false
  );
});

let displayResult = () => {
  if (compChoice == userChoice) {
    document.getElementById("decision").innerHTML = "Draw";
  } else if (
    (userChoice === 1 && compChoice === 3) ||
    (userChoice === 2 && compChoice === 1) ||
    (userChoice === 3 && compChoice === 2)
  ) {
    document.getElementById("decision").innerHTML = "User Win";

    userScore += 1;
  } else {
    document.getElementById("decision").innerHTML = "Computer Win";

    compScore += 1;
  }

  const decisionSpan = document.getElementById("decision");

  decisionSpan.classList.remove("fade-out");
  void decisionSpan.offsetWidth;
  decisionSpan.classList.add("fade-out");

  document.getElementById("comp-score").innerHTML = compScore;
  document.getElementById("user-score").innerHTML = userScore;
};

let computerDecision = () => {
  let value = Math.floor(Math.random() * 3) + 1;
  try {
    document.getElementById("video").remove();
  } catch {
    console.log("no vid");
  }
  compChoice = value;
  console.log(value);
  if (value === 1) {
    document.getElementById("comp-hand").src = "./assets/rock.png";
    document.getElementById("computer-choice").innerHTML = "Rock";
  }
  if (value === 2) {
    document.getElementById("comp-hand").src = "./assets/paper.png";
    document.getElementById("computer-choice").innerHTML = "Paper";
  }
  if (value === 3) {
    document.getElementById("comp-hand").src = "./assets/scissor.png";
    document.getElementById("computer-choice").innerHTML = "scissor";
  }
};

let rock = () => {
  userChoice = 1;
  computerDecision();
  document.getElementById("user-hand").src = "./assets/rock.png";
  document.getElementById("computer-choice").innerHTML = "Rock";

  displayResult();
};

let paper = () => {
  userChoice = 2;
  computerDecision();
  document.getElementById("user-hand").src = "./assets/paper.png";
  document.getElementById("computer-choice").innerHTML = "Paper";
  displayResult();
};

let scissor = () => {
  userChoice = 3;
  computerDecision();
  document.getElementById("user-hand").src = "./assets/scissor.png";
  document.getElementById("computer-choice").innerHTML = "scissor";
  displayResult();
};

let reset = () => {
  location.reload();
};
