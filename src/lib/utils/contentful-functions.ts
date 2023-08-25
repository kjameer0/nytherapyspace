import * as Contentful from 'contentful';
import {
  TypePage__name,
  TypePage__nameFields,
  TypePage__nameSkeleton,
} from '../types/contentful-types';
import { client } from '../contentfulClient';

export async function getPageData(entryId: string) {
  const data = await client.withoutUnresolvableLinks.getEntry<TypePage__nameSkeleton>(entryId);
  if (!data) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return data;
}
