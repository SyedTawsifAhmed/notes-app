import { Request, Response } from 'express';
import { 
  newTag, 
  findTags, 
  findAndDeleteTag, 
  checkTagByName, 
  checkTagById 
} from '../services/tag.service';
import { idValidator } from '../validators/helper.validator';
import { tagValidator } from '../validators/tag.validator';

export const createTag = async (
  req: Request, 
  res: Response)
  : Promise<void> => {
  try {
    const valid = tagValidator.parse({ 
      name: req.body.name, 
      userId: req.userId 
    });
    const exists = await checkTagByName(valid.name, valid.userId);
    if (exists) {
      throw new Error('Tag already exists');
    }
    const tag = await newTag(valid.name, valid.userId);
    res.status(201).send(tag);
  } catch (error) {
    res.status(400)
      .send(`Could not create tag: ${error}`);
  } 
}

export const getTags = async (
  req: Request, 
  res: Response)
  : Promise<void>  => {
  try {
    const valid = idValidator.parse(req.userId);
    const tags = await findTags(valid);
    if (!tags) {
      res.status(404).send(`Tag not found with userId: ${req.params.userId}`);
    }
    res.status(200).send(tags);
  } catch (error) {
    res.status(400).send(`Could not find Tag: ${error}`);
  }
}

export const deleteTag = async (
  req: Request, 
  res: Response)
  : Promise<void> => {
  try {
    const valid = idValidator.parse(req.params.tagId);
    const exists = await checkTagById(valid);
    if (!exists) {
      throw new Error('Tag not found');
    }
    const tag = await findAndDeleteTag(req.params.tagId);
    res.status(200).send(tag);
  } catch (error) {
    res.status(400)
      .send(`Could not delete tag: ${error}`);
  }
}