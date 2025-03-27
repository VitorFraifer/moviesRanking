const btnFecharModal = document.querySelector(".fechar-nav-button");
const navMobile = document.querySelector(".menu-sanduiche-container ul");
const abrirModal = document.querySelector(".menu-sanduiche-container img")

//Fechar navbar mobile
btnFecharModal.addEventListener("click", () => {
    navMobile.style.display = "none";
})

abrirModal.addEventListener("click", () => {
    navMobile.style.display = "flex";
})