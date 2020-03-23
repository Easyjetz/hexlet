const users = [
    {
      name: 'Tirion',
      friends: [
        { name: 'Mira', gender: 'female' },
        { name: 'Ramsey', gender: 'male' },
      ],
    },
    { name: 'Bronn', friends: [] },
    {
      name: 'Sam',
      friends: [
        { name: 'Aria', gender: 'female' },
        { name: 'Keit', gender: 'female' },
      ],
    },
    {
      name: 'Rob',
      friends: [
        { name: 'Taywin', gender: 'male' },
      ],
    },
  ];

const getGirlFriends = (users) => {
    // важная штука
    const girls = users.filter(({friends}) => friends.length > 0);
    const a = [];
    for (const {friends} of girls) {
        a.push(friends);
    } 
    console.log(a);
    const c = a.flat();
    console.log(c);
    
    const b = c.filter(({gender}) => gender === 'female');
    console.log(b);

    // еще более важная штука(сначала нужно делать map, чтобы дойти до интересующих элементов)

    const f1 = users.map(({friends}) => friends);
    const f2 = f1.flat().filter(({gender}) => gender == 'female');
    console.log(f1);
    console.log(f2);
    
    const test2 = users.filter(({filter}) => {({gender}) => gender === 'female'});  
}

getGirlFriends(users);

// BEGIN учитель(вроде то же самое)
export default (users) => {
    const friendsOfUsers = users.map(({ friends }) => friends);
    return friendsOfUsers.flat().filter(({ gender }) => gender === 'female');
  };
  // END