import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { camelCase } from 'lodash';

// BEGIN (write your solution here)
export default (doc) => {
  const elements = doc.body.getElementsByTagName('*');
  elements.forEach(element => {
    const currentClassName = [...element.classList];
    currentClassName.filter((clas) => element.classList.replace(clas, camelCase(clas)));
  });
}
// END


// BEGIN
export default (doc) => {
    for (const element of doc.body.getElementsByTagName('*')) { // eslint-disable-line
      const process = (item) => element.classList.replace(item, camelCase(item));
      element.classList.forEach(process);
    }
  };
  // END
  