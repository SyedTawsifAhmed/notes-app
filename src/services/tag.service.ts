import { Note } from "../entities/note.entity";
import { Tag } from "../entities/tag.entity";

export const newTag = async (name: string, userId: string) => {
  try {
    const newTag = new Tag({ name, userId: userId });
    if (!newTag) {
      throw new Error('Could not create new tag');
    }
    return await newTag.save();
  } catch (error) {
    throw error;
  }
}

export const checkTagByName = async (name: string, id: string) => {
  try {
    return await Tag.exists({ name: name, userId: id });
  } catch (error) {
    throw error;
  }
}

export const checkTagById = async (id: string) => {
  try {
    return await Tag.exists({ _id: id });
  } catch (error) {
    throw error;
  }
}

export const findTags = async (userId: string) => {
  try {
    const tags = await Tag.find({ userId: userId });
    if (!tags) { 
      throw new Error(`Tags not found with userId:${userId}`);
    }
    return tags
  } catch (error) {
    throw error;
  }
}

export const findAndDeleteTag = async (id: string) => {
  try {
    const tag = await Tag.findByIdAndDelete(id);
    if (!tag) {
      throw new Error('Tag not found');
    }
    // tag successfully deleted, update all notes with this tag
    await Note.updateMany({ tagId: id }, { tagId: null });
    return tag;
  } catch (error) {
    throw error;
  }
}