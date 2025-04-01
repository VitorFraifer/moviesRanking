// addEventListener("DOMContentLoaded", () => {
//   genreRows = document.querySelectorAll(".category-row");

// });

// let deslocation = 0;

// function slideSection(button){
//   if(button.classList.contains("carrossel-left-button")){
//     console.log("botao esquerdo")
//     const container = button.closest('section').querySelector('.movies-cards-container');
//     container.style.transform = `translateX(${deslocation + 22.5}vw)`;
//     deslocation = deslocation + 22.5;
//     console.log("Deslocation: ", deslocation)
//   }
//   else{
//     console.log("Botao direito")
//     const container = button.closest('section').querySelector('.movies-cards-container');
//     container.style.transform = `translateX(${deslocation - 22.5}vw)`;
//     deslocation = deslocation - 22.5;
//     console.log("Deslocation: ", deslocation)
//   }
// }

setTimeout(() => {
  const swipers = document.querySelectorAll('.mySwiper');

  swipers.forEach((swiperContainer) => {
    new Swiper(swiperContainer, {
      direction: 'horizontal',
      loop: true,
      lazy: true,
      watchSlidesProgress: true,
      spaceBetween: 10,
  
      navigation: {
        nextEl: swiperContainer.querySelector('.swiper-button-next'),
        prevEl: swiperContainer.querySelector('.swiper-button-prev'),
      },
  
      breakpoints: {
        // Mobile: até 500px → 1 slide por vez
        0: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        // Tablets → 2 slides por vez
        501: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        // Desktop → 4 slides por vez
        900: {
          slidesPerView: 4,
          slidesPerGroup: 2,
        },
      },
    });
  });
  
 
}, 3000)


