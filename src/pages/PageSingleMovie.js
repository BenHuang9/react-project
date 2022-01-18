import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_KEY} from '../globals/globals';
import noPoster from '../images/no-movie-poster.jpg';


function PageSingleMovie() {

    const { id } = useParams();
    const [ movie,setMovie ] = useState(null);
    const trailerKey ="";

    useEffect(() => {
        const getMovie = async () => {
            const res =await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`);
            const moviesDataFromAPI = await res.json();
            

            setMovie(moviesDataFromAPI);    
            
        }

        getMovie();

    }, []);
    if(movie){
        const filteredArray = movie.videos.results.filter(function(itm){
        return itm.type == "Trailer";
    });
    const trailerKey = filteredArray[0].key;
    }


    return (
        <>
        {movie !== null &&
        <><div class="page-single-movie">

                    
            <h2>{movie.title}</h2>
            <p>({movie.release_date.substring(0,4)})</p>
                    
        </div>

        <div className="movie-poster">
                {movie.poster_path == null ?
                    <img src={noPoster} alt="No poster available." /> :
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />}
                
        </div>
        <ul class="user-score">
            <li>User score: {movie.vote_average}/10 </li>
            <li><a href="#" data-site="YouTube" data-id={`${trailerKey}`} data-title="Play Trailer">Play Trailer</a></li>
        </ul>
        <div class="overview">
            <h3>Overview</h3>
            <p>{movie.overview}</p>
        </div>
        <h3>Budget</h3>
        <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(movie.budget)}</p>
        <h3>Revenue</h3>
        <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(movie.revenue)}</p>
        </>
        }
        </>
        
    )
}


export default PageSingleMovie

