import { Router } from 'express';
import { createTag, deleteTag, getTags } from '../controllers/tag.controller';

const tagRouter = Router();

tagRouter.post('/', createTag);
tagRouter.get('/', getTags);
tagRouter.delete('/:tagId', deleteTag);

export default tagRouter;