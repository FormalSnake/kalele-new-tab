import apiKeys from "../apikeys.json";

function getDailyWallpaper() {
  return fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKeys.wallpapers}`
  )
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.hdurl);
      document.body.style.backgroundImage = `url(${responseJson.hdurl})`;

      return responseJson.hdurl;
    })
    .catch((error) => {
      console.error(error);
    });
}

function Nasa() {
  getDailyWallpaper();
}

export default Nasa;
