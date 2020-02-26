const makeUser = ({ id, friends = [] } = {}) => ({
    friends,
    id,
    getFriends() {
      return this.friends;
    },
});

const users = [
    makeUser({ id: 2 }),
    makeUser({ id: 8 }),
    makeUser({ id: 7 }),
    makeUser({ id: 100 }),
];

const user1 = makeUser({ friends: [users[0], users[1], users[3]] });
const user2 = makeUser({ friends: [users[0], users[3], users[2]] });

const getMutualFriends = (user1, user2) => {
    const userFriends1 = user1.getFriends();
    const userFriends2 = user2.getFriends();
    const idUsersFriends2 = userFriends2.map(({id}) => id);
    const result = userFriends1.filter((user) => idUsersFriends2.includes(user.id));
    return [...result];
}

console.log(getMutualFriends(user1, user2));

// BEGIN тут без map даже можно было. просто по юзерам.
export const getMutualFriends = (user1, user2) => {
    const friends1 = user1.getFriends();
    const friends2 = user2.getFriends();
    // the esiest way to do it is using intersection function from lodash
    const mutualFriends = friends1.filter((user) => friends2.includes(user));
    return mutualFriends;
  }
  // END
