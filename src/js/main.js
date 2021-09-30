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

function animate(train) {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      train.style.left = timePassed / 5 + 'px';

      if (timePassed > 2000) clearInterval(timer);

    }, 20);
}

const obj1 = document.querySelector('.skill');

obj1.addEventListener("click", function () {
    animate(obj1)
});

console.log(obj1);

// train.onclick = function() {
//     let start = Date.now();

//     let timer = setInterval(function() {
//       let timePassed = Date.now() - start;

//       train.style.left = timePassed / 5 + 'px';

//       if (timePassed > 2000) clearInterval(timer);

//     }, 20);
//   }