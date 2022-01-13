import './friendList.css';
const FriendList = ({ friend }) => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER
	return (
		<li className='sidebar-friend'>
			<img
				src={`${PF+friend.profilePicture}`}
				alt=''
				className='sidebar-friend-img'
			/>
			<span className='sidebar-friend-name'>{friend.username}</span>
		</li>
	);
};

export default FriendList;
