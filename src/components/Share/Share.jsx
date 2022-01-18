import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import CancelIcon from "@mui/icons-material/Cancel";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useContext, useState, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
const Share = () => {
	const [file, setFile] = useState(null);
	const desc = useRef();
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	const { user } = useContext(AuthContext);

	const shareHandler = async (e) => {
		e.preventDefault();
		const newPost = {
			userId: user._id,
			desc: desc.current.value,
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append("name", filename);
			data.append("file", file);
			newPost.img = filename;
			console.log(newPost);
			try {
				await axios.post("http://localhost:1000/api/upload", data);
				
			} catch (error) {}
		}
		try {
		await axios.post("http://localhost:1000/api/posts", newPost);
		} catch (error) {}
		window.location.reload();
	};
	return (
		<div className='share'>
			<div className='share-wrapper'>
				<div className='share-top'>
					<img
						className='share-profile-img'
						src={
							user.profilePic
								? PF + user.profilePic
								: PF + "person/noAvatar.png"
						}
						alt=''
					/>
					<input
						placeholder={`${user.username} , Say something to your friend?`}
						className='share-input'
						ref={desc}
					/>
				</div>
				<hr className='shareHr' />
				{ file && (
					<div className="share-img-container">
						<img src="" alt="" className="share-img" />
						<CancelIcon className='share-cancel-img' onClick={()=>setFile(null)} />
						</div>
				)}
				<form onSubmit={shareHandler} className='share-bottom'>
					<div className='share-options'>
						<label htmlFor='file' className='share-option'>
							<PermMediaIcon htmlColor='tomato' className='share-icon' />
							<span className='share-option-text'>Photo or Video</span>
							<input
								style={{ display: "none" }}
								type='file'
								id='file'
								accept='.png,.jpeg,.jpg'
								onChange={(e) => setFile(e.target.files[0])}
							/>
						</label>

						<div className='share-option'>
							<LabelIcon htmlColor='blue' className='shareIcon' />
							<span className='share-option-text'>Tag</span>
						</div>
						<div className='share-option'>
							<RoomIcon htmlColor='green' className='shareIcon' />
							<span className='shareOptionText'>Location</span>
						</div>
						<div className='share-option'>
							<EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon' />
							<span className='share-option-text'>Feelings</span>
						</div>
					</div>
					<button className='share-button'>Share</button>
				</form>
			</div>
		</div>
	);
};

export default Share;
