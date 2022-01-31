import fav from "../images/favorite.svg";
import unfav from "../images/unfavorite.svg";
function FavButton({ movie, remove, handleFavClick }) {

    function handleAddFav(){
        handleFavClick(true, movie);
		
    }

    function handleRemoveFav(){
        handleFavClick(false, movie);
    }

    return (
        <>
            {remove === false ? 
            <button className = "fav-btn" onClick={handleAddFav}><img src = {unfav} alt = "Solid heart"/></button> : 
            <button className = "fav-btn" onClick={handleRemoveFav}><img src = {fav} alt = "Empty heart"/></button>}
        </>
    );
    
}

FavButton.defaultProps = {
    remove: false
}

export default FavButton;
