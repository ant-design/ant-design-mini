import type { Locale } from '.';

const trTR: Locale = {
  // locales for all components
  global: {
    placeholder: 'Lütfen seçin',
    emptyText: 'Henüz veri yok.',
    okText: 'Kesinlikle',
    cancelText: 'İptal',
  },
  calendar: {
    weekdayNames: [
      'Pazartesi',
      'Salı',
      'Çarşamba',
      'Perşembe',
      'Cuma',
      'Cumartesi',
      'Pazar',
    ],
    title: 'YYYY yıl MM ay',
    today: 'Bugün',
    start: 'Başla',
    end: 'Bitiyor',
    startAndEnd: 'Başlangıç/Bitiş',
  },
  rangePicker: {
    startPlaceholder: 'Seçim henüz başlamadı',
    endPlaceholder: 'Seçim tamamlanmadı',
  },
  guideTour: {
    gotItText: 'Anladım',
    nextStepText: 'Sonraki adım',
    prevStepText: 'Önceki adım',
    jumpText: 'Atla',
  },
  imageUpload: {
    uploadingText: 'Yükleniyor',
    uploadfailedText: 'Yükleme başarısız oldu',
  },
  pageContainer: {
    failed: {
      title: 'Sayfa bazı küçük sorunlar yaşıyor',
      message: 'Daha sonra deneyeceğim',
    },
    disconnected: {
      title: 'Ağ biraz meşgul',
      message: 'Düzeltmeye yardımcı olmak için parmağınızı hareket ettirin',
    },
    empty: {
      title: 'Burada hiçbir şey yok',
      message: 'Diğerlerine bir göz atın',
    },
    busy: {
      title: 'Önümüzde trafik sıkışıklığı',
      message: 'Yenilemeyi deneyin',
    },
  },
};

export default trTR;
