import classes from './HomePage.module.css';
// import BackgroundCloud from './BackgroundCloud.png'

function HomePage() {
    return (
        <section>
            {/* <img className={classes.image} src={BackgroundCloud}></img> */}
            <header className={classes.logo}>Real people.</header>
            <header className={classes.logo2}>Real reviews of those people.</header>
            <div className={classes.actions}>
                <button>Sign Up / Log In</button>
            </div>
        </section>);
}

export default HomePage;