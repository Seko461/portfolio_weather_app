import React, { useEffect, useState } from 'react'

const Main = () => {

    const [weatherData, setWeatherData] = useState(false);



    const search = async (city) => {
        try {
            const apiKey = "ce8f7a737cba13ad56bf84757b8a8bb0"
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            })
        } catch (error) {
            console.log(error.message);
        }


    }

    useEffect(() => {
        search("Modica")
    }, [])
    return (
        <div>
            <form action="" method="get">
                <input
                    type="text"

                    placeholder='type a city'
                />
                <input type="submit" value="submit" />
            </form>
            <div>humidity: {weatherData.humidity}</div>
            <div>windSpeed: {weatherData.windSpeed}</div>
            <div>temp: {weatherData.temperature}</div>
            <div>location: {weatherData.location}</div>

        </div>
    )
}

export default Main
