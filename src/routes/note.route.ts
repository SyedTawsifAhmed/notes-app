import { Router } from 'express';
import { 
  createNote, 
  getNote, 
  getUserNotes, 
  getUserNotesByTag, 
  updateNote, 
  addTagToNote, 
  removeTagFromNote, 
  deleteNote 
} from '../controllers/note.controller';

const noteRouter = Router();

noteRouter.post('/', createNote);
noteRouter.get('/:noteId', getNote);
noteRouter.get('/', getUserNotes);
noteRouter.get('tag/:tagId', getUserNotesByTag);
noteRouter.put('/:noteId', updateNote);
noteRouter.patch('/add-tag/:noteId', addTagToNote);
noteRouter.patch('/remove-tag/:noteId', removeTagFromNote);
noteRouter.delete('/:noteId', deleteNote);

export default noteRouter;