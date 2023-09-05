import dayjs from 'dayjs'

Page({
  data: {
    ee: 1,
  },
  hello() {
    console.log(dayjs())
    console.log("this", this);
    return '123'
  }
});
