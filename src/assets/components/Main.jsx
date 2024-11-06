import React, { useEffect, useState } from 'react'

const Main = () => {

    const search = async (city) => {
        try {
            const apiKey = "ce8f7a737cba13ad56bf84757b8a8bb0"
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        } catch (error) {

        }


    }

    useEffect(() => {
        search("London")
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

        </div>
    )
}

export default Main
