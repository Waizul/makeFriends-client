import './feed.css';
// import { Posts } from '../../dummyData';
import Post from '../post/Post';
import Share from '../Share/Share';
import { useEffect, useState } from 'react';
import axios from 'axios'
const Feed = ({username}) => {
	const [posts,setPosts] = useState([])

	useEffect(()=>{
		const fetchPosts = async () =>{
			const res = username? await axios.get('http://localhost:1000/api/posts/profile/'+username):await axios.get('http://localhost:1000/api/posts/timeline/61e43c205743158f24bad01a')

setPosts(res.data)
}
fetchPosts()
console.log(posts)
	},[])

	return (
		<div className='feed'>
			<div className='feed-wrapper'>
				<Share />
				{posts.map((post) => (
					<Post key={post._id} post={post} />
				))}
			</div>
		</div>
	);
};

export default Feed;
