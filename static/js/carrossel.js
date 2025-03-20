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
  // Seleciona todas as instâncias de Swiper
const swipers = document.querySelectorAll('.mySwiper');

// Para cada container, cria um Swiper individual
swipers.forEach((swiperContainer) => {
  new Swiper(swiperContainer, {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,
    slidesPerGroup: 1,

    navigation: {
      nextEl: swiperContainer.querySelector('.swiper-button-next'),
      prevEl: swiperContainer.querySelector('.swiper-button-prev'),
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 4,
      }
    }
  });
});
 
}, 3000)


