import classes from './HomePage.module.css';
// import BackgroundCloud from './BackgroundCloud.png'

import { useNavigate } from "react-router-dom";

function HomePage() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `login`; 
        navigate(path);
    }

    return (
        <section>
            {/* <img className={classes.image} src={BackgroundCloud}></img> */}
            <header className={classes.logo}>Real people.</header>
            <header className={classes.logo2}>Real reviews of those people.</header>
            <div className={classes.actions} onClick={routeChange}>
                <button>Sign Up / Log In</button>
            </div>
        </section>);
}

export default HomePage;