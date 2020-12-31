import React, { useContext } from 'react'
import MovieContext from '../../contexts/MovieContext'



const FavoriteMoviesList = () => {

    const value = useContext(MovieContext);
    const { favorites, removeFavorites } = value;

    return (

        <ul className="container">

            {favorites.map(favorite => {
                const { id, title } = favorite
                return (
                    <li key={id} className="movie">
                        <h2 className="movie__h2">{title}</h2>
                        <button className="movie__btn" onClick={() => removeFavorites(title)}>delete</button>
                    </li>
                )
            })}
        </ul>


    )

}

export default FavoriteMoviesList


