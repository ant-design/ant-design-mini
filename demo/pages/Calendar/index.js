Page({
  data: {
    calendarTwo: {
      monthRange: [{
        year: 2023,
        month: 1,
        day: 1
      }, {
        year: 2023,
        month: 4,
        day: 1
      }]
    }
  },
  onChange(current) {
    console.log(current);
  },
});
