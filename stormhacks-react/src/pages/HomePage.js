import classes from './HomePage.module.css';
import BackgroundCloud from './BackgroundCloud.png'

function HomePage() {
    return (
        <section>
            <img className={classes.image} src={BackgroundCloud}></img>
            <header className={classes.logo}>Never forget another birthday again.</header>
            <div className={classes.actions}>
                <button>Sign Up / Log In</button>
            </div>
        </section>);
}

export default HomePage;