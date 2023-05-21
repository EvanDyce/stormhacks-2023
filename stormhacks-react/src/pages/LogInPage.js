import {Link} from 'react-router-dom'
import Card from '../components/signupprompt/Card';
import classes from './LoginPage.module.css';

function LogInPage() {
    return (
        <body>
        <Card>
            <header className={classes.logo}>Login</header>
            {/* <br /><br /> */}
            <form method='post' action='login.php'>
                <div className={classes.regulartext}>
                    <text>Username</text>
                </div>
                <input className={classes.input} type='text' name='Username' required=''/><br /><br />
                <div className={classes.regulartext}>
                    <text>Password</text>
                </div>
                <input className={classes.input} type='password' name='Password' required=''/><br /><br />
                {/* <input type='submit' value='Log In' /> */}
                <div className={classes.actions}>
                    <button>Sign In</button>
                </div>
            </form>
        </Card>
        <Card>
            <text className={classes.regulartext}>New User? </text>
            <Link className={classes.linkbutton} to='/signup'>Create an account</Link>
        </Card>
	</body>
);
}

export default LogInPage;