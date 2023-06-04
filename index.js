"use strict";
const quizData = [
  {
    question: "how old is florin?",
    a: "10",
    b: "25",
    c: "30",
    d: "80",
    correct: c,
  },
  {
    question: "what is most used programming language in 2019?",
    a: "java",
    b: "python",
    c: "c",
    d: "javascript",
    correct: d,
  },
  {
    question: "who is the president of USA?",
    a: "Donald Trump",
    b: "George Washington",
    c: "Andrew Jackson",
    d: "Joseph R. Biden",
    correct: d,
  },
  {
    question: "what does HTML stand for?",
    a: "HyperText Markup Language",
    b: "HyperText Markup",
    c: "Jason",
    d: "application programming interface",
    correct: a,
  },
  {
    question: "what year Javascript launch?",
    a: "2020",
    b: "1995",
    c: "1990",
    d: "2002",
    correct: b,
  },
];
console.log(quizData[0].correct);
//
let currentQuestion = 0;
const question = document.querySelector("h2");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submit = document.querySelector(".btn");
const quizHeader = document.querySelector(".quiz-header");
const correctAns = document.querySelector(".correct");
const radiovalue = document.getElementsByName("answer");

const loadQuiz = function () {
  const currentQuizData = quizData[currentQuestion];
  question.textContent = currentQuizData.question;
  a_text.textContent = currentQuizData.a;
  b_text.textContent = currentQuizData.b;
  c_text.textContent = currentQuizData.c;
  d_text.textContent = currentQuizData.d;
  return currentQuizData;
};
loadQuiz();
const getSelected = function (data) {
  radiovalue.forEach((ele) => {
    if (ele.checked) {
      console.log(ele.checked === data.correct.id);
      if (ele.id === data.correct.id) {
        if (currentQuestion === quizData.length - 1) {
          quizHeader.innerHTML = "";
          document.querySelector("body").textContent = "Finished🎉🎉🎉";
        } else {
          currentQuestion++;
          loadQuiz();
        }
      } else {
        correctAns.textContent = `Correct ans is :${data[data.correct.id]}`;
      }
    }
  });
  radiovalue.forEach((ele) => (ele.checked = false));

  //
};

submit.addEventListener("click", () => {
  if (currentQuestion < quizData.length) {
    const data = loadQuiz();
    getSelected(data);
  } else {
    alert("you finished get yourself lemonade🍸");
  }
});
