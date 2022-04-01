Page({
  data: {
    name: ['item-1'],
  },
  handleChange(e) {
    this.setData({ name: e });
    console.log(e);
  },
  handleControl() {
    const getRandom = () => {
      const random = Math.random();
      return random < 0.25 ? 0 : random < 0.5 ? 1 : random < 0.75 ? 2 : 3;
    };
    const { name } = this.data;
    let newName = [];
    if (name.length === 1) {
      let randonIndex;
      // eslint-disable-next-line no-constant-condition
      while (true) {
        randonIndex = getRandom();
        if (randonIndex !== Number(name[0].substring(5))) {
          break;
        }
      }
      newName = [`item-${randonIndex}`];
    } else {
      newName = [`item-${getRandom()}`];
    }
    this.setData({
      name: newName,
    });
  },
});
