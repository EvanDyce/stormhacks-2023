import {Link} from 'react-router-dom'

import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>MateRate</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/ratings'>Ratings</Link>
                    </li>
                    <li>
                        <Link to='/archive'>Archive</Link>
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