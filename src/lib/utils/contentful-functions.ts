import * as Contentful from 'contentful';
import {
  TypePage__name,
  TypePage__nameFields,
  TypePage__nameSkeleton,
  TypeDescriptionTextSkeleton,
  TypeButtonTextSkeleton,
} from '../types/contentful-types';
import { client } from '../contentfulClient';

export async function getPageData(entryId: string) {
  const data = await client.withoutUnresolvableLinks.getEntry<TypePage__nameSkeleton>(entryId);
  if (!data) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to get page data');
  }
  return data;
}

export async function getDescriptionText() {
  const data = await client.getEntry<TypeDescriptionTextSkeleton>('1BChz8bEPVD0rDJIwkvT1I');
  if (!data || !data.fields.adjectiveList || !data.fields.therapyText) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to get description text data');
  }
  return data.fields;
}

export async function getButtonText() {
  const data = await client.getEntry<TypeButtonTextSkeleton>('7DDVYcDxi35bPIe9Mn9lWi');
  const fields = data && data.fields;
  const {bookNow, consultation} = fields
  if (!bookNow || !consultation) {
    throw new Error('Failed to get description text data');
  }
  return {bookNow, consultation};
}
