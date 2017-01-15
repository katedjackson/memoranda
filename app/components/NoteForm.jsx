import React from 'react';

const NoteForm = (props) => {
  return (
    <div className="well">
      <form className="form-horizontal" onSubmit={props.handleSubmit} onChange={props.handleChange}>
        <fieldset>
          <legend>New Note</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Title</label>
            <div className="col-xs-10">
              <input className="form-control" type="text" value={props.inputVal}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-2 control-label">Tags</label>
            <div className="col-xs-10">
              <input className="form-control" type="array" value={props.inputVal}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10">
              <input className="form-control" type="text" value={props.inputVal}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success" disabled={props.disableButton}>Submit</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default NoteForm;




