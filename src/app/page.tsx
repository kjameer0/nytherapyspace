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
  const servicesArr: { name: string; content: string; imgSrc: string; alt: string }[] = [
    {
      name: headers.individualTherapy.mainHeading,
      content: paragraphs.individualTherapyParagraph.content,
      imgSrc: imgObj.individualchair,
      alt: 'Single light brown chair with wooden arm rests',
    },
    {
      name: headers.couplesRelationship.mainHeading,
      content: paragraphs.couplesCounselingPara.content,
      imgSrc: imgObj.couplescouch,
      alt: 'Leather couch.',
    },
    {
      name: headers.teenAdolescentHeading.mainHeading,
      content: paragraphs.teenAdolescentPara.content,
      imgSrc: imgObj.teenchair,
      alt: 'single brown chair',
    },
    {
      name: headers.groupTherapy.mainHeading,
      content: paragraphs.groupTherapyPara.content,
      imgSrc: imgObj.groupsofa,
      alt: 'Wire chair',
    },
    {
      name: headers.familyTherapy.mainHeading,
      content: paragraphs.familyTherapyPara.content,
      imgSrc: imgObj.familyanimal,
      alt: 'Light color couch with colorful pillows',
    },
    {
      name: headers.clinicalSupervision.mainHeading,
      content: paragraphs.clinicalSupervisionPara.content,
      imgSrc: imgObj.supervisionchair,
      alt: 'Green stuffed animal',
    },
  ];

  //paragraphs
  return (
    <main className={`${semplicitaLight.className} ${styles.main}`}>
      <LandingView
        imgSrc={imgObj.mirrorheaderimage}
        heading={headers.nytherapyspace.mainHeading}
        subHeading={headers.nytherapyspace.subHeading}
        isHome={true}
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
      <section className={styles.servicesSection}>
        <div className={styles.heroWrapper}>
          <Image src={imgObj.typinghero} width={375} height={45} alt="Person typing"></Image>
        </div>
        <h2 className={`${CormorantBold.className}`}>{headers.servicesHeading.mainHeading}</h2>
        <ul className={styles.servicesSection__paraList}>
          {servicesArr.map((service, idx) => {
            return (
              <li className={styles['servicesSection__listItem']} key={crypto.randomUUID()}>
                <div className={styles.servicesSection__imgWrapper}>
                  <Image src={service.imgSrc} width={150} height={150} alt={service.alt} />
                </div>
                <div className={styles['servicesSection__textWrapper']}>
                  <h3 className={`${poppinsSemiBold.className}`}>{service.name}</h3>
                  <p>{service.content}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section className={styles.expectationSection}>
        <div className={styles.heroWrapper}>
          <Image src={imgObj.expectationhero} width={375} height={45} alt="Person typing"></Image>
        </div>
        <div className={styles.expectationSection__textWrapper}>
          <div className={styles.expectationSection__textWrapper__firstParaWrapper}>
            <h3 className={`${poppinsSemiBold.className}`}>{headers.whatToExpect.mainHeading}</h3>
            <p>{paragraphs.expectPara1.content}</p>
            <p>{paragraphs.expectPara2.content}</p>
            <p>{paragraphs.expectPara3.content}</p>
          </div>
          <div className={styles.expectationSection__textWrapper__secondParaWrapper}>
            <p>{paragraphs.expectPara4.content}</p>
            <p>{paragraphs.expectPara5.content}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
