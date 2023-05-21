import {Link} from 'react-router-dom'
import Card from '../components/signupprompt/Card';
import classes from './LoginPage.module.css';

function LogInPage() {
    return (
        <body>
        <Card>
            <header className={classes.logo}>Login</header>
            <br /><br />
            <form method='post' action='login.php'>
                Username<br />
                <input type='text' name='Username' required=''/><br /><br />
                Password<br />
                <input type='password' name='Password' required=''/><br /><br />
                <input type='submit' value='Log In' />
            </form>
        </Card>
        <Card>
            <Link className={classes.linkbutton} to='/signup'>Create an account</Link>
        </Card>
	</body>
);
}

export default LogInPage;