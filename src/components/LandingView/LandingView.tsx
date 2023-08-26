import styles from './landingview.module.css';
//components
import Image from 'next/image';
import BookButton from '../BookButton/BookButton';
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
    <div className="headerBlock">
      <header className={styles.pageHeader}>
        <h1 className={`${CormorantBold.className} ${styles.headerBlock__pageHeading}`}>
          {heading}
        </h1>
        <p className={`${CormorantBoldItalic.className} ${styles.headerBlock__pageSubHeading}`}>
          {`${name}, `}
          <span className={CormorantItalic.className}>{certification}</span>
        </p>
        <BookButton text="consultation" />
        <p className={`${CormorantMedium.className}`}>{adjectiveList.join(' ')}</p>
        <p className={`${semplicitaLight.className}`}>{therapyText}</p>
      </header>
      <div className={styles.headerBlock__image}>
        <Image src={imgSrc} priority width={150} height={150} alt="Mirror mounted on wall" />
      </div>
    </div>
  );
}
