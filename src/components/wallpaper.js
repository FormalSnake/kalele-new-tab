import apiKeys from "../apikeys.json";

function getDailyWallpaper() {
  return fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKeys.wallpapers}`
  )
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.title);
      document.body.style.backgroundImage = `url(${responseJson.hdurl})`;

      return responseJson.hdurl, responseJson.title;
    })
    .catch((error) => {
      console.error(error);
      document.body.style.backgroundImage = `url(./OfflineImages/${Math.round(
        (19 - 1) * Math.random() + 1
      )}.jpg)`;
    });
}

function getDailyWallpaperBing() {
  return fetch(`https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1`)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.images.url);
      document.body.style.backgroundImage = `url(${"http://bing.com"} + ${
        responseJson.images.url
      })`;

      return responseJson.hdurl;
    })
    .catch((error) => {
      console.error(error);
    });
}

function Wallpaper() {
  getDailyWallpaper();
}

export default Wallpaper;
