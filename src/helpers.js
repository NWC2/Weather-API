import imgClear from "./img/weather-icons/clear.svg";
import imgDrizzle from "./img/weather-icons/drizzle.svg";
import imgFog from "./img/weather-icons/fog.svg";
import imgMostlyCloudy from "./img/weather-icons/mostlycloudy.svg";
import imgPartlyCloudy from "./img/weather-icons/partlycloudy.svg";
import imgRain from "./img/weather-icons/rain.svg";
import imgSnow from "./img/weather-icons/snow.svg";
import imgStorm from "./img/weather-icons/storm.svg";
import imgUnknow from "./img/weather-icons/unknown.svg";

export const findWeatherImage = (id) => {
  switch (true) {
    case id < 300:
      return imgStorm;
    case id < 500:
      return imgDrizzle;
    case id < 600:
      return imgRain;
    case id < 700:
      return imgSnow;
    case id < 800:
      return imgFog;
    case id === 800:
      return imgClear;
    case id === 801:
      return imgPartlyCloudy;
    case id < 805:
      return imgMostlyCloudy;
    default:
      return imgUnknow;
  }
};

export const convertToKelvin = (x) => Math.round(x + 274.14);

// export const findWeatherState = (state) => {
//   switch (state) {
//     case id < 800:
//       return "Rain";
//     case id === 800:
//       return "Clear";
//     case id > 800:
//       return "Cloud";
//     default:
//       return "Cloud";
//   }
// };
