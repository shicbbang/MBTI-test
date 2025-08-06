import { questions } from "./data.js";

//console.log("질문 페이지");

//번호 출력

//console.log(questions[0].number)
//console.log(questions[0].question)
//console.log(questions[0].choices[0].text)
//console.log(questions[0].choices[1].text)

const progressBar = document.querySelector(".progress .value")
const numberEl = document.querySelector(".number");
const questionEl = document.querySelector(".question");
const choice1El = document.querySelector(".choice1");
const choice2El = document.querySelector(".choice2");

let currentNumber = 0;

//mbti 결과를 담을 변수를 선언
let mbti = '';

//choice1El 과 choice2El에 클릭 이벤트를 걸어본다.
// 콜백 함수 : 앞에서 정의한 조건이 만족 할 때 실행되는 함수

choice1El.addEventListener('click', function () {
  nextQuestion(0);
})

choice2El.addEventListener('click', function () {
  nextQuestion(1);
})

function nextQuestion(choiceNumber) {
  if(currentNumber == questions.length - 1){
   //검사한 mbti 결과를 갖고 결과 페이지로 이동
    console.log('결과 페이지로 이동할거야~ 구현 중...')
    shoeResultPage();
    return
  }
  //mbti 결과 저장
  mbti = mbti + questions[currentNumber].choices[choiceNumber].value
  currentNumber = currentNumber + 1;
  console.log(currentNumber)
  renderQuuestion();
}

function shoeResultPage(){
  //쿼리 스트링을 만들어서 결과 페이지를 호출
  location.href = './result.html?mbti=' + mbti;
}



function renderQuuestion() {
  const question = questions[currentNumber];

  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  progressBar.style.width = (currentNumber + 1) * 10 + '%';
}

renderQuuestion();