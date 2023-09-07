import styles from './heroimage.module.css';
import { CormorantBold } from '@/app/fonts/fonts';
export default function HeroImage({
  mainHeading,
  subHeading,
}: {
  mainHeading: string;
  subHeading: string;
}) {
  return (
    <header className={styles.heroHeader}>
      <h2
        className={`${styles['heroHeader__mainHeading']} ${CormorantBold.className} ${styles.teenSection__mainHeading}`}
      >
        {mainHeading}
      </h2>
      <p className={`${styles['heroHeader__subHeading']} ${CormorantBold.className}`}>
        {subHeading}
      </p>
    </header>
  );
}
