import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote, noteClassName }) => {
	return (
		<div className={noteClassName}>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.9em'
				/>
			</div>
		</div>
	);
};

export default Note;