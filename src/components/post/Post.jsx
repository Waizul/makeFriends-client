import './post.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Post = ({ post }) => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER
	const [user,setUser] = useState([])

	const [like, setLike] = useState(post.likes?.length);
	const [isLiked, setIsLiked] = useState(false);

	
	useEffect(()=>{
		const fetchUser = async () =>{
			const res = await axios.get(`http://localhost:1000/api/users?userId=${post.userId}`)
console.log(res)
setUser(res.data)
}
fetchUser()
	},[])
	const likeHandler = () => {
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};
	return (
		<div className='post'>
			<div className='post-wrapper'>
				<div className='post-top'>
					<div className='post-top-left'>
						<Link to = {`/profile/${user.username}`}>

						<img
							className='post-profile-img'
							src={
								PF+user.profilePic || PF + 'person/noAvatar.png'
							}
							alt=''
							/>
							</Link>
						<span className='post-username'>
						{user.username}
						</span>
						<span className='post-date'>{format(post.createdAt)}</span>
					</div>
					<div className='post-top-right'>
						<MoreVertIcon />
					</div>
				</div>
				<div className='post-center'>
					<span className='post-text'>{post?.desc}</span>
					<img className='post-img' src={`${PF+post.img}`}alt='' />
				</div>
				<div className='post-bottom'>
					<div className='post-bottom-left'>
						<img
							className='like-icon'
							src='assets/like.png'
							onClick={likeHandler}
							alt=''
						/>
						<img
							className='like-icon'
							src='assets/heart.png'
							onClick={likeHandler}
							alt=''
						/>
						<span className='post-like-counter'>
							{like} people like it
						</span>
					</div>
					<div className='post-bottom-right'>
						<span className='post-comment-text'>
							{post.comment} comments
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
