import { Request, Response } from 'express';
import { 
  newNote, 
  getSingleNoteById, 
  getNotesById,
  getNotesByTag,
  updateSingleNote,
  deleteSingleNote,
  updateNoteTag
} from '../services/note.service';
import { idValidator, tagIdValidator } from '../validators/helper.validator';
import { noteValidator } from '../validators/note.validator';

export const createNote = async (
  req: Request, 
  res: Response)
  : Promise<void> => {
  try {
    const userId = req.userId;
    const { title, content } = req.body;
    const valid = noteValidator.parse({ title, content, userId });
    const note = await newNote(valid.title, valid.content, valid.userId);
    res.status(201).send(note);
  } catch (error) {
    res.status(400)
      .send(`Could not create note: ${error}`);
  } 
}

export const getNote = async (
  req: Request, 
  res: Response)
  : Promise<void> => {
  try {
    const noteId = idValidator.parse(req.params.noteId);
    const notes = await getSingleNoteById(noteId);
    res.status(200).send(notes);
  } catch (error) {
    res.status(400)
      .send(`Could not find Note: ${error}`);
  }
}

export const getUserNotes = async (
  req: Request, 
  res: Response)
  : Promise<void>  => {
  try {
    const userId = idValidator.parse(req.userId);
    const notes = await getNotesById(userId);
    res.status(200).send(notes);
  } catch (error) {
    res.status(400)
      .send(`Could not find Notes: ${error}`);
  }
}

export const getUserNotesByTag = async (
  req: Request, 
  res: Response)
  : Promise<void> => {
  try {
    const valid = tagIdValidator.parse(req.params.tagId);
    if (!valid) {
      throw new Error('Tag is required');
    }
    const notes = await getNotesByTag(valid);
    res.status(200).send(notes);
  } catch (error) {
    res.status(400)
      .send(`Could not find Note: ${error}`);
  }
}

export const updateNote = async (
  req: Request, 
  res: Response)
  : Promise<void> => {
  try {
    const userId = req.userId;
    const noteId = idValidator.parse(req.params.noteId);
    const { title, content } = req.body;
    const valid = noteValidator.parse({ title, content, userId });
    const note = await updateSingleNote(
      noteId, 
      valid.title, 
      valid.content);
    res.status(200).send(note);
  } catch (error) {
    res.status(400)
      .send(`Could not update note: ${error}`);
  }
}

export const addTagToNote = async (
  req: Request,
  res: Response)
  : Promise<void> => {
  try {
    const validNoteId = idValidator.parse(req.params.noteId);
    const validTagId = tagIdValidator.parse(req.body.tagId);
    const note = await updateNoteTag(validNoteId, validTagId);
    res.status(200).send(note);
  } catch (error) {
    res.status(400)
      .send(`Could not add tag to note: ${error}`);
  }
}

export const removeTagFromNote = async (
  req: Request, 
  res: Response)
  : Promise<void> => {
  try {
    const valid = idValidator.parse(req.params.noteId);
    const note = await updateNoteTag(valid, null);
    res.status(200).send(note);
  } catch (error) {
    res.status(400)
      .send(`Could not remove tag from note: ${error}`);
  }
}

export const deleteNote = async (
  req: Request, 
  res: Response)
  : Promise<void> => {
  try {
    const valid = idValidator.parse(req.params.noteId);
    const note = await deleteSingleNote(valid);
    res.status(200).send(note);
  } catch (error) {
    res.status(400)
      .send(`Could not delete note: ${error}`);
  }
} 