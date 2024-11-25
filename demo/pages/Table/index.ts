const nameArr = [
  '小明',
  '小何',
  '小花',
  '小美',
  '小白',
  '小黑',
  '小帅',
  '阿伟',
];
const sexArr = ['男', '女'];
const ageArr = ['40', '18', '32', '20', '33', '48', '28', '38'];
const favoriteArr = ['羽毛球', '乒乓球', '篮球', '桌球'];
const addressArr = ['北京', '上海', '浙江', '广州'];

function getRandomNumber(n) {
  return Math.floor(Math.random() * n);
}

Page({
  data: {
    dataSource: Array.from({ length: 7 }).map((v, i) => ({
      key: i,
      name: nameArr[i],
      sex: sexArr[getRandomNumber(sexArr.length)],
      age: ageArr[i],
      extra: '测试',
      favorite: favoriteArr[getRandomNumber(favoriteArr.length)],
      address: addressArr[getRandomNumber(addressArr.length)],
      order: i,
    })),
    columns: [
      {
        title: '序号',
        dataIndex: 'order',
        key: 'order',
        width: 150,
        fixed: true,
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: 150,
        fixed: true,
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        textAlignRight: true,
        width: 150,
        sorter: true,
        // 自定义排序
        // onSort: async (sorterStatus) => {
        //   console.info('onSort', sorterStatus);
        //   const data = Array.from({ length: 3 }).map((v, i) => ({
        //     key: i,
        //     name: randomName[getRandomNumber(randomName.length)],
        //     favorite: randomFavorite[getRandomNumber(randomFavorite.length)],
        //   }));
        //   return await Promise.resolve(data);
        // }
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        width: 150,
        // fixed: true,
      },
      {
        title: '爱好',
        dataIndex: 'favorite',
        key: 'favorite',
        width: 250,
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
        width: 250,
      },
    ],
    fullColumns: [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        textAlignRight: true,
        sorter: true,
        // 自定义排序
        // onSort: async (sorterStatus) => {
        //   console.info('onSort', sorterStatus);
        //   const data = Array.from({ length: 3 }).map((v, i) => ({
        //     key: i,
        //     name: randomName[getRandomNumber(randomName.length)],
        //     favorite: randomFavorite[getRandomNumber(randomFavorite.length)],
        //   }));
        //   return await Promise.resolve(data);
        // }
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
        textAlignRight: true,
      },
    ],
  },
});
