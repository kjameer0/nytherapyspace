//fonts
import { semplicitaMedium, semplicitaRegular } from '@/app/fonts/fonts';
//styles
import styles from './nav.module.css';
export default function NavBar() {
  return (
    <nav className={`${styles.NavBlock}`}>
      <ul className={`${semplicitaRegular.className} ${styles.NavBlock__NavList}`}>
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
