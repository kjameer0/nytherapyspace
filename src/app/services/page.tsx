//styles
import styles from './services.module.css';
//fonts
import {
  CormorantBold,
  CormorantMedium,
  poppinsSemiBold,
  semplicitaLight,
  semplicitaRegular,
} from '../fonts/fonts';
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
                <li
                  className={`${semplicitaRegular.className} ${styles.listFont}`}
                  key={crypto.randomUUID()}
                >
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
      <section className={styles.IndTherapySection}>
        <div className={styles.heroWrapper}>
          <Image
            src={imgObj.individualtherapyhero}
            width={375}
            height={45}
            alt="A chair with wooden arm rests"
          ></Image>
          <header className={styles.heroHeader}>
            <h2 className={`${styles['heroHeader__mainHeading']} ${CormorantBold.className}`}>
              {headers.individualAdultTherapyHeading.mainHeading}
            </h2>
            <p className={`${styles['heroHeader__subHeading']} ${CormorantBold.className}`}>
              {headers.individualAdultTherapyHeading.subHeading}
            </p>
          </header>
        </div>
        <header className={styles.IndTherapyContent__header}>
          <p className={`${poppinsSemiBold.className}`}>
            {headers.benefitsIndividualTherapy.subHeading}
          </p>
          <h3 className={`${CormorantBold.className}`}>
            {headers.benefitsIndividualTherapy.mainHeading}
          </h3>
        </header>
        <p className={`${styles['IndTherapyContent__para']} ${semplicitaLight.className}`}>
          {paragraphs.benefitsIndividualTherapyPara.content}
        </p>
        <ul className={styles['IndTherapyContent__list']}>
          {lists.benefitsIndividualTherapyList.listContent.map((item, index) => {
            return (
              <li className={semplicitaLight.className} key={crypto.randomUUID()}>
                {item}
              </li>
            );
          })}
        </ul>
      </section>
      <section className={styles.teenSection}>
        <div className={styles.heroWrapper}>
          <Image
            src={imgObj.teentherapyhero}
            width={375}
            height={45}
            alt="A black wire chair"
          ></Image>
          <header className={styles.heroHeader}>
            <h2
              className={`${styles['heroHeader__mainHeading']} ${CormorantBold.className} ${styles.teenSection__mainHeading}`}
            >
              {headers.teenAdolescentHeading.mainHeading}
            </h2>
            <p className={`${styles['heroHeader__subHeading']} ${CormorantBold.className}`}>
              {headers.teenAdolescentHeading.subHeading}
            </p>
          </header>
        </div>
        <div className={styles.teenContent}>
          <h3 className={`${CormorantBold.className}`}>{headers.navigateHeading.mainHeading}</h3>
          <p className={`${semplicitaLight.className}`}>{paragraphs.navigatePara.content}</p>
          <ul className={`${styles.teenContent__list} ${styles.contentList}`}>
            {lists.teenAdolescentList.listContent.map((item, index) => {
              return (
                <li className={semplicitaLight.className} key={crypto.randomUUID()}>
                  {item}
                </li>
              );
            })}
          </ul>
          <ul className={`${styles.teenContent__list} ${styles.contentList}`}>
            {lists.teenAdolescentList2.listContent.map((item, index) => {
              return (
                <li className={semplicitaLight.className} key={crypto.randomUUID()}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className={styles.familySection}>
        <div className={styles.heroWrapper}>
          <Image
            src={imgObj.familytherapyhero}
            width={375}
            height={45}
            alt="A green stuffed animal"
          ></Image>
          <header className={styles.heroHeader}>
            <h2 className={`${styles['heroHeader__mainHeading']} ${CormorantBold.className}`}>
              {headers.familyTherapyHeading.mainHeading}
            </h2>
            <p className={`${styles['heroHeader__subHeading']} ${CormorantBold.className}`}>
              {headers.familyTherapyHeading.subHeading}
            </p>
          </header>
        </div>
        <div className={styles['familyContent__flexWrapper']}>
          <div className={styles['familyContent__flex1']}>
            <h3 className={`${CormorantBold.className}`}>{headers.reconnectHeading.mainHeading}</h3>
            <p className={`${semplicitaLight.className}`}>{paragraphs.reconnectPara.content}</p>
            <ul className={`${styles['familySection__content__list']} ${styles.listFont}`}>
              {lists.reconnectList.listContent.map((item, index) => {
                return (
                  <li className={semplicitaLight.className} key={crypto.randomUUID()}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.familyContent__flex2}>
            <p className={CormorantBold.className}>{paragraphs.firstStep.content}</p>
            <BookButton text="book" />
          </div>
        </div>
      </section>
      <section className={styles.couplesSection}>
        <div className={styles.heroWrapper}>
          <Image
            src={imgObj.couplestherapyhero}
            width={375}
            height={45}
            alt="A green stuffed animal"
          ></Image>
          <header className={styles.heroHeader}>
            <h2 className={`${styles['heroHeader__mainHeading']} ${CormorantBold.className}`}>
              {headers.couplesTherapyHeading.mainHeading}
            </h2>
            <p className={`${styles['heroHeader__subHeading']} ${CormorantBold.className}`}>
              {headers.couplesTherapyHeading.subHeading}
            </p>
          </header>
        </div>
        <div className={styles.couplesSection__content__flexWrapper}>
          <div className={`${styles['couplesSection__content__flex1']}`}>
            <h3 className={`${CormorantBold.className} ${styles.h3Font}`}>
              {headers.revitalizeHeading.mainHeading}
            </h3>
            <p className={`${semplicitaLight.className} ${styles.paraFont}`}>
              {paragraphs.revitalizePara.content}
            </p>
          </div>
          <div className={styles['couplesSection__content__flex2']}>
            <ul className={`${styles['familySection__content__list']}`}>
              {lists.couplesList.listContent.map((item, index) => {
                return (
                  <li
                    className={`${semplicitaLight.className} ${styles.listFont} ${styles.contentList}`}
                    key={crypto.randomUUID()}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.groupSection}>
        <div className={styles.heroWrapper}>
          <Image src={imgObj.grouptherapyhero} width={375} height={45} alt="A color"></Image>
          <header className={styles.heroHeader}>
            <h2 className={`${styles['heroHeader__mainHeading']} ${CormorantBold.className}`}>
              {headers.groupTherapyHeading.mainHeading}
            </h2>
            <p className={`${styles['heroHeader__subHeading']} ${CormorantBold.className}`}>
              {headers.groupTherapyHeading.subHeading}
            </p>
          </header>
        </div>
        <h3 className={`${CormorantBold.className} ${styles.h3Font}`}>
          {headers.findSupportHeading.mainHeading}
        </h3>
        <p className={`${semplicitaLight.className} ${styles.paraFont}`}>
          {paragraphs.findSupportPara.content}
        </p>
      </section>
      <section className={styles.supervisionSection}>
        <div className={styles.heroWrapper}>
          <Image
            src={imgObj.grouptherapyhero}
            width={375}
            height={45}
            alt="A yellow arm chair"
          ></Image>
          <header className={styles.heroHeader}>
            <h2 className={`${styles['heroHeader__mainHeading']} ${CormorantBold.className}`}>
              {headers.groupTherapyHeading.mainHeading}
            </h2>
            <p className={`${styles['heroHeader__subHeading']} ${CormorantBold.className}`}>
              {headers.groupTherapyHeading.subHeading}
            </p>
          </header>
        </div>
        <h3 className={`${CormorantBold.className} ${styles['h3Font']}`}>
          {headers.learningHeading.mainHeading}
        </h3>
        <ul className={`${styles['familySection__content__list']} ${styles.listFont}`}>
          {lists.learningList1.listContent.map((item, index) => {
            return (
              <li className={semplicitaLight.className} key={crypto.randomUUID()}>
                {item}
              </li>
            );
          })}
        </ul>
        <ul className={`${styles['familySection__content__list']} ${styles.listFont}`}>
          {lists.learningList2.listContent.map((item, index) => {
            return (
              <li className={semplicitaLight.className} key={crypto.randomUUID()}>
                {item}
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
