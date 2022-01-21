import Movies from '../components/Movies';
import MovieCard from '../components/MovieCard';
import { useSelector } from 'react-redux';


function PageFavs() {
    const favs = useSelector((state) => state.favs.items);

    return (
        <>
        <section className="favs-page">
            <h2>Favs Page...</h2>
        </section>



        <section className="home-page">
            <Movies moviesData={favs} isFav={true}/>
        </section>

        </>
    )
  
}
export default PageFavs;

