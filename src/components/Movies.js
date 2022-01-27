import MovieCard from './MovieCard';

function Movies({ moviesData , isFav }) {
    return (
        <div>
        {isFav ?
        <div className="movies-container">
            {moviesData.map(movie => <MovieCard key={movie.id} movie={movie} isFav={true}/>)}
        </div>:
        <div className="movies-container">
            {moviesData.map(movie => {
                return <MovieCard key={movie.id} movie={movie} />
            })}
        </div>
        }
        </div>
    )
}

export default Movies;
