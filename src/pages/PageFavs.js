import Movies from '../components/Movies';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PageFavs() {
    const favs = useSelector((state) => state.favs.items);

    return (
        <>
        <section className="favs-page">
            <h2>My favourite</h2>
        </section>

        <section className="fav-list">
        {favs.length < 1 ?
        <><p>You dont have any favourite muvie yet.</p><p>Return to the <NavLink to='/' exact> Movies</NavLink> page to add some.</p></>:
        <Movies moviesData={favs} isFav={true}/>} 
        </section>
        </>
    )
  
}
export default PageFavs;

