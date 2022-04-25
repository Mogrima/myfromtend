// class AnimateBuild {
//     constructor(nameObj) {
//         this.nameObj = nameObj
//         let start = Date.now();
//     }

//     getn_move() {
//         let timer = setInterval(function() {
//             let timePassed = Date.now() - this.start;
      
//             this.nameObj.style.left = timePassed / 5 + 'px';
      
//             if (timePassed > 2000) clearInterval(timer);
      
//           }, 20);
//     }
// }

// class Animate {
//   constructor() {

//   }
// }

// function timer() {
//   let start = Date.now();
// }

// function animate(train) {
//     let start = Date.now();

//     let timer = setInterval(function() {
//       let timePassed = Date.now() - start;

//       train.style.bottom = timePassed / 25 + 'px';
//       if (train.style.bottom == '160px') {
//         train.style.top = timePassed / 25 + 'px';
//       }

//       if (timePassed > 4000) clearInterval(timer);

//     }, 20);
// }

// const obj1 = document.querySelector('.skill');

// obj1.addEventListener("click", function () {
//     animate(obj1)
// });

// console.log(obj1);

// train.onclick = function() {
//     let start = Date.now();

//     let timer = setInterval(function() {
//       let timePassed = Date.now() - start;

//       train.style.left = timePassed / 5 + 'px';

//       if (timePassed > 2000) clearInterval(timer);

//     }, 20);
//   }

const frontentBtn = document.getElementById('frontend')
const backendBtn = document.getElementById('backend');
const otherBtn = document.getElementById('something');
const somethingdBtn = document.getElementById('other');

let frontendItem = document.querySelectorAll('.frontend');
let backendItem = document.querySelectorAll('.back');
let somethingItem = document.querySelectorAll('.something');
let otherItem = document.querySelectorAll('.other');

function timeRemoveClass(elem) {
  elem.classList.remove('bounceIn');
  elem.classList.remove('hoverButton');
  console.log('time');
}

frontentBtn.addEventListener('click', () => {
  for (i = 0; i < frontendItem.length; i++) {
    frontendItem[i].classList.add('bounceIn');
    frontendItem[i].classList.add('hoverButton');
    setTimeout(timeRemoveClass, 900, frontendItem[i]);
  }
  
})

backendBtn.addEventListener('click', () => {
  for (i = 0; i < backendItem.length; i++) {
    backendItem[i].classList.add('bounceIn');
    backendItem[i].classList.add('hoverButton');
    setTimeout(timeRemoveClass, 900, backendItem[i]);
  }
  
})

otherBtn.addEventListener('click', () => {
  for (i = 0; i < somethingItem.length; i++) {
    somethingItem[i].classList.add('bounceIn');
    somethingItem[i].classList.add('hoverButton');
    setTimeout(timeRemoveClass, 900, somethingItem[i]);
  }
  
})

somethingdBtn.addEventListener('click', () => {
  for (i = 0; i < otherItem.length; i++) {
    otherItem[i].classList.add('bounceIn');
    otherItem[i].classList.add('hoverButton');
    setTimeout(timeRemoveClass, 900, otherItem[i]);
  }
  
})