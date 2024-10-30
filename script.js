    // ========== HEADER ==========
    // ====== Header Variables  ======
    const navClose = document.getElementById('nav-close');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navShadow = document.getElementById('nav-shadow');
    const navLink = document.querySelectorAll('.nav_link');
    
    // // ====== Header Actions =====
    if(navToggle){
        navToggle.addEventListener('click', ()=>{
            navMenu.style.right = '0px';
            navToggle.style.display = 'none';
        })
    }
    if(navClose){
        navClose.addEventListener('click', ()=>{
            navMenu.style.right = '-120%';
            navToggle.style.display = '';

        })
    };

    const linkAction = () => {
        navMenu.style.right = '-120%';
        navToggle.style.display = 'none';
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));


// ========== BODY ==========
    // ========== Banner   ==========
    const bannerWrapper = document.querySelector('.banner_wrapper');

    const bannerContent = document.querySelector('.banner_content');
    const numberOfDivs = 3;

    for(let i = 0; i< 2; i++){
    const cloneBanner = bannerContent.cloneNode(true);
    bannerWrapper.appendChild(cloneBanner);

}
    

    // ==========Carousel Swiper  ==========
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 5000,
            speed: 1000,
            spaceBetween: 200,
          }
      });