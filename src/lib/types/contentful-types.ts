import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeHeaderFields {
  mainHeading: EntryFieldTypes.Symbol;
  subHeading?: EntryFieldTypes.Text;
  title: EntryFieldTypes.Text;
}

export type TypeHeaderSkeleton = EntrySkeletonType<TypeHeaderFields, 'header'>;
export type TypeHeader = Entry<TypeHeaderSkeleton>;

export function isTypeHeader(entry: Entry<EntrySkeletonType>): entry is TypeHeader {
  return entry.sys.contentType.sys.id === 'header';
}

export interface TypeListTextFields {
  listContent?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  title: EntryFieldTypes.Text;
}

export type TypeListTextSkeleton = EntrySkeletonType<TypeListTextFields, 'listText'>;
export type TypeListText = Entry<TypeListTextSkeleton>;

export function isTypeListText(entry: Entry<EntrySkeletonType>): entry is TypeListText {
  return entry.sys.contentType.sys.id === 'listText';
}

export interface TypePage__nameFields {
  pageTitle: EntryFieldTypes.Symbol;
  sections?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeHeaderSkeleton | TypeListTextSkeleton | TypeParagraphSkeleton>
  >;
  slug?: EntryFieldTypes.Symbol;
  images?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypePage__nameSkeleton = EntrySkeletonType<TypePage__nameFields, 'page-name'>;
export type TypePage__name = Entry<TypePage__nameSkeleton>;

export function isTypePage__name(entry: Entry<EntrySkeletonType>): entry is TypePage__name {
  return entry.sys.contentType.sys.id === 'page-name';
}

export interface TypeParagraphFields {
  content?: EntryFieldTypes.Text;
  title: EntryFieldTypes.Text;
}

export type TypeParagraphSkeleton = EntrySkeletonType<TypeParagraphFields, 'paragraph'>;
export type TypeParagraph = Entry<TypeParagraphSkeleton>;

export function isTypeParagraph(entry: Entry<EntrySkeletonType>): entry is TypeParagraph {
  return entry.sys.contentType.sys.id === 'paragraph';
}
