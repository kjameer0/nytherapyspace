import Image from 'next/image';
import styles from './page.module.css';
import { sectionObjType, destructurePageData } from '@/lib/utils/page-type-generator';
import { getPageData } from '@/lib/utils/contentful-functions';

export default async function Home() {
  const data = await getPageData('3ADmil1Bk8Y0hsIEHh8P9X');
  //get images and sections from data
  const [imgObj, sectionsObj] = destructurePageData(data) as [
    Record<string, string>,
    sectionObjType,
  ];
  if (!imgObj || !sectionsObj) throw new Error('no data');
  //headers
  const { lists, paragraphs, headers } = sectionsObj;
  //paragraphs
  return (
    <main className={styles.main}>
      OY
      <Image src={imgObj.headshot} priority width={150} height={150} alt="coffee" />
      <p>{data.fields.pageTitle}</p>
      <p>{headers.hello.mainHeading}</p>
    </main>
  );
}
