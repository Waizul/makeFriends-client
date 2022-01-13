import './topbar.css';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { Link } from 'react-router-dom';
const Topbar = () => {
	return (
		<div className='topbar-container'>
			<div className='topbar-left'>
				<Link to='/home' style={{textDecoration:'none'}}>
				<span className='logo'>MakeFreind</span>
				</Link>
			</div>
			<div className='topbar-center'>
				<div className='searchbar'>
					<Search className='search-icon' />
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
						<Person />
						<span className='topbar-icon-badge'>1</span>
					</div>
					<div className='topbar-icon-item'>
						<Chat />
						<span className='topbar-icon-badge'>2</span>
					</div>
					<div className='topbar-icon-item'>
						<Notifications />
						<span className='topbar-icon-badge'>1</span>
					</div>
				</div>
				<Link to='/profile/:username'>
				<img
					src='/assets/person/1.jpeg'
					alt=''
					className='topbar-img'
				/></Link>
			</div>
		</div>
	);
};

export default Topbar;
