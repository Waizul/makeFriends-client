import './topbar.css';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
const Topbar = () => {
	return (
		<div className='topbar-container'>
			<div className='topbar-left'>
				<span className='logo'>MakeFreind</span>
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
					<span className='topbar-link'>Homepage</span>
					<span className='topbar-link'>Timeline</span>
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
				<img
					src='/assets/person/1.jpeg'
					alt=''
					className='topbar-img'
				/>
			</div>
		</div>
	);
};

export default Topbar;
