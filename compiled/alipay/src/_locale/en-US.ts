import type { Locale } from '.';

const enUS: Locale = {
  // locales for all components
  global: {
    placeholder: 'Please select',
    emptyText: 'No data available',
    okText: 'Ok',
    cancelText: 'Cancel',
  },
  calendar: {
    weekdayNames: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    title: 'YYYY year MM month',
    today: 'Today',
    start: 'Start',
    end: 'End',
    startAndEnd: 'Start/End',
  },
  rangePicker: {
    startPlaceholder: 'No selection started',
    endPlaceholder: 'Incomplete selection',
  },
  guideTour: {
    gotItText: 'Got it',
    nextStepText: 'Next step',
    prevStepText: 'Previous step',
    jumpText: 'Skip',
  },
  imageUpload: {
    uploadingText: 'Uploading',
    uploadfailedText: 'Upload failed',
  },
  pageContainer: {
    failed: {
      title: 'The page is experiencing some minor issues',
      message: "I'll try it later",
    },
    disconnected: {
      title: 'The network is a bit busy',
      message: 'Move your fingers to help repair',
    },
    empty: {
      title: "There's nothing here",
      message: 'Check out the others',
    },
    busy: {
      title: 'Congestion ahead',
      message: 'Try refreshing',
    },
  },
};

export default enUS;
