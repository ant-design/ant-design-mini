export default [{
  label: '学生',
  value: 'stu',
  children: [{
    label: '一年级',
    value: 'grade1',
    children: [
      {
        label: '1班',
        value: 'class1-1'
      },
      {
        label: '2班',
        value: 'class1-2'
      },
    ]
  },{
    label: '二年级',
    value: 'grade2',
    children: [
      {
        label: '1班',
        value: 'class2-1'
      },
      {
        label: '2班',
        value: 'class2-2'
      },
      {
        label: '3班',
        value: 'class2-3'
      },
    ]
  },{
    label: '三年级',
    value: 'grade3',
    children: [
      {
        label: '1班',
        value: 'class3-1'
      },
      {
        label: '2班',
        value: 'class3-2'
      },
      {
        label: '3班',
        value: 'class3-3'
      },
    ]
  }]
}, {
  label: '教职工',
  value: 'staff',
  children: [{
    label: '后勤部',
    value: 'department1'
  },{
    label: '教学部',
    value: 'department2'
  },{
    label: '保卫科',
    value: 'department3'
  }]

}]
