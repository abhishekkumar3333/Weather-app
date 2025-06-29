import axios from "axios";
import { config } from "../config";


export const fetchWeather = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.API_KEY}&units=metric`
  );
  return response.data;
};
