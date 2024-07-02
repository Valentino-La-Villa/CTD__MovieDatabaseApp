import { useEffect, useState } from 'react'
import './styles/moviesApp.css'

export const MoviesApp = () => {


    const [searchbar, setSearchbar] = useState('')
    const [movieList, setMovieList] = useState([])
    const baseURL = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = import.meta.env.VITE_API_KEY

    const fetchMovies = async () => {
        try {
            const res = await fetch(`${baseURL}?query=${searchbar}&api_key=${API_KEY}`)
            const data = await res.json()
            setMovieList(data.results)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {

    }, [])

    const handleInputChange = (event) => setSearchbar(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchMovies()
    }

    return (
        <main className="container">

            <h1>Movie database</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Look for a movie"
                    value={searchbar}
                    onChange={handleInputChange}
                />

                <button>Search</button>
            </form>

            {movieList &&
                <section className='movieList'>
                    {movieList.map(movie => (
                        <div className='movieCard' key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <h3 className='movieTitle'>{movie.title}</h3>
                            <p className='movieDescription'>{movie.overview}</p>
                        </div>
                    ))}
                </section>
            }


        </main>
    )
}
