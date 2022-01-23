import Movies from '../components/Movies';

import { useSelector } from 'react-redux';


function PageFavs() {
    const favs = useSelector((state) => state.favs.items);

    return (
        <>
        <section className="favs-page">
            <h2>My favourite</h2>
        </section>

        <section className="fav-list">
        {favs == null?
            
            <Movies moviesData={favs} isFav={true}/>:
            <><p>You don't have any favourite movie yet. You can simply click the heart button to add movie to my favourite list.  </p>
            <p><a href='/PageHome.js'>click here</a> to go back to home page.</p>
            </>
             

        }
        </section>
        

        </>
    )
  
}
export default PageFavs;

