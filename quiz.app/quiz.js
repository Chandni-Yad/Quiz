const  questions = [
  {
question : "which is the largest fish in water",
answer : [
  "shark", "whale", "octopus", "fish"],

correctanswer : "whale"
},
{
  question : "which is the largest animal on land",
  answer : [
    "bear",
    "Elephant", "fish","cat"],
    correctanswer : "Elephant"
  },
   {
question : "which has largest egg in world",
answer : [
 "kangaroo","ostrich", "bird","hen"
],
correctanswer : "ostrich"
 },
   
 {
  question : "what is the national flower of our country",
  answer : [
    "lotus", "sunflower", "jasmine", "rose"],
  
  correctanswer : "lotus"
  }
  ,
   {
question : "which has longest river in India",
answer : [
 "Ganga","Yamuna", "krishna","Godavari"
],
correctanswer : "Ganga"
 },

]
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton =  document.getElementById("next-btn");
  const timeup = document.querySelector(".timer");
let currentQuestionIndex = 0;
let answerSelected = false;
let score = 0;

let intervalId;// intialize before clear out inntervalid
function startimer(){
  clearInterval(intervalId);// clear interval before next question
  let timerLeft = 7;
  timeup.innerHTML =  `Time: ${timerLeft}s`;
 intervalId = setInterval(()=>{
  timerLeft--;
  timeup.innerHTML =  `Time: ${timerLeft}s`;
  if(timerLeft <= 0){
    clearTimeout(intervalId);
 
 nextQuestion();
  }

},1000)
}


const showQuestions = () =>{
const currentQuestion = questions[currentQuestionIndex];// add the current question
const questionNo = currentQuestionIndex +1;
questionElement.textContent = "Q"+questionNo+ "." + currentQuestion.question;

answerButtons.innerHTML = ""; 
answerSelected = false;// for prevent multiple selection
// for new adding of answerdetails
for(let i = 0; i<currentQuestion.answer.length; i++){
  const answerDetails = currentQuestion.answer[i];
   const answerDev = document.createElement('div');// create the button
  answerDev.innerHTML = answerDetails;
 answerDev.classList.add('btn')

answerDev.addEventListener('click',()=>{// for click right buuton
 if( answerSelected)return;
 answerSelected = true; // for clicking the coorect answer selected
  if(answerDev.textContent === currentQuestion.correctanswer){
    answerDev.classList.add("correct");// correct style add kar hai for colour change
    score++;// score add ho raha hai
  } 
  else{ 
    answerDev.classList.add("wrong");
  document.querySelectorAll(".btn").forEach((button) =>{//wrong answer ke sath correct answer
    if(button.innerHTML === currentQuestion.correctanswer){
      button.classList.add("correct")
    }
  })
}
})
answerButtons.appendChild(answerDev);  // saare answer ko div mein add karke answerdev mein dala jaa raha
  console.log(answerButtons)
}
startimer();
}


nextButton.addEventListener('click',()=>{// next button click karke new question aaye
  nextQuestion();
 
})
showQuestions();

function nextQuestion(){// 
  if(currentQuestionIndex<questions.length-1){
    currentQuestionIndex++;
    
    showQuestions();
  }
else{
  showScore();
}

}
 
function showScore(){
  clearInterval(intervalId);
  answerButtons.innerHTML = "";
  questionElement.textContent = "";
questionElement.textContent = `you scored ${score} out of ${questions.length}`
nextButton.innerHTML = "play again"
nextButton.addEventListener('click',()=>{// quiz dubara start ho jaaye
 showQuestions();
})

}




