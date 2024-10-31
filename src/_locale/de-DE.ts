import type { Locale } from '.';

const deDE: Locale = {
  // locales for all components
  global: {
    placeholder: 'Bitte wählen Sie',
    emptyText: 'Keine Daten verfügbar',
    okText: 'Bestimmt',
    cancelText: 'Abbrechen',
  },
  calendar: {
    weekdayNames: [
      'Montag',
      'Dienstag',
      'Mittwoch',
      'Donnerstag',
      'Freitag',
      'Samstag',
      'Sonntag',
    ],
    title: 'YYYY Jahr MM Monat',
    today: 'Heute',
    start: 'Start',
    end: 'Ende',
    startAndEnd: 'Anfang/Ende',
  },
  rangePicker: {
    startPlaceholder: 'Die Auswahl hat noch nicht begonnen',
    endPlaceholder: 'Unvollständige Auswahl',
  },
  guideTour: {
    gotItText: 'Ich habe es verstanden',
    nextStepText: 'Nächster Schritt',
    prevStepText: 'Vorheriger Schritt',
    jumpText: 'Überspringen',
  },
  imageUpload: {
    uploadingText: 'Hochladen',
    uploadfailedText: 'Der Upload ist fehlgeschlagen',
  },
  pageContainer: {
    failed: {
      title: 'Auf der Seite treten einige kleinere Probleme auf',
      message: 'Ich werde es später ausprobieren',
    },
    disconnected: {
      title: 'Das Netzwerk ist etwas beschäftigt',
      message: 'Bewegen Sie bitte Ihre Finger, um zu helfen, es zu reparieren.',
    },
    empty: {
      title: 'Hier gibt es nichts.',
      message: 'Schauen Sie sich auch die anderen an.',
    },
    busy: {
      title: 'Stau voraus',
      message: 'Versuchen Sie es erneut.',
    },
  },
};

export default deDE;
