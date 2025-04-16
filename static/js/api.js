const moviesCardsContainer = document.querySelector(".movies-cards-container");
const mainContainer = document.querySelector("main")

const API_KEY = "c25121898fe63b4eba4f1b1cdf23babf";
const country = "BR"; // Definir o país para obter os serviços disponíveis

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjUxMjE4OThmZTYzYjRlYmE0ZjFiMWNkZjIzYmFiZiIsIm5iZiI6MTczOTIzODU1NS43NDMsInN1YiI6IjY3YWFhYzliNTE4NDA4YWJmOGJiMTlmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ri7OK4b1WQZhKq4fWx8cV5h8pGgDqNiGrmFU5YDqMw4'
    }
  };

  //Endpoint que retorna todos os generos de filmes existentes
fetch("https://api.themoviedb.org/3/genre/movie/list", options)
.then(res => res.json())
.then(data => {
  const listOfGenres = data.genres;
  //Criando uma section para cada genero existente, nessa section serão renderizados os filmes daquele genero
  listOfGenres.forEach((genre) => {
    console.log("genero: ", genre.name)
    const genreRow = document.createElement("section");
    genreRow.classList.add(genre.name.replace(/\s+/g, "-").toLowerCase());
    genreRow.classList.add(genre.id);
    genreRow.classList.add("category-row");
    genreRow.id = genre.id
    genreRow.innerHTML = `
      <h1>${genre.name}</h1>

  <div class="swiper mySwiper">
    <div class="swiper-wrapper movies-cards-container">
        <!-- Aqui serão adicionados os cards via JS -->
    </div>

    <!-- Botões de navegação dentro da section/swiper -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
    `
    console.log("div do genero: ", genreRow);
    mainContainer.appendChild(genreRow)
  })

  generateMovies(); //Adicionando os filmes dentro das sections de seus respectivos generos
  
})

  const totalPagesOfFilms = 15; // A API retorna 20 filmes por página. Visto que de todos os filmes, só serão retornados os que são disponibilizados em serviço de stream, pedi 15 páginas para totalizar um número satisfatório de filmes pra aplicação

  function generateMovies(){
    for (let page = 0; page < totalPagesOfFilms; page++) {
      fetch(`https://api.themoviedb.org/3/trending/movie/week?page=${page}`, options) //Endpoint dos filmes mais vistos da ultima semana
      .then(res => res.json())
      .then(data => {
        console.log("DADOS API",data)
          data.results.forEach((film) => {
  
            fetch(`https://api.themoviedb.org/3/movie/${film.id}/watch/providers`, options) //Endpoint Serviços de Streaming
              .then(res => res.json())
              .then(data => {
                const providers = data.results[country].flatrate;
                let streamingsNames = [];
                let streamingsLogo = [];
  
                providers.forEach((provider) => {
                  if(provider){
                    console.log(provider.provider_name)
                    streamingsNames.push(provider.provider_name)
                    streamingsLogo.push(`https://image.tmdb.org/t/p/w500${provider.logo_path}`);
                  }
                })
  
                let filmCard = document.createElement("div");
                filmCard.classList.add("movie-card");
                filmCard.classList.add("swiper-slide");
                filmCard.innerHTML = `
                  <img src="https://image.tmdb.org/t/p/w500${film.poster_path}" loading="lazy">
                  <h2 class="movie-title">${film.title}</h2>
                  <div class="streaming-services">
                    ${streamingsLogo.map((logo) => `<img src="${logo}" class="streaming-logo">`).join("")}
                  </div>
                `
                film.genre_ids.forEach((genreID) => {
                  let filmCard = document.createElement("div");
                  filmCard.classList.add("movie-card");
                  filmCard.classList.add("swiper-slide");
                  filmCard.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500${film.poster_path}" loading="lazy">
                    <h2 class="movie-title">${film.title}</h2>
                    <div class="streaming-services">
                      ${streamingsLogo.map((logo) => `<img src="${logo}" class="streaming-logo">`).join("")}
                    </div>
                  `
                  const secaoGenero = document.getElementById(`${genreID}`);
                  secaoGenero.querySelector(".movies-cards-container").appendChild(filmCard)
                })
                moviesCardsContainer.appendChild(filmCard);
  
                
  
               
              })
              .catch(err => console.error(err));
          });
  
          const btnLeftCarrossel = document.querySelector(".carrossel-left-button");
          const btnRightCarrossel = document.querySelector(".carrossel-right-button");
          const carrosselContainer = document.querySelector(".movies-cards-container");
  
          const movieCards = document.querySelectorAll(".movie-card");
  
          let sliderTranslation = 0;
  
          numberOfMovies = movieCards.length;
  
          console.log(numberOfMovies);
  
  
      })
      .catch(err => console.error(err));
    }
   
  }

  function hideEmptySections(){ // As seções que não possuirem filmes não serão exibidas
    const allSections = document.querySelectorAll("section");

    allSections.forEach((section) => {
      const filmRow = section.querySelector(".movies-cards-container");
      if(filmRow.childElementCount == 0){
        section.style.display = "none";
      }
    })
  }

  //Calling the function to hide empty section as soon as the page content loads
  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(hideEmptySections, 3000)
  })
  


  


