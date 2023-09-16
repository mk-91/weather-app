const container = document.querySelector('.cointeiner');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
  const APIKey = '8c4fa2dc0e67c7b542222613594a8d7e';
  const city = document.querySelector('.search-box input').value;

  if (city === '') return;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  );
});
