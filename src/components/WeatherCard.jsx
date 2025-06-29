import React from 'react';

const WeatherCard = ({ data }) => {
    if (!data) return null;

    return (
        <div className="weather-card">
            <h2 className="city-name">{data.name}, {data.sys.country}</h2>
            <p className="description">{data.weather[0].description}</p>
            <div className="weather-details">
                <p><strong>🌡️ Temperature:</strong> {data.main.temp}°C</p>
                <p><strong>💧 Humidity:</strong> {data.main.humidity}%</p>
                <p><strong>🌬️ Wind Speed:</strong> {data.wind.speed} m/s</p>
            </div>
        </div>
    );
};

export default WeatherCard;
