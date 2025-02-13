const moviesCardsContainer = document.querySelector(".movies-cards-container");

const API_KEY = "c25121898fe63b4eba4f1b1cdf23babf";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjUxMjE4OThmZTYzYjRlYmE0ZjFiMWNkZjIzYmFiZiIsIm5iZiI6MTczOTIzODU1NS43NDMsInN1YiI6IjY3YWFhYzliNTE4NDA4YWJmOGJiMTlmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ri7OK4b1WQZhKq4fWx8cV5h8pGgDqNiGrmFU5YDqMw4'
    }
  };
  
  fetch('https://api.themoviedb.org/3/trending/movie/week', options)
    .then(res => res.json())
    .then(data => {
      console.log("Trending:");
        data.results.forEach((film) => {

          fetch(`https://api.themoviedb.org/3/movie/${film.id}/watch/providers`, options)
            .then(res => res.json())
            .then(data => {
              const providers = data.results[country].flatrate;
              providers.forEach((provider) => {
                if(provider){
                  console.log("Streaming: ", provider.provider_name, "Filme: ", film.title);
                  filmCard = document.createElement("div");
                  filmCard.classList.add("movie-card");
                  filmCard.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500${film.poster_path}">
                    <h2 class="movie-title">${film.title}</h2>
                    <p>${provider.provider_name}</p>
                  `
                  moviesCardsContainer.appendChild(filmCard);
                }
                else{
                  console.log("o Filme: ", film.title, "Não está disponível em serviço de streaming")
                }
              })
            })
            .catch(err => console.error(err));
          
        });

        const btnLeftCarrossel = document.querySelector(".carrossel-left-button");
        const btnRightCarrossel = document.querySelector(".carrossel-right-button");
        const carrosselContainer = document.querySelector(".movies-cards-container");

        setTimeout(3000);

        const movieCards = document.querySelectorAll(".movie-card");

        let sliderTranslation = 0;

        numberOfMovies = movieCards.length;

        console.log(numberOfMovies);


    })
    .catch(err => console.error(err));

  


  const movieId = 550; // Exemplo: Clube da Luta
  const country = "BR"; // Definir o país para obter os serviços disponíveis
  
  fetch(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers`, options)
    .then(res => res.json())
    .then(data => {
      const providers = data.results[country].flatrate;
      providers.forEach((provider) => {
        console.log(provider.provider_name)
      })
    })
    .catch(err => console.error(err));