//styles
import styles from './services.module.css';
//fonts
import { CormorantBold, CormorantMedium, semplicitaLight, semplicitaRegular } from '../fonts/fonts';
//components
import Image from 'next/image';
import LandingView from '@/components/LandingView/LandingView';
import BookButton from '@/components/BookButton/BookButton';
//data
import { getPageData, getDescriptionText } from '@/lib/utils/contentful-functions';
import { destructurePageData } from '@/lib/utils/page-type-generator';
//types
import { sectionObjType } from '@/lib/utils/page-type-generator';

export default async function Services() {
  const data = await getPageData('1Uq0v8PXLl2G7dDm8bFAll');
  const [imgObj, sectionsObj] = destructurePageData(data) as [
    Record<string, string>,
    sectionObjType,
  ];
  //headers
  const { lists, paragraphs, headers } = sectionsObj;
  return (
    <main className={styles.main}>
      <LandingView
        isHome={false}
        imgSrc={imgObj.persontypehero}
        heading={headers.servicePageHeading.mainHeading}
        subHeading={headers.servicePageHeading.subHeading}
      />
      <div className={styles.journeyParaWrapper}>
        <p className={`${CormorantBold.className} ${styles.journeyPara}`}>
          {paragraphs.journeyUnique.content}
        </p>
      </div>
      <section className={styles.helpSection}>
        <div className={styles.helpSection__textWrapper}>
          <h2 className={`${CormorantBold.className}`}>{headers.helpWithHeading.mainHeading}</h2>
          <ul>
            {lists.helpWithList.listContent.map((item, index) => {
              return (
                <li className={semplicitaRegular.className} key={crypto.randomUUID()}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.verticalRule}></div>
        <div className={`${styles.helpSection__buttonBlock}`}>
          <p className={`${styles.helpSection__buttonBlock__para} ${CormorantBold.className}`}>
            {paragraphs.bookIntroductoryCall.content}
          </p>
          <BookButton text="book"></BookButton>
        </div>
      </section>
    </main>
  );
}
