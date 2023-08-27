import Image from 'next/image';
import styles from './page.module.css';
//types
import { sectionObjType, destructurePageData } from '@/lib/utils/page-type-generator';
import { getPageData } from '@/lib/utils/contentful-functions';
//components
import LandingView from '@/components/LandingView/LandingView';

export default async function Home() {
  const data = await getPageData('3ADmil1Bk8Y0hsIEHh8P9X');
  //get images and sections from data
  const [imgObj, sectionsObj] = destructurePageData(data) as [
    Record<string, string>,
    sectionObjType,
  ];
  //headers
  const { lists, paragraphs, headers } = sectionsObj;
  //paragraphs
  return (
    <main className={styles.main}>
      <LandingView imgSrc={imgObj.mirrorheaderimage} heading={headers.nytherapyspace.mainHeading} subHeading={headers.nytherapyspace.subHeading}/>
      OY
      <Image src={imgObj.headshot} priority width={150} height={150} alt="Jennie's headshot" />
      <p>{data.fields.pageTitle}</p>
      <p>{headers.hello.mainHeading}</p>
    </main>
  );
}
