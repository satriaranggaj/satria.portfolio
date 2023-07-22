const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav#navbar .nav-link');
const bucon = document.querySelector('.button-contact');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
    bucon.classList.toggle('bucon-mobile');
});

window.onscroll = function(){
    document.getElementById('navbar').style.boxShadow = '0px 3px 20px -10px black';

    const navbarTop = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset === 0) {
          navbarTop.style.boxShadow = 'none'; // Mengubah properti CSS saat scroll ke atas
        }
      });
};



