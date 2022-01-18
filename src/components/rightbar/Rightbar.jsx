import './rightbar.css';
import Online from '../online/Online';
import {AuthContext} from '../../context/AuthContext'
import {Users} from '../../dummyData'
import { useState, useEffect, useContext} from 'react';
import axios from 'axios'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import {Link} from 'react-router-dom'


const Rightbar = ({ user }) => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER
	const [friends, setFriends] = useState([])
	
	const {user:currentUser,dispatch} = useContext(AuthContext)
	
	console.log(user)
const [followed , setFollowed] = useState(currentUser?.followings?.includes(user?.id))

useEffect(()=>{
	const getFriends = async ()=>{
		try {
			const friendList = await axios.get(`http://localhost:1000/api/users/friends/${user._id}`)
			setFriends(friendList.data)
		} catch (error) {
		 console.log(error)
		}
	}
	getFriends()
},[user])

const handleFollow = async()=>{
try {
	if(followed){
		await axios.put(`http://localhost:1000/api/users/${user._id}/unfollow`,{
			userId:currentUser._id
		})
		dispatch({type: 'UNFOLLOW',payload:user._id})
	}
	else{
		await axios.put(`http://localhost:1000/api/users/${user._id}/follow`,{
			userId:currentUser._id
		})
		dispatch({type: 'FOLLOW',payload:user._id})
	}
	setFollowed(!followed)
} catch (error) {
	console.log(error)
}
}


const HomeRightbar = () => {
	
	return (
		<>
			<div className='birthday-container'>
				<img className='birthday-img' src={PF + 'gift.png'} alt='' />
				<span className='birthday-text'>
					<b>Pola Foster</b> and <b>3 other friends</b> have a birhday
					today.
				</span>
			</div>
			<img className='rightbar-ad' src='assets/ad.png' alt='' />
			<h4 className='rightbar-title'>Online Friends</h4>
			<ul className='rightbar-friend-list'>
				{Users.map((u) => (
					<Online key={u.id} user={u} />
				))}
			</ul>
		</>
	);
};

const ProfileRightbar = () => {

	return (
		<>
		{user.username !== currentUser.username._id && (
			<button className="rightbar-follow-button" onClick={handleFollow}>
				{followed ? "Unfollow": "Follow"}
				{followed ? <RemoveIcon/> : <AddIcon/>}
			</button>
		)}
			<h4 className='rightbar-title'> Information</h4>
			<div className='rightbar-info'>
				<div className='rightbar-info-item'>
					<span className='rightbar-info-key'>City:</span>
					<span className='rightbar-info-value'>{user.city}</span>
				</div>
				<div className='rightbar-info-item'>
					<span className='rightbar-info-key'>From:</span>
					<span className='rightbar-info-value'>{user.from}</span>
				</div>
				<div className='rightbar-info-item'>
					<span className='rightbar-info-key'>Relationship:</span>
					<span className='rightbar-info-value'>{user?.relationship}</span>
				</div>
			</div>
			<h4 className='rightbar-title'>Your friends</h4>
			<div className='rightbar-followings'>
				{
					friends.map(friend=>(
						<Link to = {'/profile'+ friend.username}
						style={{textDecoration:'none'}} >
<div className='rightbar-following'>
					<img
						src={friend.profilePic ? PF + friend.profilePic : PF + 'person/noAvatar.png'}
						alt=''
						className='rightbar-following-img'
					/>
					<span className='rightbar-following-name'>{friend.username}</span>
				</div>
						</Link>
					))
				}
				
			
			</div>
		</>
	);
};

	return (
		<>
			<div className='rightbar'>
				<div className='rightbar-wrapper'>
					{user ? <ProfileRightbar /> : <HomeRightbar />}
				</div>
			</div>
		</>
	);
};

export default Rightbar;
