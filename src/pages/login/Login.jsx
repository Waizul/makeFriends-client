import './login.css';
const Login = () => {
	return (
		<div className='login'>
			<div className='login-wrapper'>
				<div className='login-left'>
					<h3 className='login-logo'>Make Friend</h3>
					<span className='login-desc'>
						Make friends all around the world.
					</span>
				</div>
				<div className='login-right'>
					<div className='login-box'>
						<input placeholder='Email' className='login-input' />
						<input placeholder='Password' className='login-input' />
						<button className='login-button'>Log In</button>
						<span className='login-forgot'>Forgot Password?</span>
						<button className='login-register-button'>
							Create a New Account
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
