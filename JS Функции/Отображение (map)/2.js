const users = [
    {
      name: 'Tirion',
      children: [
        { name: 'Mira', birdhday: '1983-03-23' },
      ],
    },
    { name: 'Bronn', children: [] },
    {
      name: 'Sam',
      children: [
        { name: 'Aria', birdhday: '2012-11-03' },
        { name: 'Keit', birdhday: '1933-05-14' },
      ],
    },
    {
      name: 'Rob',
      children: [
        { name: 'Tisha', birdhday: '2012-11-03' },
      ],
    },
  ];

const getChildren = (users) => {
    const child = users.map(({children}) => children);
    return child.flat();
}
console.log(getChildren(users));

 
