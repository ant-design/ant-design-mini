import type { Locale } from '.';

const itIT: Locale = {
  // locales for all components
  global: {
    placeholder: 'Seleziona',
    emptyText: 'Nessun dato disponibile',
    okText: 'Certamente',
    cancelText: 'Annulla',
  },
  calendar: {
    weekdayNames: [
      'Lunedì',
      'Martedì',
      'Mercoledì',
      'Giovedì',
      'Venerdì',
      'Sabato',
      'Domenica',
    ],
    title: 'YYYY anno MM mese',
    today: 'Oggi',
    start: 'Inizia',
    end: 'Fine',
    startAndEnd: 'Inizio/Fine',
  },
  rangePicker: {
    startPlaceholder: 'Nessuna selezione avviata',
    endPlaceholder: 'Selezione non completata',
  },
  guideTour: {
    gotItText: 'Capito',
    nextStepText: 'Passo successivo',
    prevStepText: 'Passaggio precedente',
    jumpText: 'Salta',
  },
  imageUpload: {
    uploadingText: 'Caricamento in corso',
    uploadfailedText: 'Caricamento non riuscito',
  },
  pageContainer: {
    failed: {
      title: 'La pagina ha riscontrato alcuni problemi minori',
      message: 'Lo proverò più tardi',
    },
    disconnected: {
      title: "La rete è un po' occupata",
      message: 'Muovi le dita per ripararlo',
    },
    empty: {
      title: "Non c'è niente qui",
      message: 'Guarda gli altri',
    },
    busy: {
      title: 'Congestione in vista',
      message: 'Prova a ricaricare',
    },
  },
};

export default itIT;
