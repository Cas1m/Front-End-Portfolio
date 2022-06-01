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
 
  
  $('#notify-form').submit(function (event) {
    event.preventDefault();
       $('.notify-form').removeClass('active')
       $('.message-end').addClass('active')
 
       setTimeout( function (event) {
         $('.message-end').removeClass('active')
         $('.btn-send').removeClass('active')
         $('.field input').val("")
       }, 2000)
   })
 
     $('.message:not(.message-end)').click(function (event) {
       $('.notify-form').addClass('active')
       $('.field input').focus()
     })
 
     $('.field input').keyup(function(event) {
 
       if (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(event.target.value)) {
         $('.btn-send').addClass('active')				
       }
       else {
         $('.btn-send').removeClass('active')
       }
     })