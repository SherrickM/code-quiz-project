// ## User Story

// AS A coding boot camp student I WANT to take a timed quiz on JavaScript fundamentals that stores high scores SO THAT I can gauge my progress compared to my peers

// ## Acceptance Criteria

// GIVEN I am taking a code quiz WHEN I click the start button THEN a timer starts and I am presented with a question WHEN I answer a question

// THEN I am presented with another question WHEN I answer a question incorrectly  THEN time is subtracted from the clock WHEN all questions are answered or the timer reaches 

// THEN the game is over WHEN the game is over THEN I can save my initials and my score


//variables go here

const quizData = [
  {
    question: "What does HTML stand for?",
    choices: ["Hypertext markup Language", "Hypertext madeup Language", "Hypetext markup Language", "None of the above"],
    correct: "Hypertext markup Language",
  },

  {
    question: "What application controls the styling of the page?",
    choices: ["HTML", "CSS", "Python", "Wix",],
    correct: "CSS",
  },
  {
    question: "Arrays in javascript can be used to store?",
    choices: ["Numbers", "Strings", "Other arrays", "All of the above",],
    correct: "All of the above",
  },
  {
    question: "Javascript can be used to create ______ on a webpage. ",
    choices: ["HTML", "CSS", "Animations", "All of the above",],
    correct: "All of the above",
  },
  {
    question: "What application is used to log code to the console?",
    choices: ["HTML", "CSS", "Javascript", "All of the above",],
    correct: "Javascript",
  },

];

const start = document.getElementById('start')
const quiz = document.getElementById('quiz')
const answers = document.querySelectorAll('.answer')
const questionContainer = document.getElementById('questionContainer')

const questionsTitle = document.getElementById('question')

const questionChoices = document.getElementById('questionChoices')
const saveBtn = document.getElementById('save')

// This is for the timer
let timer = 60;
const timeEl = document.getElementById('time');
let index = 0
let score = 0
let interval;

// functions 

// GIVEN I am taking a code quiz WHEN I click the start button THEN a timer starts and I am presented with a question WHEN I answer a question

function startQuiz() {

  questionContainer.classList.remove('hide')
  start.setAttribute("class", "hide")


  timeEl.textContent = timer;
  interval = setInterval(function () {
    timer--;
    timeEl.textContent = timer;

    if (timer <= 0) {
      stopQuiz();
    }

  }, 1000

  )

  loadQuestions();

}



function loadQuestions() {
  let currentQuestion = quizData[index]
  questionsTitle.textContent = currentQuestion.question;

  questionChoices.innerHTML = '';

  for (let i = 0; i < currentQuestion.choices.length; i++) {
    //create buttons for choices
    let btn = document.createElement('button');
    btn.textContent = currentQuestion.choices[i]
    btn.setAttribute('value', currentQuestion.choices[i])

    btn.onclick = checkAnswers;

    questionChoices.append(btn)

  }

}

function checkAnswers() {
  console.log(this.value)

  // WHEN I answer a question incorrectly THEN time is subtracted from the clock
  if (this.value !== quizData[index].correct) {
    timer -= 15;
    timeEl.textContent = timer;

    if (timer < 0) {
      timer = 0;
    }
  }

  //  WHEN I answer a question THEN I am presented with another question 
  index++;

  // we need to check if there are more questions left in the array if not the game is over
  if (quizData.length === index) {
    stopQuiz();
  }
  else {
    loadQuestions();
  }
};


function stopQuiz() {

  // WHEN all questions are answered or the timer reaches 0
  clearInterval(interval)

  //show the gameover container
  const gameOverEl = document.getElementById('game-over-container');

  gameOverEl.classList.remove('hide')
  questionContainer.classList.add('hide')


}


function saveScore() {
  // THEN the game is over WHEN the game is over THEN I can save my initials and my score...NEED TO SAVE TO LOCAL STORAGE
  const initialsVal = document.getElementById('initials').value;


  // Add a condition that will check if the initials is empty
  if (initialsVal !== "") {

    const score = {
      score: timer,
      initials: initialsVal
    }

    //get the saved highscores from local storage if no scores exists set this as an empty array
    const highScore = JSON.parse(localStorage.getItem('highscores')) || [];

    highScore.push(score);

    localStorage.setItem('highscores', JSON.stringify(highScore));

    //reload page when initials are saved
    location.reload();
  }

}




//eventlisteners

start.addEventListener('click', startQuiz)

saveBtn.addEventListener('click', saveScore)