function SignUpPage() {
    return (
        <body>
		<h1>Forum Registration</h1>
		
		<form method='post' action='registerCheck.php'>
			<h3>Create Your Forum Account</h3>
			First Name<br />
			<input type='text' name='txtFirstName' required=''/><br /><br />
			Last Name<br />
			<input type='text' name='txtLastName' required=''/><br /><br />
			Birthday<br />
			<input type='date' name='dateBirthday' required='' value='datBirthday'/><br /><br />
			Username<br />
			<input type='text' name='txtUsername' required=''/><br /><br />
			Password<br />
			<input type='password' name='Password' required=''/><br /><br />
			<input type='submit' value='Sign Up' />
		</form>
	</body>);
}

export default SignUpPage;