//ar-SA 阿拉伯语

import type { Locale } from '.';

const arSA: Locale = {
  // locales for all components
  global: {
    placeholder: 'يرجى الاختيار',
    emptyText: 'لا توجد بيانات حتى الآن',
    okText: 'تأكيد',
    cancelText: 'إلغاء',
  },
  calendar: {
    weekdayNames: [
      'الإثنين',
      'الثلاثاء',
      'الأربعاء',
      'الخميس',
      'الجمعة',
      'السبت',
      'الأحد',
    ],
    title: 'YYYY سنة  MM شهر',
    today: 'اليوم',
    start: 'ابدأ',
    end: 'النهاية',
    startAndEnd: 'البداية/النهاية',
  },
  rangePicker: {
    startPlaceholder: 'لم يبدأ الاختيار',
    endPlaceholder: 'لم يكتمل الاختيار',
  },
  guideTour: {
    gotItText: 'فهمت ذلك',
    nextStepText: 'الخطوة التالية',
    prevStepText: 'الخطوة السابقة',
    jumpText: 'تخطي',
  },
  imageUpload: {
    uploadingText: 'جارٍ التحميل',
    uploadfailedText: 'فشل في التحميل',
  },
  pageContainer: {
    failed: {
      title: 'تواجه الصفحة بعض المشكلات البسيطة',
      message: 'سأحاول ذلك لاحقًا',
    },
    disconnected: {
      title: 'الشبكة مشغولة بعض الشيء',
      message: 'حرّك إصبعك للمساعدة في الإصلاح',
    },
    empty: {
      title: 'لا يوجد شيء هنا',
      message: 'انظر إلى أشياء أخرى',
    },
    busy: {
      title: 'الازدحام الأمامي',
      message: 'جرّب الانتعاش.',
    },
  },
};

export default arSA;
