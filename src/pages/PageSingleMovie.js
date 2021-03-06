import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_KEY, appStorageName} from '../globals/globals';
import noPoster from '../images/no-movie-poster.jpg';
import Popup from '../components/Popup';
import Cast from '../components/Cast';
import tag from '../images/tag.svg';
import fav from "../images/favorite.svg";

//if the fav movie in storage is null set the list to be empty array else do a super list of stringify objets//
function getFavs(){
    let favsFromStorage = localStorage.getItem(appStorageName);
    if(favsFromStorage === null){
        favsFromStorage = [];
    }else{
        favsFromStorage = JSON.parse(favsFromStorage);
    }
    return favsFromStorage;
  }



function PageSingleMovie() {

    const { id } = useParams();
    const [ movie,setMovie ] = useState(null);
    const [ playTrailer,setPlayTrailer ] = useState(false);
    const [ movieFav, setMovieFav ] = useState(false)
    let trailerKey = "";
    let movieDirector = "";

    

    useEffect(() => {
        const getMovie = async () => {
            const res =await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`);
            const moviesDataFromAPI = await res.json();
            

            setMovie(moviesDataFromAPI); 
            // search the local storage and check if there is an stored fav movie have the same id as current movie, if yes get the index of that item (should be only 0 if faved or -1 is not fav)//
            const favs = getFavs();// why is it possible to sign a constant to be a function ?//
            const indexOfFoundMovie = favs.findIndex(item => item.id === moviesDataFromAPI.id);

            if(indexOfFoundMovie !== -1){
                setMovieFav(true);
            }
            
        }

        getMovie();
    

    }, [id]);



    if(movie){
        const filteredArray = movie.videos.results.filter(function(itm){
        return itm.type === "Trailer";

    });
        const director = movie.credits.crew.filter(function(itm){
        return itm.job === "Director";
    });
    trailerKey = filteredArray[0].key;
    movieDirector = director[0].name;
    console.log(movie);
    }



    return (
        <>
        {movie !== null &&
        <>
        <section className="single-movie-header">

            <div className="movie-poster">
                {movie.poster_path == null ?
                    <img src = {noPoster} alt="No poster available." /> :
                    <img src = {`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt = {movie.title} />}
                
            </div>
            
            <div >                   
                <h2>{movie.title} ({movie.release_date.substring(0,4)})</h2>
                <div className = 'tags'>
                <embed src={tag} />
                    {movie.genres.map((tag, i) => <div key={i} className = "tag"> {tag.name}</div>)}
                    
                </div>
                
                <ul className="user-score">    
                    <li className="star"> 
                        <div>???</div>
                        <div>{movie.vote_average}/10 </div>

                    </li>
                    <li>{movie.release_date} ({movie.production_countries[0].iso_3166_1})</li>
                    <li><button className = "trailer-btn" onClick = {()=> setPlayTrailer(true)}><span className = "triangle"> </span>Trailer</button></li>
                     
                    {movieFav ? 
                    <li><p>Favourite</p><img src={fav} alt ="A hollow heart"/></li>: 
                    <p/> 
                    }

                    
                    
                </ul>
            <Popup trigger={playTrailer} setTrigger={setPlayTrailer}>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailerKey}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Popup>
                    
            
            <section className = "movie-info">
                <div className="overview">
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                </div>
                <div className="stats">
                    <div>
                        <h3>Director</h3>
                        <p>{`${movieDirector}`}</p> 
                    </div>  
                    <div>
                        <h3>Budget</h3>
                        <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(movie.budget)}</p>
                    </div>
                    <div>
                        <h3>Revenue</h3>
                        <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(movie.revenue)}</p>
                    </div>
                 
                </div>


            </section>
            </div>
            
        </section>

        <h2 id = "top-cast">Top Billed Casts</h2>
        <section className = "casts-box">
            <div className = "casts">

                <Cast movie={movie}/>

            </div>
        </section>
        </>
        }
        </>
        
    )
}


export default PageSingleMovie;

