//data
import { getButtonText } from '@/lib/utils/contentful-functions';
//fonts
import { semplicitaRegular, semplicitaLight } from '@/app/fonts/fonts';
//styles
import styles from './book-button.module.css';

export default async function BookButton({ text }: { text: 'consultation' | 'book' }) {
  const { consultation, bookNow } = await getButtonText();
  return (
    <button className={`${styles.button} ${semplicitaLight.className}`}>
      {text === 'consultation' ? consultation : bookNow}
    </button>
  );
}
