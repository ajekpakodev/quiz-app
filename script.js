import {questions, shuffle} from "./questions.js";

let questionIndex = 0;
let point = 0;
let count =20;
let countInterval;


let startBtn = document.getElementById("start-btn");
let question = document.getElementById("question");
let options = document.getElementById("options");
let score = document.getElementById("score");
let time = document.getElementById("time");
let progress = document.getElementById("progress-bar");
let questionIndexElem= document.getElementById("question-index")
let totalQuestionElem = document.getElementById("questions-len")

startBtn.onclick = function() {
   let statusPanel = document.querySelector(".status-panel");
   statusPanel.style.display = "flex";
   
   shuffle(questions);
   startQuiz();
}


function startQuiz() {
   if(questionIndex === questions.length) {
      endQuiz();
      return;
   }
   
   clearInterval(countInterval);
   count = 20;
   time.style.color = "mediumseagreen";
   time.textContent = "20"
   progress.style.display = "block"
   questionIndexElem.textContent = questionIndex + 1;
   totalQuestionElem.textContent = questions.length;
   countDown();
   
   let questionObject = questions[questionIndex];
   question.innerHTML = questionObject.question;
   
   options.innerHTML = ""; //clear previous options 
   shuffle(questionObject.options).forEach(function(option){
      let p = document.createElement("p");
      p.innerHTML = option;
      
      p.onclick = function() {
         if(option === questionObject.answer) {
            p.style.backgroundColor = "mediumseagreen"
            p.style.color = "white"
            point = point + 10;
            score.textContent = point;
         } else {
            p.style.backgroundColor = "tomato";
            p.style.color = "white";
         }
         options.querySelectorAll("p").forEach(opt => opt.onclick = null);
         setTimeout(startQuiz, 1000);
      }
      options.appendChild(p)
   });
   questionIndex = questionIndex + 1;
}


function endQuiz() {
   progress.style.display= "none"
   clearInterval(countInterval)
   time.textContent = "0";
   time.style.color = "inherit"
     
   question.textContent = `Quiz Completed🎉, Your Points: ${point}`;
   options.innerHTML = "";
   
   let restartBtn = document.createElement("button");
   restartBtn.textContent = "Restart";
   restartBtn.onclick = function() {
      point = 0;
      score.textContent = point;
      questionIndex = 0;
      
      shuffle(questions);
      startQuiz();
   }
   options.appendChild(restartBtn);
}


function countDown() {
   countInterval = setInterval(() => {
      count > 11?time.style.color = "mediumseagreen":time.style.color = "tomato";
      count = count - 1;
      time.textContent = count;
      if(count === 0) { //questions wasn't answered 
         startQuiz();
      }
   }, 1000);
  }
  
