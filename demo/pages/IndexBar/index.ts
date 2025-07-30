/// #if ALIPAY
const nameMap = {
  'A': ['Alice', 'Andy', 'Amanda'],
  'B': ['Bob', 'Brian', 'Bella'],
  'C': ['Cathy', 'Carl', 'Chris'],
  'D': ['David', 'Diana', 'Derek'],
  'E': ['Eva', 'Evan', 'Eddie'],
  'F': ['Fiona', 'Frank', 'Fred'],
  'G': ['George', 'Grace', 'Gavin'],
  'H': ['Helen', 'Hank', 'Harry'],
  'I': ['Ivy', 'Ian', 'Isaac'],
  'J': ['Jack', 'Jill', 'James'],
  'K': ['Karen', 'Kyle', 'Kurt'],
  'L': ['Laura', 'Liam', 'Leo'],
  'M': ['Megan', 'Mike', 'Mona'],
  'N': ['Nina', 'Nick', 'Nancy'],
  'O': ['Olivia', 'Oscar', 'Owen'],
  'P': ['Paul', 'Pam', 'Pete'],
  'Q': ['Quincy', 'Quinn', 'Queen'],
  'R': ['Rachel', 'Ryan', 'Rita'],
  'S': ['Sam', 'Sara', 'Steve'],
  'T': ['Tom', 'Tina', 'Tim'],
  'U': ['Uma', 'Ulysses', 'Ursula'],
  'V': ['Violet', 'Victor', 'Vince'],
  'W': ['Wendy', 'Will', 'Wanda'],
  'X': ['Xander', 'Xenia', 'Xavier'],
  'Y': ['Yara', 'Yuri', 'Yvonne'],
  'Z': ['Zoe', 'Zach', 'Zane'],
};
/// #endif
Page({
  data: {
    /// #if ALIPAY
    nameMap,
    /// #endif
    items: [],
    current: '',
  },
  onLoad() {
    // 异步获取数据
    setTimeout(() => {
      this.setData({
        /// #if ALIPAY
        nameMap,
        /// #endif
        items: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((u) => {
          return { label: u, disablePreview: true };
        }),
        current: 'S',
      });
    }, 1000);
  },
  onChange(...args) {
    /// #if ALIPAY
    const [item, index] = args;
    console.log(item, index);
    this.setData({ current: item.label });
    /// #endif
    /// #if WECHAT
    console.log(...args[0].detail);
    this.setData({ current: args[0].detail[0].label });
    /// #endif
  },
});
