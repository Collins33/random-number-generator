/**
 * function to generate Phone numbers
 */

const generatePhoneNumbers = (generatedNumbers, amount) => {
  let number;
  for (let i = 0; i < amount; i++) {
    number = `0${Math.floor(Math.random() * 1000000000 + 1)}`;
    if (
      !generatedNumbers.includes(number) &&
      generatedNumbers.length <= 10000
    ) {
      generatedNumbers.push(number);
    }
    number = `0${Math.floor(Math.random() * 1000000000 + 1)}`;
  }
  localStorage.setItem("generatedContacts", JSON.stringify(generatedNumbers));
  const generatedContacts = generatedNumbers;
  return generatedContacts;
};

export default generatePhoneNumbers;
