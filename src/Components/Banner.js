import "./css/Banner.css"
import { useState, useEffect } from "react"
import axios from "../utils/axios"
import requests from "../utils/requests"

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        // Implementing API to grab Banner Photo
        async function fetch() {
            await axios.get(requests.fetchNetflicOriginals)
                .then((res) => setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length) - 1]))
        }

        fetch()
    }, [])

    const truncate = (str, n) => {
        return str?.length > 10 ? str.substring(0, n) + "..." : str;
    }

    return (
        <div className='banner' style={{
            // backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
            backgroundImage: "url('https://images3.alphacoders.com/882/882548.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "440px",
            objectFit: "contain"
        }}>
            <div class="banner__contents">
                <h1 class="banner__title">{movie?.original_name}</h1>
                <div class="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 class="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div class="banner--fadeBottom" />

        </div>
    )
}

export default Banner