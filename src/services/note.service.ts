import { Note } from "../entities/note.entity";

export const newNote = async (
  title: string,
  content: string,
  userId: string) => {
  try {
    const createdAt = new Date();
    const updatedAt = new Date();
    const newNote = new Note({ 
      title, 
      content, 
      userId, 
      tagId: null, 
      createdAt, 
      updatedAt });
    if (!newNote) {
      throw new Error('Could not create new note');
    }
    return await newNote.save();
  } catch (error) {
    throw error;
  }
}

export const getNotesById = async (userId: string) => {
  try {
    const notes = await Note.find({ userId: userId });
    if (!notes) {
      throw new Error(`Note not found with userId:${userId}`);
    }
    return notes;
  } catch (error) {
    throw error;
  }
}

export const getSingleNoteById = async (id: string) => {
  try {
    const notes = await Note.findById(id);
    if (!notes) {
      throw new Error(`Note not found with id:${id}`);
    }
    return notes;
  } catch (error) {
    throw error;
  }
}

export const getNotesByTag = async (tagId: string) => {
  try {
    const notes = await Note.find({ tagId: tagId });
    if (!notes) {
      throw new Error(`Note not found with tagId: ${tagId}`);
    }
    return notes;
  }
  catch (error) {
    throw error;
  }
}

export const updateSingleNote = async (
  noteId: string,
  title: string, 
  content: string,
  ) => {
  try {
    const newDate = new Date();
    const note = await Note.findByIdAndUpdate(
      noteId,
      { title: title, content: content, updatedAt: newDate },
      { new: true }
    );
    if (!note) {
      throw new Error(`Note not found with id: ${noteId}`);
    }
    return note;
  } catch (error) {
    throw error;
  }
}

export const updateNoteTag = async (noteId: string, tagId: string | null) => {
  try {
    const newDate = new Date();
    const note = await Note.findByIdAndUpdate(
      noteId,
      { tagId: tagId, updatedAt: newDate }, 
      { new: true }
    );
    if (!note) {
      throw new Error(`Note not found with id: ${noteId}`);
    }
    return note;
  } catch (error) {
    throw error;
  }
}

export const deleteSingleNote = async (id: string) => {
  try {
    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      throw new Error(`Note not found with id: ${id}`);
    }
    return note;
  } catch (error) {
    throw error;
  }
}

