const make = () => {
    return [];
}
  
const set = (map, key, value) => {
    const hash = CRC32.str(key);
    const index =  Math.abs(hash) % 1000;

    if (map.length !== 0) {

      if (typeof(map[index]) == 'undefined' || map[index][0] === key) {
          map[index] = [key, value];
          return true;
      } else {
        return false;
        
      }
    }
    map[index] = [key, value];
    return true;
}
  
const get = (map, key, defaultValue = null) => {
    const hash = CRC32.str(key);
    const index = Math.abs(hash % 1000);
    console.log(map[index]);

    if (map[index]) {
      if (map[index][0] != key) {
        return defaultValue;
      } 
  
      if (map[index][0] === key) {
        return map[index][1];
      }
    } else {
      return defaultValue;
    }

}

const map = make();
set(map, 'aaaaa0.462031558722291', 'vvv');
set(map, 'aaaaa0.0585754039730588', 'boom!');
const result1 = get(map, 'aaaaa0.462031558722291');
console.log(result1);

const result2 = get(map, 'aaaaa0.0585754039730588');
console.log(result2);

// BEGIN решение учителя
const getIndex = (key) => Math.abs(crc32.str(key)) % 1000;

const make = () => [];

const hasCollision = (map, key) => {
  const index = getIndex(key);
  const [currentKey] = map[index];
  return currentKey !== key;
};

const set = (map, key, value) => {
  const index = getIndex(key);
  if (map[index] && hasCollision(map, key)) {
    return false;
  }
  map[index] = [key, value];

  return true;
};

const get = (map, key, defaultValue = null) => {
  const index = getIndex(key);
  if (!map[index] || hasCollision(map, key)) {
    return defaultValue;
  }
  const [, value] = map[index];

  return value;
};

export { make, set, get };
// END





