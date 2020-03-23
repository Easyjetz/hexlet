const getIn = (obj, arr) => {
    let size = arr.length;
    if (size === 0) return null;

    for (const key of arr) {
        if (obj.hasOwnProperty(key)) {
            obj = obj[key];
            size--;
        } else {
            return null;
        }
        
    }
    if (size === 0) return obj;
}

// решение учителя

// BEGIN
const getIn = (data, keys) => {
    let current = data;
    for (const key of keys) {
      if (!current.hasOwnProperty(key)) {
        return null;
      }
      current = current[key];
    }
  
    return current;
  };
  
  export default getIn;
  // END


const data = {
    user: 'ubuntu',
    hosts: {
      0: {
        name: 'web1',
      },
      1: {
        name: 'web2',
        null: 3,
        active: false,
      },
    },
  };

  console.log(getIn(data, ['user']));
  