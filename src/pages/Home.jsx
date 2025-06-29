import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import { fetchWeather } from '../service/WeatherService';

const Home = () => {
    const [weatherData, setWeatherData] = useState(null);

    const handleSearch = async (city) => {
        try {
            const data = await fetchWeather(city);  // Pass city to API call
            setWeatherData(data);
        } catch (error) {
            alert("City not found. Please try again.");
        }
    };

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <WeatherCard data={weatherData} />
        </>
    );
};

export default Home;
