const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1, // Default untuk mobile
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 3, // Menampilkan 3 card pada ukuran laptop
      spaceBetween: 30,
    },
  },
});

 document.getElementById('menu-button').addEventListener('click', function () {
   var menu = document.getElementById('menu');
   if (menu.classList.contains('hidden')) {
     menu.classList.remove('hidden');
     menu.classList.add('slide-down');
   } else {
     menu.classList.add('hidden');
     menu.classList.remove('slide-down');
   }
 });

 // Close the menu when clicking outside of it
 window.addEventListener('click', function (event) {
   var menu = document.getElementById('menu');
   var menuButton = document.getElementById('menu-button');
   if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
     menu.classList.add('hidden');
     menu.classList.remove('slide-down');
   }
 });

   AOS.init();