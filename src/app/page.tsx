//styles
import styles from './page.module.css';
//types
import { sectionObjType, destructurePageData } from '../lib/utils/page-type-generator';
import { getPageData } from '../lib/utils/contentful-functions';
//components
import LandingView from '@/components/LandingView/LandingView';
import Image from 'next/image';
//fonts
import { CormorantBold, semplicitaLight, poppinsSemiBold } from './fonts/fonts';

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
    <main className={`${semplicitaLight.className} ${styles.main}`}>
      <LandingView
        imgSrc={imgObj.mirrorheaderimage}
        heading={headers.nytherapyspace.mainHeading}
        subHeading={headers.nytherapyspace.subHeading}
      />
      <div className={styles.helloSectionBlock}>
        <section className={`${styles.helloSection}`}>
          <header>
            <h2 className={`${CormorantBold.className}`}>{headers.hello.mainHeading}</h2>
            <p className={`${poppinsSemiBold.className}`}>{headers.hello.subHeading}</p>
          </header>
          <Image
            className={styles.helloSection__headshotImg}
            src={imgObj.headshot}
            priority
            width={127}
            height={150}
            alt="Jennie's headshot"
          />
          <p>{paragraphs.therapist.content}</p>
          <p>{paragraphs.training.content}</p>
          <p>{paragraphs.struggling.content}</p>
          <p>{paragraphs.ready.content}</p>
        </section>
      </div>
    </main>
  );
}
