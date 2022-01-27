import logo from '../images/tmdbLogo.svg'

function PageAbout() {
    return (
        <section className="about-page">
            <h2>About</h2>
            <p>Movie Time is a website for users to browser movies base on new release, popular, upcoming, and now playing movie. Feel free to click the little heart to add your favourite movie to you favourite movie collection.</p>
            <img src={logo} alt="tmdbLogo" className='tmdblogo'/>
            <p>This product uses the TMDb API but is not endorsed or certified by TMDb.certified by TMDb.</p>
        </section>
    )
}

export default PageAbout;
