import axios from 'axios';

export const receiveNotes = notes => ({
    type: RECEIVE_NOTES,
    notes
});

export const receiveNote = note => ({
    type: RECEIVE_NOTE,
    note
});

export const getNoteById = noteId => {
  return dispatch => {
    axios.get(`/api/${noteId}`)
      .then(response => {
        dispatch(receiveNote(response.data));
      });
  };
};

export const getNotesByTag = tag => {
  return dispatch => {
    axios.get(`/api/`)
      .then(response =>{
        dispatch(receiveNotes(response.data.filter(elem => elem.tags.indexOf(tag) >= 0)))
      })
  }
}
