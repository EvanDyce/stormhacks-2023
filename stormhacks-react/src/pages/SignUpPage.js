import Card from '../components/signupprompt/Card';
import classes from './SignUpPage.module.css';

function SignUpPage() {
    return (
        <body>
		<Card>
			<header className={classes.logo}>Create an Account</header>
			
			<form method='post' action='registerCheck.php'>
				<div className={classes.regulartext}>
                    <text>First Name</text>
                </div>
				<input className={classes.input} type='text' name='txtFirstName' required=''/><br /><br />
				<div className={classes.regulartext}>
                    <text>Last Name</text>
                </div>
				<input className={classes.input} type='text' name='txtLastName' required=''/><br /><br />
				<div className={classes.regulartext}>
                    <text>Birthday</text>
                </div>
				<input className={classes.datebirthday} type='date' name='dateBirthday' required='' value='datBirthday'/><br /><br />
				<div className={classes.regulartext}>
                    <text>Username</text>
                </div>
				<input className={classes.input} type='text' name='txtUsername' required=''/><br /><br />
				<div className={classes.regulartext}>
                    <text>Password</text>
                </div>
				<input className={classes.input} type='password' name='Password' required=''/><br /><br />
				<div className={classes.actions}>
                    <button>Sign Up</button>
                </div>
			</form>
		</Card>
	</body>);
}

export default SignUpPage;