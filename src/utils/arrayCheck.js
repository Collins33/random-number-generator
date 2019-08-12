/**
 * Function to check if array is empty
 * @param {Array} generateNumberArray
 * @return {Boolean}
 */

const checkArray = generateNumberArray => {
  const arrayLength = generateNumberArray.length;
  if (arrayLength < 1) {
    return false;
  } else if (arrayLength >= 1) {
    return true;
  }
};

export default checkArray;
