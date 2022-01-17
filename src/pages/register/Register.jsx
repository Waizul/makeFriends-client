import { Link } from "react-router-dom";
import {useRef} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Register = () => {
const username = useRef()
const email = useRef()
const password = useRef()
const passwordAgain = useRef()
const navigate = useNavigate()
const handleRegister=async(e)=>{
	e.preventDefault()
	console.log(password.current.value,passwordAgain.current.value)
	if(password.current.value!==passwordAgain.current.value){
		passwordAgain.current.setCustomValidity('Passwords do not match')
	} else {
		const user = {
			username:username.current.value,
			email:email.current.value,
			password: password.current.value
		}
		try {
			await axios.post(`http://localhost:1000/api/auth/register`,user)
			navigate('/login')
			console.log(user)
		} catch (error) {
			console.log(error)
		}
	}
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
					<form onSubmit={handleRegister} className='login-box'>
						<input placeholder='Username' ref={username} className='login-input' />
						<input type='email' placeholder='Email'ref={email} className='login-input' />
						<input type='password'placeholder='Password'ref={password} className='login-input' />
						<input
						type='password'
							placeholder='Password Again'
							ref={passwordAgain}
							className='login-input'
						/>
						<button className='login-button'>Sign Up</button>
					<Link to='/login'>
					<button className='login-register-button'>
							Log into Account
						</button>
						</Link>	
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
