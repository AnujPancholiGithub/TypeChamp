const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";
const SYMBOLS = "~!@#$%^&*()_-+={}[]|\\'\"<>:;,./?";
const NUMBERS = "0123456789";

export const TESTER_KEYS = [
  ...ALPHABETS,
  " ",
  "Space",
  ...ALPHABETS.toUpperCase(),
  ...SYMBOLS,
  ...NUMBERS,
];

console.log(TESTER_KEYS);

const keyValidation = (key) => {
  return TESTER_KEYS.includes(key);
};

export default keyValidation;
