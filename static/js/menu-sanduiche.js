const btnFecharModal = document.querySelector(".fechar-nav-button");
const navMobile = document.querySelector(".menu-sanduiche-container ul");
const abrirModal = document.querySelector(".menu-sanduiche-container img");
const modalShadow = document.querySelector(".modal-shadow");

//Fechar navbar mobile
btnFecharModal.addEventListener("click", () => {
    navMobile.style.display = "none";
    modalShadow.style.display = "none"
})

//Abrir navbar mobile
abrirModal.addEventListener("click", () => {
    navMobile.style.display = "flex";
    modalShadow.style.display = "block"
})