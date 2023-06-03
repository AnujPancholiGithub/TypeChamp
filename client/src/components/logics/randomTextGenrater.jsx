const randomizeArray = (array) => {
  const randomizedArray = [...array]; // Create a copy of the original array
  let index = 0;
  while (index < randomizedArray.length) {
    if (randomizedArray[index] === " ") {
      for (let j = index + 1; j < randomizedArray.length; j++) {
        const randomIndex = Math.floor(Math.random() * randomizedArray.length);
        if (
          randomizedArray[j] !== " " &&
          randomizedArray[randomIndex] !== " "
        ) {
          [randomizedArray[j], randomizedArray[randomIndex]] = [
            randomizedArray[randomIndex],
            randomizedArray[j],
          ];
        }
        index = j;
      }
    }
    index++;
  }

  return randomizedArray;
};
export default randomizeArray;
