import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import FavButton from '../components/FavButton';
import {  useDispatch } from 'react-redux';
import { addFav, deleteFav } from '../features/favs/favsSlice';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function MovieCard({ movie, isFav }) {
    
    const [movieFav, setMovieFav] = useState(isFav);


    const favs = useSelector((state) => state.favs.items);// what is this? never seen before//

    useEffect(() => {
        if(isFav !== true){
            
            const indexOfFoundMovie = favs.findIndex(item => item.id === movie.id);

            if(indexOfFoundMovie !== -1){
                setMovieFav(true);
            }

        }
    }, [])

    const dispatch = useDispatch();

    function handleFavClick(addToFav, movie){
        if(addToFav === true){
            dispatch(addFav(movie));
            setMovieFav(true);
            
        }else{
            dispatch(deleteFav(movie));
            setMovieFav(false);
        }   
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                {movie.poster_path === null ? 
                    <img src={noPoster} alt="No poster available." /> : 
                    <img key={movie.id} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                }    
            </div>
            <h3>{movie.title}</h3>
                <div className="rate-date">
                    <p>⭐{movie.vote_average}</p>
                    <p> {movie.release_date}</p>
                </div>
            <div className="movie-info">
                <div className="overview">
                        <p>{movie.overview}</p>
                </div>
                <div className="more-info">
                    <Link to={`/movie/${movie.id}` }>More Info</Link>
                </div>
            </div>
            <div className="btn-favourite">
                {movieFav ? 
                    <FavButton movie={movie} remove={true} handleFavClick={handleFavClick} /> : 
                    <FavButton movie={movie} handleFavClick={handleFavClick} />
                }
            </div>
        </div>
    )
}

export default MovieCard; 

