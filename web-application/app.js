const apiKey = 'your_api_key_here';
const searchForm = document.querySelector('#search-form');
const movieTitleInput = document.querySelector('#movie-title');
const movieDetailsContainer = document.querySelector('#movie-details');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const movieTitle = movieTitleInput.value;
  const url = `https://www.omdbapi.com/?i=tt3896198&apikey=8a9fa8c`;

  try {
    const response = await fetch(url);
    const movieData = await response.json();

    const titleElement = document.createElement('h2');
    titleElement.textContent = movieData.Title;
    const posterElement = document.createElement('img');
    posterElement.src = movieData.Poster;
    const plotElement = document.createElement('p');
    plotElement.textContent = movieData.Plot;

    movieDetailsContainer.innerHTML = '';

    movieDetailsContainer.appendChild(titleElement);
    movieDetailsContainer.appendChild(posterElement);
    movieDetailsContainer.appendChild(plotElement);
  } catch (error) {
    console.log(error);
  }
});
