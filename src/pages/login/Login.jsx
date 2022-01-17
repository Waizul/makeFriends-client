import { useRef } from 'react';
import './login.css';
const Login = () => {
	const email = useRef()
	const password = useRef()
	const handleLogin = e => {
		e.preventDefault()
console.log(email.current.value,password.current.value)
	}
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
					<form onSubmit={handleLogin} className='login-box'>
						<input type='email' required placeholder='Email' ref={email} className='login-input' />
						<input type='password' required placeholder='Password' minLength={6} ref={password} className='login-input' />
						<button className='login-button'>Log In</button>
						<span className='login-forgot'>Forgot Password?</span>
						<button className='login-register-button'>
							Create a New Account
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
