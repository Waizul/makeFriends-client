import './share.css';
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';
const Share = () => {
	return (
		<div className='share'>
			<div className='share-wrapper'>
				<div className='share-top'>
					<img
						className='share-profile-img'
						src='/assets/person/1.jpeg'
						alt=''
					/>
					<input
						placeholder='Say something to your friend'
						className='share-input'
					/>
				</div>
				<hr className='shareHr' />
				<div className='share-bottom'>
					<div className='share-options'>
						<div className='share-option'>
							<PermMedia
								htmlColor='tomato'
								className='share-icon'
							/>
							<span className='share-option-text'>
								Photo or Video
							</span>
						</div>
						<div className='share-option'>
							<Label htmlColor='blue' className='shareIcon' />
							<span className='share-option-text'>Tag</span>
						</div>
						<div className='share-option'>
							<Room htmlColor='green' className='shareIcon' />
							<span className='shareOptionText'>Location</span>
						</div>
						<div className='share-option'>
							<EmojiEmotions
								htmlColor='goldenrod'
								className='shareIcon'
							/>
							<span className='share-option-text'>Feelings</span>
						</div>
					</div>
					<button className='share-button'>Share</button>
				</div>
			</div>
		</div>
	);
};

export default Share;
