import styles from './landingview.module.css';
//components
import Image from 'next/image';
import BookButton from '../BookButton/BookButton';
import MobileNavBar from '../NavBar/NavBar';
//fonts
import {
  CormorantBold,
  CormorantBoldItalic,
  CormorantItalic,
  CormorantMedium,
  semplicitaLight,
  semplicitaMedium,
} from '@/app/fonts/fonts';
//data
import { getDescriptionText } from '@/lib/utils/contentful-functions';
export default async function LandingView({
  heading,
  subHeading,
  imgSrc,
}: {
  heading: string;
  subHeading: string | undefined;
  imgSrc: string;
}) {
  //data that contains list of descriptors and description
  //of the kind of what kind of therapy treatment
  const description = await getDescriptionText();
  const { adjectiveList, therapyText } = description;
  if (!adjectiveList || !therapyText || !subHeading) {
    throw new ReferenceError('missing header description data');
  }
  //break apart name and certificaiton from props to apply different font
  const [name, certification] = subHeading.split(',');
  return (
    <div className={styles.headerBlock}>
      <div className={styles.headerWrapper}>
      <header className={styles.pageHeader}>
        <div className={styles.logo}></div>
        <h1 className={`${styles.headerBlock__pageHeading} ${CormorantBold.className}`}>
          {heading}
        </h1>
        <p className={`${styles.headerBlock__pageSubHeading} ${CormorantBoldItalic.className}`}>
          {`${name}, `}
          <span className={CormorantItalic.className}>{certification}</span>
        </p>
        <BookButton text="consultation" />
        <p className={`${CormorantMedium.className} ${styles.headerBlock__adjList}`}>{adjectiveList.map((word, index) => {
          return <span className={`${CormorantMedium.className}`} key={crypto.randomUUID()}>{word}</span>
        })}</p>
        <p className={`${styles.headerBlock__therapyText} ${semplicitaLight.className}`}>{therapyText}</p>
      </header>
      </div>
      <div className={styles.headerBlock__image}>
        <Image src={imgSrc} priority width={3173} height={4302} alt="Mirror mounted on wall" />
      </div>
      <div className={styles.headerMobileRule}></div>
      <MobileNavBar  />
    </div>
  );
}
