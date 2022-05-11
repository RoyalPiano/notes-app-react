const UpdateForm = ({ updateData, changeNote, updateNote, cancelNote }) => {
    return(
      <>
        {/* Update Note */}
        <div className="row">
          <div className="col">
            <input 
              value={ updateData && updateData.title }
              onChange={ (e) => changeNote(e)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-auto">
            <button
              onClick={updateNote}
              className="btn btn-lg btn-success mr-20"
            >Update</button>
            <button
              onClick={cancelNote}
              className="btn btn-lg btn-warning"
            >Cancel</button>
          </div>
        </div>
        <br />  
      </>
    )
  }
  
  export default UpdateForm;