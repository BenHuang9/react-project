import { useEffect, useState } from 'react';
import NavSort from '../components/NavSort';
import Movies from '../components/Movies';
import { API_TOKEN } from '../globals/globals';

function PageHome({ sort }) {

    const [moviesData, setMoviesData] = useState(null);

    useEffect(() => {
//async function assure the function is going in order top down, the line of code is not running if the line above is not finished//
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?language=en-US&page=1`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                  }
            });
            const moviesData = await res.json();
            const first12Movies = moviesData.results.splice(0,12); 
            setMoviesData(first12Movies);
          }
      
          fetchMovies();

    }, [sort]);

    return (
        <section className="home-page">
            <NavSort />
            {moviesData !== null && <Movies moviesData={moviesData} />}
        </section>
    )
}

export default PageHome;
