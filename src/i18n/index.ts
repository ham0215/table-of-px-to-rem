import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { MAX_FONT_SIZE } from 'Table/FontSizeEditor/useFontSizeEditor';

const resources = {
  en: {
    translation: {
      title: 'Conversion table from px to rem.',
      description: `Enter font-size (px) to convert px from 1 to 1500 to rem. You can specify 1 to ${MAX_FONT_SIZE} for font-size (px).`,
      copied: 'Copied rem to the clipboard!!',
    },
  },
  ja: {
    translation: {
      title: 'pxからremへ変換',
      description: `font-size(px)を入力すると、1〜1500pxに対応するremを表示します。font-sizeには1〜${MAX_FONT_SIZE}を入力してください。`,
      copied: 'クリップボードにコピーしました!!',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
