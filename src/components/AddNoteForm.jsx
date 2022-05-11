const AddNoteForm = ({ newNote, setNewNote, addNote }) => {
    return(
      <>
        {/* Add Note */}
        <div className="row">
          <div className="col">
            <input 
              value={newNote}
              onChange={ (e) => setNewNote(e.target.value)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-auto">
            <button
              onClick={addNote}
              className="btn btn-lg btn-success"
            >Add Note</button>
          </div>
        </div>
        <br />
      </>
    )
  }
  
  export default AddNoteForm;