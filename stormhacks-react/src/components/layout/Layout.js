import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props) {
    return <div>
        <MainNavigation></MainNavigation>
        <main className={classes.main}>
            {props.children}
        </main>
        <footer>
            <p>MateRate</p>
        </footer>
    </div>
}

export default Layout;