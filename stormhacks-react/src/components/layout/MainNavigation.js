import {Link} from 'react-router-dom'

import logo from './logo.png'
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <img className={classes.image} src={logo}></img>
            <div className={classes.logo}>MateRate</div>
            <div className={classes.logoinvis}>hello secret muaha</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/ratings'>Ratings</Link>
                    </li>
                    <li>
                        <Link to='/archive'>New Rating</Link>
                    </li>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;