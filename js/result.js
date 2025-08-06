import { results,mbtis } from "./data.js";

console.log(results[0].title)
console.log(results[0].results[0])
console.log(results[0].jobs[1])
//console.log(mbtis.intp);
//const mbti = 'intp'
console.log(mbtis['intp']); //이게 가장 나은 방법

//http://127.0.0.1:5500/result.html?mbti=isfj
//쿼리 스트링을 가져와야 함.
const mbti = new URLSearchParams(location.search).get('mbti')
console.log(mbtis[mbti])

// 1. 각각의 태그를 지정해야 함.
//const titleEl = document querySelectorAll 
//const characterEl = ~~~~ querySelectorAll
//const boxEls = ~~~~~~~~~ querySelectorAll
//const jobsEls = ~~~~~~~~~ querySelectorAll
//const lectureEl = ~~~~~~~~~ querySelectorAll
//const lectureImgEls = ~~~~~~~~~ querySelectorAll

// 위의 내용에 innerHTML 로 표시
// 단,  querySelectorAll 로 가져온 아이들은
// fotEach 구문을 이용해서 처리(문법을 찾아서)
//lecture 는 lecture.html 로 보이게 하면 됩니다

const titleEl = document.querySelectorAll('.title')
const characterEl = document.querySelectorAll('.character')
const boxEls =  document.querySelectorAll('.boxs')
const jobsEls =  document.querySelectorAll('.jobs')
const lectureEl =  document.querySelectorAll('.lecture')
const lectureImgEls =  document.querySelectorAll('.lectureImg')

titleEl.forEach((el, i) => {
  el.innerHTML = 'titleEl {i + 1}';
});

characterEl.forEach((el, i) => {
  el.innerHTML = 'chracter {i + 1}';
});

boxEls.forEach((el, i) => {
  el.innerHTML = 'box {i + 1}';
});

jobsEls.forEach((el, i) =>
  el.innerHTML = `jobs ${i + 1}` <Image>
);
