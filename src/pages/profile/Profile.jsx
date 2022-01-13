import './profile.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

const Profile = () => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER
	
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
								src={`${PF}post/3.jpeg`}
							
								alt=''
							/>
							<img
								className='profile-user-img'
								src={`${PF}post/7.jpeg`}
								alt=''
							/>
						</div>
						<div className='profile-info'>
							<h4 className='profile-info-name'>
								Safak Kocaoglu
							</h4>
							<span className='profile-info-desc'>
								Hello my friends!
							</span>
						</div>
					</div>
					<div className='profile-right-bottom'>
						<Feed />
						<Rightbar profile />
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
