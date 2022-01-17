import { useContext, useRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress'
import { loginCall } from '../../apiCalls';
import './login.css';
import useAuth from '../../hooks/useAuth'
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
	const email = useRef()
	const password = useRef()
const {user,isFetching,error,dispatch} = useContext(AuthContext)
console.log(user,isFetching)

	const handleLogin = e => {
		e.preventDefault()
		loginCall({email:email.current.value,password:password.current.value},dispatch)
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
						<button type='submit' className='login-button' disabled={isFetching}>{isFetching? <CircularProgress color='inherit'/>:'Log In'}</button>
						<span className='login-forgot'>Forgot Password?</span>
					<Link to='/register'>

						<button className='login-register-button'>
						{isFetching?<CircularProgress color='inherit' />:'Create a New Account'}    
						</button>
					</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
