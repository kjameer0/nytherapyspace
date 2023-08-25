import * as Contentful from 'contentful';
export const client = Contentful.createClient({
  space: process.env.NEXT_PUBLIC_SPACE_KEY as string,
  accessToken: process.env.NEXT_PUBLIC_API_KEY as string,
});
