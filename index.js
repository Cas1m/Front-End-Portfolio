const swipe = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },    
  });

  const counters = document.querySelectorAll(".count");
  const speed = 300;
  
  counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(+counter.getAttribute("data-target"));
    const count = parseInt(+counter.innerText);
    const increment = Math.trunc(target / speed);
    console.log(increment);
  
    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
  });
  
  const bars = document.getElementById('bars');
  const mobileMenu = document.getElementById('mobileMenu');
  bars.addEventListener('click', function() {
    mobileMenu.classList.toggle('active')
  })



// let button = document.getElementById("button");
// button.addEventListener('mousemove', (e) => {
//     x = e.offsetX;
//     y = e.offsetY;
//     button.style.setProperty('--mouse-x', x + "px");
//     button.style.setProperty('--mouse-y', y + "px");
// });