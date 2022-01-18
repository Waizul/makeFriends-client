import "./post.css";

import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
	const [like, setLike] = useState(post.likes?.length);
	const [isLiked, setIsLiked] = useState(false);
	const [user, setUser] = useState([]);
	
	const { user:currentUser } = useContext(AuthContext);
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	useEffect(()=>{
		setIsLiked(post.likes.includes(currentUser._id))
	},[currentUser._id])

	useEffect(() => {
		const fetchUser = async () => {
			const res = await axios.get(
				`http://localhost:1000/api/users?userId=${post.userId}`
			);
			setUser(res.data);
		};
		fetchUser();
	}, []);

	const likeHandler = async() => {
		try {
			await axios.put('http://localhost:1000/api/posts/'+ post._id + '/like', {userId:currentUser._id})
		} catch (error) {
			
		}
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};

	return (
		<div className='post'>
			<div className='post-wrapper'>
				<div className='post-top'>
					<div className='post-top-left'>
						<Link to={`/profile/${user.username}`}>
							<img
								className='post-profile-img'
								src={user?.profilePic ? PF + user.profilePic : PF + "person/noAvatar.png"}
								alt=''
							/>
						</Link>
						<span className='post-username'>{user.username}</span>
						<span className='post-date'>{format(post.createdAt)}</span>
					</div>
					<div className='post-top-right'>
						<MoreVertIcon />
					</div>
				</div>
				<div className='post-center'>
					<span className='post-text'>{post?.desc}</span>
					<img className='post-img' src={PF + post?.img} alt='' />
				</div>
				<div className='post-bottom'>
					<div className='post-bottom-left'>
						<img
							className='like-icon'
							src={PF + 'like.png'}
							onClick={likeHandler}
							alt=''
						/>
						<img
							className='like-icon'
							src={PF + 'heart.png'}
							onClick={likeHandler}
							alt=''
						/>
						<span className='post-like-counter'>{like} people like it</span>
					</div>
					<div className='post-bottom-right'>
						<span className='post-comment-text'>{post.comment} comments</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
