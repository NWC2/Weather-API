import imgClear from "./img/weather-icons/clear.svg";
import imgDrizzle from "./img/weather-icons/drizzle.svg";
import imgFog from "./img/weather-icons/fog.svg";
import imgMostlyCloudy from "./img/weather-icons/mostlycloudy.svg";
import imgPartlyCloudy from "./img/weather-icons/partlycloudy.svg";
import imgRain from "./img/weather-icons/rain.svg";
import imgSnow from "./img/weather-icons/snow.svg";
import imgStorm from "./img/weather-icons/storm.svg";
import imgUnknow from "./img/weather-icons/unknown.svg";

export const findImage = (ID) => {
  switch (true) {
    case ID < 300:
      return imgStorm;
    case ID < 500:
      return imgDrizzle;
    case ID < 600:
      return imgRain;
    case ID < 700:
      return imgSnow;
    case ID < 800:
      return imgFog;
    case ID === 800:
      return imgClear;
    case ID === 801:
      return imgPartlyCloudy;
    case ID < 805:
      return imgMostlyCloudy;
    default:
      return imgUnknow;
  }
};

export const convertToKelvin = (x) => Math.round(x + 274.14);
