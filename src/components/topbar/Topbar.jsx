import './topbar.css';

import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useContext } from 'react';
import {AuthContext} from '../../context/AuthContext'

const Topbar = () => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER
const {user } = useContext(AuthContext)
	return (
		<div className='topbar-container'>
			<div className='topbar-left'>
				<Link to='/home' style={{textDecoration:'none'}}>
				<span className='logo'>MakeFreind</span>
				</Link>
			</div>
			<div className='topbar-center'>
				<div className='searchbar'>
					<SearchIcon className='search-icon' />
					<input
						placeholder='Search for friend, post or video'
						className='search-input'
					/>
				</div>
			</div>
			<div className='topbar-right'>
				<div className='topbar-links'>
				<Link to='/home' style={{textDecoration:'none'}}><span className='topbar-link'>Homepage</span>
				</Link>		<span className='topbar-link'>Timeline</span>
				</div>
				<div className='topbar-icons'>
					<div className='topbar-icon-item'>
						<PersonIcon />
						<span className='topbar-icon-badge'>1</span>
					</div>
					<Link to = '/messenger' style={{textDecoration:'none'}}>
					<div className='topbar-icon-item'>
						<ChatIcon />
						<span className='topbar-icon-badge'>2</span>
					</div>
						</Link> 
					<div className='topbar-icon-item'>
						<NotificationsIcon />
						<span className='topbar-icon-badge'>1</span>
					</div>
				</div>
				<Link to={`/profile/${user?.username}`}>
				<img
					src={ user?.profilePic  ? PF +  user.profilePic : PF + 'person/noAvatar.png'}
					alt=''
					className='topbar-img'
				/></Link>
			</div>
		</div>
	);
};

export default Topbar;
