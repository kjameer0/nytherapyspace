import localFont from 'next/font/local';
//Cormorant Infant
export const CormorantBold = localFont({
  src: './font-files/Cormorant_Infant/CormorantInfant-Bold.ttf',
});
export const CormorantBoldItalic = localFont({
  src: './font-files/Cormorant_Infant/CormorantInfant-BoldItalic.ttf',
});
export const CormorantItalic = localFont({
  src: './font-files/Cormorant_Infant/CormorantInfant-Italic.ttf',
});
export const CormorantMedium = localFont({
  src: './font-files/Cormorant_Infant/CormorantInfant-Medium.ttf',
});

//Semplicita Pro
export const semplicitaRegular = localFont({ src: './font-files/semplicitapro/SemplicitaPro.otf' });
export const semplicitaMedium = localFont({
  src: './font-files/semplicitapro/SemplicitaPro-Medium.otf',
});
export const semplicitaLight = localFont({
  src: './font-files/semplicitapro/SemplicitaPro-Light.otf',
});
export const semplicitaLightItalic = localFont({
  src: [
    { path: './font-files/semplicitapro/SemplicitaPro-LtIt.otf', weight: '400', style: 'normal' },
    {
      path: './font-files/semplicitapro/SemplicitaPro-BoldItalic.otf',
      weight: '800',
      style: 'bold',
    },
  ],
});

//Poppins
export const poppinsSemiBold = localFont({ src: './font-files/Poppins/Poppins-SemiBold.ttf' });
