'use client';
//react
import { useState } from 'react';
//fonts
import { semplicitaLightItalic } from '@/app/fonts/fonts';
//styles
import styles from './faq-list.module.css';
export default function FaqList({
  questionArr,
}: {
  questionArr: { mainHeading: string; subHeading?: string }[];
}) {
  //start state at infinity to no question text starts out opened
  const [visiblePara, setVisiblePara] = useState(-1);
  function handleQuestionToggle(e: React.MouseEvent<HTMLButtonElement>, index: number) {
    if(index === visiblePara) {
      setVisiblePara(-1)
    } else {
      setVisiblePara(index)
    }
  }
  return (
    <ul className={styles.questionList}>
      {questionArr.map((question, index) => {
        return (
          <li className={`${styles.questionList__questionItem}`} key={crypto.randomUUID()}>
            <button
              className={`${semplicitaLightItalic.className} ${styles.questionItem__questionText}`}
              onClick={(e) => handleQuestionToggle(e, index)}
            >
              <span className={styles.plusSign}>{visiblePara === index ? '-' : '+'}</span>
              <span className={styles.questionTextSpan}>{question.mainHeading}</span>
            </button>
            <div
              className={styles.questionItem__paraWrapper}
              style={{ display: visiblePara === index ? 'block' : 'none' }}
            >
              {question.subHeading?.split('%split%').map((para, index) => {
                return <p key={crypto.randomUUID()}>{para}</p>;
              })}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
