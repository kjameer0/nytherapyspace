//fonts
import { semplicitaMedium } from '@/app/fonts/fonts';
//styles
import styles from './mobile-nav.module.css';
export default function MobileNavBar() {
  return (
    <nav className={`${styles.mobileNavBlock}`}>
      <ul className={`${semplicitaMedium.className} ${styles.mobileNavBlock__NavList}`}>
        <li>
          <a href="">home</a>
        </li>
        <li>
          <a href="">about</a>
        </li>
        <li>
          <a href="">services</a>
        </li>
        <li>
          <a href="">specialties</a>
        </li>
        <li>
          <a href="">blog</a>
        </li>
        <li>
          <a href="">contact</a>
        </li>
        <li>
          <a href="">booking</a>
        </li>
      </ul>
    </nav>
  );
}
