import {Link} from 'react-router-dom'

function LogInPage() {
    return (
        <body>
		<h1>Forum Login</h1>
		
		<Link to='/signup'>Create an account</Link>
		<br /><br />
		<form method='post' action='login.php'>
			Username<br />
			<input type='text' name='Username' required=''/><br /><br />
			Password<br />
			<input type='password' name='Password' required=''/><br /><br />
			<input type='submit' value='Log In' />
		</form>
	</body>
);
}

export default LogInPage;