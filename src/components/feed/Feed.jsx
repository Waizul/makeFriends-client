import './feed.css';
import { Posts } from '../../dummyData';
import Post from '../post/Post';
import Share from '../Share/Share';
const Feed = () => {
	return (
		<div className='feed'>
			<div className='feed-wrapper'>
				<Share />
				{Posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</div>
		</div>
	);
};

export default Feed;
