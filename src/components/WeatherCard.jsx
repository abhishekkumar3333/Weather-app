import React from 'react';

const WeatherCard = ({ data }) => {
    if (!data) return null;

    const date = new Date(data.dt * 1000).toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <div className="weather-main-card">
            <div className="weather-top">
                <div className="weather-icon">
                    <img
                        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        alt={data.weather[0].description}
                    />
                </div>
                <div className="weather-info">
                    <h2 className="weather-condition">{data.weather[0].main}</h2>
                    <p className="weather-date">{date}</p>
                    <h1 className="weather-temp">{Math.round(data.main.temp)}°</h1>
                </div>
            </div>

            <div className="weather-forecast-preview">
                <div className="forecast-card">
                    <img src="https://openweathermap.org/img/wn/03d@2x.png" alt="Cloudy" />
                    <p>25%</p>
                    <p>Cloudy</p>
                </div>
                <div className="forecast-card">
                    <img src="https://openweathermap.org/img/wn/11d@2x.png" alt="Wind" />
                    <p>65%</p>
                    <p>Wind</p>
                </div>
                <div className="forecast-card">
                    <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="Sunny" />
                    <p>10%</p>
                    <p>Sunny</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
