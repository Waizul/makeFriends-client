import './sidebar.css';
import { Users } from '../../dummyData';
import FriendList from '../friendList/FriendList';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar-wrapper'>
				<ul className='friend-list'>
					<h2 className='friend-list-title'>Close friends</h2>
					{Users.slice(0, 5).map((friend) => (
						<FriendList friend={friend} key={friend.id} />
					))}
				</ul>
				<hr className='sidebar-hr' />
				<ul className='friend-list'>
					<h2 className='friend-list-title'>All friends</h2>
					{Users.map((friend) => (
						<FriendList friend={friend} key={friend.id} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
