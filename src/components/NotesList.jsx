
import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
	noteClassName,
	newNoteClassName
}) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
					noteClassName={noteClassName}
				/>
			))}
			<AddNote 
			handleAddNote={handleAddNote}
			newNoteClassName={newNoteClassName}
			 />
		</div>
	);
};

export default NotesList;