import React, { useContext } from 'react'
import MovieContext from '../../contexts/MovieContext'


const DetailsOfTheMovie = () => {

    const value = useContext(MovieContext);
    const { details } = value;

    return (
        <div className="container">

            {details.map(movieDetails => {
                const { poster_path, title, vote_average, release_date } = movieDetails
                return <div className="movie">
                    <img className="movie__img" src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={`picture: ${title}`} />
                    <h2 className="movie__h2">title: {title}</h2>
                    <h2 className="movie__h2">rating: {vote_average}</h2>
                    <h2 className="movie__h2">release date: {release_date}</h2>
                </div>
            })}
        </div>

    )
}

export default DetailsOfTheMovie


