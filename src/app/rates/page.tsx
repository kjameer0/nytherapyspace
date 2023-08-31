//styles
import styles from './page.module.css';
//fonts
import { CormorantBold, CormorantMedium, semplicitaLight } from '../fonts/fonts';
//components
import LandingView from '@/components/LandingView/LandingView';
//data
import { getPageData, getDescriptionText } from '@/lib/utils/contentful-functions';
import { destructurePageData } from '@/lib/utils/page-type-generator';
//types
import { sectionObjType } from '@/lib/utils/page-type-generator';
type priceType = {
  serviceName: string;
  beforePriceText: string;
  price: string;
  afterPriceText: string;
  description: string;
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
              <div className={styles.pricesSection__contentItem} key={crypto.randomUUID()}>
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
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
