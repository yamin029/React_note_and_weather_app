// 50b27cbc64e45b62e534501aa417ec31
// api.openweathermap.org/data/2.5/weather?q=dhaka&appid=50b27cbc64e45b62e534501aa417ec31

import React, { useState, useEffect } from 'react'
import './style.css'
import WeatherCard from './WeatherCard';

const Temp = () => {
    const [searchValue, setSearchValue] = useState("Dhaka");
    const [tempInfo, setTempInfo] = useState({});

    const getWeatherInfo= async ()=>{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=50b27cbc64e45b62e534501aa417ec31`;
            let res = await fetch(url);
            let data = await res.json();
            const { temp, humidity, pressure } = data.main;
            const {main: weatherMood} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;
            // console.log(sunset);
            const myWeatherInfo = {
                temp,
                humidity,
                pressure,
                weatherMood,
                name,
                speed,
                country,
                sunset,
            };

            setTempInfo(myWeatherInfo);
        } catch (error) {
            console.log(error);
        }
    };
// eslint-disable-next-line
    useEffect(() => {
        getWeatherInfo();
    },// eslint-disable-next-line
     []);

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input
                        type="search"
                        placeholder="search .."
                        autoFocus id="search"
                        className="searchTerm" 
                        value={searchValue}
                        onChange={(e)=>{
                            setSearchValue(e.target.value);
                        }} />
                    <button className="searchButton" type="button" onClick={getWeatherInfo}> Search </button>
                </div>
            </div>
            {/* out temp card */}
            <WeatherCard tempInfo = {tempInfo}></WeatherCard>
        </>
    )
}

export default Temp
