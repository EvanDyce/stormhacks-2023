import classes from './HomePage.module.css';

function HomePage() {
    return (
        <section>
            <header className={classes.logo}>Never forget another birthday again.</header>
            <div className={classes.actions}>
                <button>Sign Up / Log In</button>
            </div>
            <footer>
                <p>MateRate</p>
            </footer>
        </section>);
}

export default HomePage;