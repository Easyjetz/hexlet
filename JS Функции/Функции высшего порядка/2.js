
const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];

const takeOldest = (users, num) => {
    let sortUser = [];
    const result = [];

    for (const {name, birthday} of users) {
        const date = Date.parse(birthday)
        sortUser.push(date);
    }
    sortUser = _.sortBy(sortUser);
    let count = 0;
    for (;num > 0; num -= 1) {
        for (const {name, birthday} of users) {
            if (sortUser[count] == Date.parse(birthday)) {
                result.push({name, birthday}); 
            }
        }
        count++;
    }
    console.log(result);
 
}
// BEGIN
const takeOldest = (users, count = 1) => {
    const sorted = sortBy(users, ({ birthday }) => Date.parse(birthday));
    return sorted.slice(0, count);
  };
  
  export default takeOldest;
  // END
console.log(takeOldest(users, 2));