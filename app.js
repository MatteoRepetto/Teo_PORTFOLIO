const cursor = document.querySelector(".circle");
const delay = 250;
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Controlla nouvo cursore
function throttle(callback, limit) {
  let wait = false;
  return function () {
    if (!wait) {
      callback.apply(null, arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}

// window.resize callback function
function getDimensions(e) {
  cursor.style.top = `${e.clientY - 10}px`;
  cursor.style.left = `${e.clientX - 10}px`;
}


// window.resize event listener
window.addEventListener("mousemove", (e) => {
  throttle(getDimensions(e), delay);
});




//hover work img  SIZE: 1662 x 680 Raster: inch 150, angle 45, frequency 200 NEW SIZE 831 x 340
document.getElementById("colored__img1").addEventListener('mouseover', (event) => {
  document.getElementById("colored__img1").src = './images/01_Parolab/00_cover2.png'
  console.log('j')
})

document.getElementById("colored__img1").addEventListener('mouseout', (event) => {
  document.getElementById("colored__img1").src = './images/01_Parolab/00_cover.png'
})

document.getElementById("colored__img2").addEventListener('mouseover', (event) => {
  document.getElementById("colored__img2").src = './images/02_Kryome/00_cover2.png'
  console.log('j')
})

document.getElementById("colored__img2").addEventListener('mouseout', (event) => {
  document.getElementById("colored__img2").src = './images/02_Kryome/00_cover.png'
})

document.getElementById("colored__img3").addEventListener('mouseover', (event) => {
  document.getElementById("colored__img3").src = './images/07_ho scritto lettere/00_cover2.png'
  console.log('j')
})

document.getElementById("colored__img3").addEventListener('mouseout', (event) => {
  document.getElementById("colored__img3").src = './images/07_ho scritto lettere/00_cover.png'
})

document.getElementById("colored__img4").addEventListener('mouseover', (event) => {
  document.getElementById("colored__img4").src = './images/04_Everything is fine/00_cover2.png'
  console.log('j')
})

document.getElementById("colored__img4").addEventListener('mouseout', (event) => {
  document.getElementById("colored__img4").src = './images/04_Everything is fine/00_cover.png'
})

document.getElementById("colored__img5").addEventListener('mouseover', (event) => {
  document.getElementById("colored__img5").src = './images/06_TODO/00_cover2.png'
  console.log('j')
})

document.getElementById("colored__img5").addEventListener('mouseout', (event) => {
  document.getElementById("colored__img5").src = './images/06_TODO/00_cover.png'
})

document.getElementById("colored__img6").addEventListener('mouseover', (event) => {
  document.getElementById("colored__img6").src = './images/08_3D/00_cover3D2.png'
  console.log('j')
})

document.getElementById("colored__img6").addEventListener('mouseout', (event) => {
  document.getElementById("colored__img6").src = './images/08_3D/00_cover3D.png'
})

document.getElementById("colored__img7").addEventListener('mouseover', (event) => {
  document.getElementById("colored__img7").src = './images/03_Green/00_cover.png'
  console.log('j')
})

document.getElementById("colored__img7").addEventListener('mouseout', (event) => {
  document.getElementById("colored__img7").src = './images/03_Green/00_cover2.png'
})

document.getElementById("colored__img8").addEventListener('mouseover', (event) => {
  document.getElementById("colored__img8").src = './images/09_vacanze/00_cover2.png'
  console.log('j')
})

document.getElementById("colored__img8").addEventListener('mouseout', (event) => {
  document.getElementById("colored__img8").src = './images/09_vacanze/00_cover.png'
})

document.getElementById("colored__img9").addEventListener('mouseover', (event) => {
  document.getElementById("colored__img9").src = './images/05_Spit It Out/00_cover2.png'
  console.log('j')
})

document.getElementById("colored__img9").addEventListener('mouseout', (event) => {
  document.getElementById("colored__img9").src = './images/05_Spit It Out/00_cover.png'
})

// document.getElementById("colored__img10").addEventListener('mouseover', (event) => {
//   document.getElementById("colored__img10").src = '/images/10_Robots/00_cover2.png'
//   console.log('j')
// })

// document.getElementById("colored__img10").addEventListener('mouseout', (event) => {
//   document.getElementById("colored__img10").src = '/images/10_Robots/00_cover.png'
// })

// document.getElementById("colored__img11").addEventListener('mouseover', (event) => {
//   document.getElementById("colored__img11").src = '/images/12_growmate/00_cover2.png'
//   console.log('j')
// })

// document.getElementById("colored__img11").addEventListener('mouseout', (event) => {
//   document.getElementById("colored__img11").src = '/images/12_growmate/00_cover.png'
// })

document.getElementById("colored__img12").addEventListener('mouseover', (event) => {
  document.getElementById("colored__img12").src = './images/11_Robbin/00_cover2.png'
  console.log('j')
})

document.getElementById("colored__img12").addEventListener('mouseout', (event) => {
  document.getElementById("colored__img12").src = './images/11_Robbin/00_cover.png'

})



