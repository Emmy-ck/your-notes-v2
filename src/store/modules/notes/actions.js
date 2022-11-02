export default {
  setSelectedNote(context, payload) {
    // commit a mutation to set the id of the selected notes item
    context.commit("setSelectedNote", payload);
  },
  setOpenNoteId(context, payload) {
    // commit a mutation to set the open note id
    context.commit("setOpenNoteId", payload);
  },
  resetSelectedNote(context) {
    // commit a mutation to reset the 'selectedNote' state prop
    context.commit("resetSelectedNote");
  },
  saveChanges(context, payload) {
    // commit a mutation to save changes made on a note
    context.commit("saveChanges", payload);
  },
  addNewNote(context, payload) {
    // commit a mutation to add a new note to the list of notes
    context.commit("addNewNote", payload);
  },
  deleteNote(context, payload) {
    // commit a mutation to delete a note from the list of notes
    context.commit("deleteNote", payload);
  },
  closeOpenFields(context, payload) {
    // commit a mutation to close any open fields in NotesDetails
    context.commit("closeOpenFields", payload);
  },
  restoreWelcomeNote(context, payload) {
    // commit a mutation to restore the Welcome Note
    context.commit("restoreWelcomeNote", payload);
  },
  addRealtimeData(context, payload) {
    // commit a mutation to get the notes data
    context.commit("addRealtimeData", payload);
  },
  resetDefaultNote(context) {
    // commit a mutation to reset the 'defaultNote' state prop
    context.commit("resetDefaultNote");
  },
  clearNotesList(context) {
    // commit a mutation to clear the notes list
    context.commit("clearNotesList");
  },
  addWelcomeNote(context) {
    // commit a mutation to include the Welcome Note along with the new data
    context.commit("addWelcomeNote");
  },
};
