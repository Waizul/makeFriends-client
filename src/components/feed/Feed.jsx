import "./feed.css";
// import { Posts } from '../../dummyData';
import Post from "../post/Post";
import Share from "../Share/Share";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {AuthContext} from '../../context/AuthContext'
const Feed = ({ username }) => {
	const [posts, setPosts] = useState([]);

	const {user} = useContext(AuthContext)

	useEffect(() => {
		const fetchPosts = async () => {
			const res = username
				? await axios.get("http://localhost:1000/api/posts/profile/" + username)
				: await axios.get(
						'http://localhost:1000/api/posts/timeline/'+user._id
				  );

			setPosts(res.data.sort((p1,p2) => {
				return new Date(p2.createdAt)-new Date(p1.createdAt)
			}));
		};
		fetchPosts();
		console.log(posts);
	}, []);
	// username,user._id//
	return (
		<div className='feed'>
			<div className='feed-wrapper'>
			{(!username || username === user.username) &&<Share />   }
				{posts.map((post) => (
					<Post key={post._id} post={post} />
				))}
			</div>
		</div>
	);
};

export default Feed;
