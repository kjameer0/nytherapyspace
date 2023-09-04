import { Entry } from 'contentful';
import {
  TypePage__nameSkeleton,
  isTypeHeader,
  isTypeParagraph,
  isTypeListText,
} from '../types/contentful-types';
//type of page data that is return from client.getEntry
type DataType = Entry<TypePage__nameSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>;
//returns an object that contains the images and sections and pagetitle for a page

export type sectionHeaderType = {
  mainHeading: string;
  subHeading: string | undefined;
};
export type sectionParagraphType = {
  content: string;
};
export type sectionListType = {
  listContent: string[];
};
export type sectionObjType = {
  lists: Record<string, sectionListType>;
  headers: Record<string, sectionHeaderType>;
  paragraphs: Record<string, sectionParagraphType>;
};

export function generateImageObject(data: DataType) {
  try {
    //make sure images is not undefined
    const images = data.fields.images !== undefined ? data.fields.images : [];
    //throw error if undefined
    if (images.length === 0) {
      throw new ReferenceError('images undefined');
    }
    //images are stored with their title as the key and url as the value
    const imgObj: Record<string, string> = {};
    images.forEach((img) => {
      //make sure image properties exist
      if (img !== undefined && img.fields && img.fields.title) {
        const name: string = img.fields.title;
        //make object key title of the image
        //make object value url
        imgObj[name.toLowerCase()] =
          img?.fields?.file?.url !== undefined ? 'https:' + img.fields.file.url : '';
      }
    });
    return imgObj;
  } catch (error) {
    if (error instanceof ReferenceError) console.error(error.message);
    else console.error('image object error');
  }
}

export function generateSectionsObject(data: DataType) {
  try {
    //make sure sections is not undefined
    if (data.fields.sections === undefined) {
      throw new ReferenceError('sections undefined');
    }
    const sections = data.fields.sections;
    //sections are stored with their title as the key and content objects as values
    const sectionObj: sectionObjType = { lists: {}, headers: {}, paragraphs: {} };
    sections.forEach((section) => {
      //make sure section title exists
      if (section === undefined || section.fields === undefined) {
        throw new ReferenceError('no content');
      }
      const title = section.fields.title;
      if (typeof title === 'object' || title === undefined) {
        throw new ReferenceError('no content');
      }
      //figure out what type of content this section might be
      //it could be a list, header, or paragraph
      if (isTypeHeader(section)) {
        const mainHeading = section.fields.mainHeading;
        const subHeading = section.fields.subHeading;
        if (typeof mainHeading === 'object' || typeof subHeading === 'object') {
          throw new ReferenceError('no content');
        }
        const content: sectionHeaderType = { mainHeading, subHeading };
        sectionObj.headers[title] = content;
      } else if (isTypeParagraph(section)) {
        //paragraphs only have one field: content
        const text = section.fields.content;
        if (typeof text === 'object' || text === undefined) {
          throw new ReferenceError('no paragraph content');
        }
        const content = { content: text } as sectionParagraphType;
        sectionObj.paragraphs[title] = content;
      } else if (isTypeListText(section)) {
        const content = section.fields.listContent;
        if (!Array.isArray(content) || content === undefined) {
          throw new ReferenceError('no list content');
        }
        const listContent = { listContent: content } as sectionListType;
        sectionObj.lists[title] = listContent;
      }
    });
    return sectionObj;
  } catch (error) {
    if (error instanceof ReferenceError) console.error(error.message);
    else console.error('image object error');
  }
}

//get images and section data out of the entire data object
//from API
export function destructurePageData(data: DataType) {
  try {
    if (data === undefined) {
      throw new ReferenceError('no data to destructure');
    }
    const images = generateImageObject(data);
    const sections = generateSectionsObject(data);
    if (!images || !sections) {
      throw new ReferenceError('no data to destructure');
    }
    return [images, sections];
  } catch (error) {
    if (error instanceof ReferenceError) console.error(error.message);
    else console.error('image object error');
  }
}

//type checking functions
export function isSectionHeaderType(obj: any): obj is sectionHeaderType {
  return obj && typeof obj === 'object' && 'mainHeading' in obj;
}

export function isSectionListType(obj: any): obj is sectionListType {
  return obj && typeof obj === 'object' && 'listContent' in obj;
}

export function isSectionParagraphType(obj: any): obj is sectionParagraphType {
  return obj && typeof obj === 'object' && 'content' in obj;
}
