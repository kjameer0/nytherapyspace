
//styles
import styles from './page.module.css';
//fonts
import { CormorantBold, CormorantMedium, semplicitaLight } from '../fonts/fonts';
//components
import Image from 'next/image';
import LandingView from '@/components/LandingView/LandingView';
import FaqList from '@/components/FaqList/FaqList';
//data
import { getPageData, getDescriptionText } from '@/lib/utils/contentful-functions';
import { destructurePageData } from '@/lib/utils/page-type-generator';
//types
import { sectionObjType } from '@/lib/utils/page-type-generator';
//react
import React from 'react';
type priceType = {
  serviceName: string;
  beforePriceText: string;
  price: string;
  afterPriceText: string;
  description: string;
  asteriskText?: string;
};
export default async function Rates() {
  const data = await getPageData('6PUSpM2Ef5CcyzrOmhUvMt');
  const [imgObj, sectionsObj] = destructurePageData(data) as [
    Record<string, string>,
    sectionObjType,
  ];
  //headers
  const { lists, paragraphs, headers } = sectionsObj;
  const ratesArr: priceType[] = [
    {
      serviceName: headers.initialIntake.mainHeading,
      beforePriceText: '',
      afterPriceText: '',
      price: headers.initialIntake.subHeading || '',
      description: paragraphs.initialIntakePara.content,
    },
    {
      serviceName: headers.therapyAndCounseling.mainHeading,
      beforePriceText: paragraphs.priceFloorText.content,
      afterPriceText: '',
      price: headers.therapyAndCounseling.subHeading || '',
      description: paragraphs.therapyAndCounselingPara.content,
    },
    {
      serviceName: headers.messageBasedCounseling.mainHeading,
      beforePriceText: '',
      afterPriceText: paragraphs.pricePerWeek.content,
      price: headers.messageBasedCounseling.subHeading || '',
      description: paragraphs.messageBasedCounselingPara.content,
      asteriskText: paragraphs.asteriskText.content,
    },
    {
      serviceName: headers.groupTherapy.mainHeading,
      beforePriceText: '',
      afterPriceText: paragraphs.pricePerPerson.content,
      price: headers.groupTherapy.subHeading || '',
      description: paragraphs.groupTherapy.content,
    },
    {
      serviceName: headers.groupClinicalSupervision.mainHeading,
      beforePriceText: '',
      afterPriceText: paragraphs.pricePerPerson.content,
      price: headers.groupClinicalSupervision.subHeading || '',
      description: paragraphs.groupClinicalSupervision.content,
    },
    {
      serviceName: headers.individualClinicalSupervision.mainHeading,
      beforePriceText: '',
      afterPriceText: '',
      price: headers.individualClinicalSupervision.subHeading || '',
      description: paragraphs.individualClinicalSupervision.content,
    },
  ];
  const faqArray: { mainHeading: string; subHeading?: string }[] = [
    headers.doYouTakeInsurance,
    headers.oonProvider,
    headers.intakeProcess,
    headers.frequencyOfSessions,
    headers.separateSessions,
    headers.cancellationPolicy,
  ];

  return (
    <main className={`${semplicitaLight.className} ${styles.main}`}>
      <LandingView
        isHome={false}
        imgSrc={imgObj.coffeehero}
        heading={headers.ratesAndInsurance.mainHeading}
        subHeading={headers.ratesAndInsurance.subHeading}
      />
      <section className={styles.pricesSection}>
        <h2 className={CormorantBold.className}>{headers.rates.mainHeading}</h2>
        <div className={styles.pricesSection__contentWrapper}>
          {ratesArr.map((service) => {
            return (
              <div
                className={`${styles.pricesSection__contentItem} ${
                  service.asteriskText ? styles.asteriskMargin : ''
                }`}
                key={crypto.randomUUID()}
              >
                <header
                  className={`${service.beforePriceText.length > 0 ? styles.beforeTextMargin : ''}`}
                >
                  <div className={styles['pricesSection__contentItem__priceBlock']}>
                    <span className={`${CormorantMedium.className} ${styles.beforePriceText}`}>
                      {service.beforePriceText}
                    </span>
                    {service.beforePriceText.length > 0 && <br />}
                    <span className={`${CormorantBold.className} ${styles.priceNumber}`}>
                      {service.price}
                    </span>
                    <span
                      className={`${CormorantMedium.className} ${styles['pricesSection__contentItem__priceBlock__afterText']}`}
                    >
                      {service.afterPriceText}
                    </span>
                  </div>
                  <h3 className={`${CormorantMedium.className}`}>{service.serviceName}</h3>
                </header>
                <p className={`${service.asteriskText && styles.asteriskMargin}`}>
                  {service.description}
                </p>
                <span>{service.asteriskText && service.asteriskText}</span>
              </div>
            );
          })}
        </div>
      </section>
      <div className={styles.heroWrapper}>
          <Image src={imgObj.faqhero} width={375} height={45} alt="Person typing"></Image>
        </div>
      <section className={styles.faqSection}>
        <h3 className={`${CormorantBold.className}`}>{headers.faqHeading.mainHeading}</h3>
       <FaqList questionArr={faqArray}/>
      </section>
    </main>
  );
}
