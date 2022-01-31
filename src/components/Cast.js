function Cast ({ movie }){


    const first10CastMembers = movie.credits.cast.slice(0,10);


    
        return(
            <>
            { first10CastMembers.map((cast, i) => <div key={i} className="cast-card">
                <img src = {`https://www.themoviedb.org/t/p/w276_and_h350_face/${cast.profile_path}`} alt = {cast.name} />
                <h3>{`${cast.name}`}</h3>
                <p>{`${cast.character}`}</p>
            </div>)}
            </>
        );


}

export default Cast; 