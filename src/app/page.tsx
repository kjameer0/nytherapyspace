import Image from 'next/image';
import styles from './page.module.css';
import * as Contentful from 'contentful';
import { TypePage__nameSkeleton, TypePage__name } from '@/lib/contentfultype3';
import { isSectionHeaderType, isSectionParagraphType, isSectionListType } from '@/lib/utils/pageTypes';
import { getPageData } from '@/lib/contentful-types';

export default async function Home() {
  const data = await getPageData('ji');
  console.log('hi');
  console.log(data.fields.sections);
  const images = data.fields.images !== undefined ? data.fields.images : [];
  const imgObj: Record<string, string> = {};
  images.forEach((img) => {
    if (img !== undefined && img.fields && img.fields.title) {
      const prop: string = img.fields.title;
      imgObj[prop.toLowerCase()] =
        img?.fields?.file?.url !== undefined ? 'https:' + img.fields.file.url : '';
    }
  });
  return (
    <main className={styles.main}>
      OY
      <Image src={imgObj.headshot} priority width={150} height={150} alt="coffee" />
      <p>{data.fields.pageTitle}</p>
    </main>
  );
}
