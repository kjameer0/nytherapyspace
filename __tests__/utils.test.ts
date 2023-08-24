import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { generateImageObject, generateSectionsObject, sectionObjType, sectionParagraphType, isSectionHeaderType, isSectionParagraphType, isSectionListType } from '../src/lib/utils/pageTypes';
import { getPageData } from '../src/lib/contentful-types';
import exp from 'constants';
describe('Page data ', () => {
  test('image object generator', async () => {
    const data = await getPageData('hi');
    if (data === undefined) throw new ReferenceError('no data');
    const imgObj = generateImageObject(data);
    if (imgObj === undefined) {
      throw new ReferenceError('no images');
    }
    expect(imgObj.headshot).toBe('https://images.ctfassets.net/wl06h2bz5cmo/5WyBmD8d64p8BuznncjldR/33635c315e8bff325f27878b93ba1683/Headshot.webp');
  });
  test('section object generator', async () => {
    const data = await getPageData('hi');
    if (data === undefined) throw new ReferenceError('no data');
    const sectionsObj = generateSectionsObject(data);
    if (sectionsObj === undefined) {
      throw new ReferenceError('no images');
    }
    const ready: sectionParagraphType = isSectionParagraphType(sectionsObj.ready) ? sectionsObj.ready : {content: ''};
    const ready2 = sectionsObj.ready as sectionParagraphType;
    expect(ready2.content).toBe('When you’re ready to take the first step toward your healing, contact me to schedule a free consultation.  I look forward to hearing from you.\n');
  })
});
