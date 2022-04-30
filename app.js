const quizData = [
  {
    question: "What does html stand for?",
    a: "Hypertext markup Language",
    b: "Hypertext madeup Language",
    c: "Hypetext markup Language",
    d: "None of the above",
    correct: "a",
  },
  
  {
    question: "What application controls the styling of the page?",
    a1: "HTML",
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
const questions = document.getElementById('question')
const a_answer = document.getElementById('a_answer')
const b_answer = document.getElementById('b_answer')
const c_answer = document.getElementById('c_answer')
const d_answer = document.getElementById('d_answer')

let currentQuiz = 0
let score = 0




start.addEventListener('click', startQuiz)



function startQuiz(){
  
  quiz.classList.remove('hide')
  start.setAttribute("class", "hide")
  console.log('start')
  const currentQuizData = quizData[currentQuiz]
  for(var i=0 ; i<quizData.length; i++){
    questions.innerText= quizData[i].question;
    a_answer.innerText = quizData[i].a;
    b_answer.innerText = quizData[i].b;
    c_answer.innerText = quizData[i].c;
    d_answer.innerText = quizData[i].d;
   
  }
  questions.innerText = currentQuizData.question
}


