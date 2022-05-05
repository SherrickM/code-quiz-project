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
    a: "HTML",
    b: "CSS",
    c: "Python",
    d: "Wix",
    correct: "b",
  },
  {
    question: "Arrays in javascript can be used to store?",
    a: "Numbers",
    b: "Strings",
    c: "Other arrays",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "Javascript can be used to create ______ on a webpage. ",
    a: "HTML",
    b: "CSS",
    c: "Animations",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "What application is used to log code to the console?",
    a: "HTML",
    b: "CSS",
    c: "Javascript",
    d: "All of the above",
    correct: "c",
  },

];

const start = document.getElementById('start')
const quiz = document.getElementById('quiz')
const answers = document.querySelectorAll('.answer')
const questionContainer = document.getElementById('questionContainer')

const questionsTitle = document.getElementById('question')

const questionChoices = document.getElementById('questionChoices')

// This is for the timer
let timer = 60;
const timeEl = document.getElementById('time');

let index = 0
let score = 0

// functions 

function startQuiz() {

  questionContainer.classList.remove('hide')
  start.setAttribute("class", "hide")


  timeEl.textContent = timer;
  setInterval(function () {
    timer--;
    timeEl.textContent = timer;
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
};

//eventlisteners

start.addEventListener('click', startQuiz)