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
            <button onClick={handleAddFav}>Add To Favs</button> : 
            <button onClick={handleRemoveFav}>Remove From Favs</button>}
        </>
    );
    
}

FavButton.defaultProps = {
    remove: false
}

export default FavButton;
