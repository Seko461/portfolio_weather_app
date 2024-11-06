import React, { useEffect, useState } from 'react'

const Main = () => {

    const search = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${import.meta.env.apiKey}`
        } catch (error) {

        }
    }

    return (
        <div>
            <form action="" method="get">
                <input
                    type="text"
                    value={inputValue} onChange={handleInputChange}
                    name='city'
                    placeholder='type a city'
                />
                <input type="submit" value="submit" />
            </form>

        </div>
    )
}

export default Main
