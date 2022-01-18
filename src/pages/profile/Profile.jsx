import './profile.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Profile = () => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER
	const [user, setUser] = useState({})
const {username} = useParams()

	useEffect(()=>{
		const fetchUser = async () =>{
			const res = await axios.get(`http://localhost:1000/api/users?username=${username}`)
console.log(res)
setUser(res.data)
}
fetchUser()
	},[username])
	
	return (
		<>
			<Topbar />
			<div className='profile'>
				<Sidebar />
				<div className='profile-right'>
					<div className='profile-right-top'>
						<div className='profile-cover'>
							<img
								className='profile-cover-img'
								src={PF+user.coverPic|| PF + 'person/noCover.png'}
							
								alt=''
							/>
							<img
								className='profile-user-img'
								src={PF+user.profilePic || PF + 'person/noAvatar.png'}
								alt=''
							/>
						</div>
						<div className='profile-info'>
							<h4 className='profile-info-name'>
							{user.username}
							</h4>
							<span className='profile-info-desc'>
								{user.desc}
							</span>
						</div>
					</div>
					<div className='profile-right-bottom'>
						<Feed username={username}/>
						<Rightbar user={user} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
