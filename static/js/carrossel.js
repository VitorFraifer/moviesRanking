addEventListener("DOMContentLoaded", () => {
  genreRows = document.querySelectorAll(".category-row");

});

let deslocation = 0;

function slideSection(button){
  if(button.classList.contains("carrossel-left-button")){
    console.log("botao esquerdo")
    const container = button.closest('section').querySelector('.movies-cards-container');
    container.style.transform = `translateX(${deslocation + 22.5}vw)`;
    deslocation = deslocation + 22.5;
    console.log("Deslocation: ", deslocation)
  }
  else{
    console.log("Botao direito")
    const container = button.closest('section').querySelector('.movies-cards-container');
    container.style.transform = `translateX(${deslocation - 22.5}vw)`;
    deslocation = deslocation - 22.5;
    console.log("Deslocation: ", deslocation)
  }
}

