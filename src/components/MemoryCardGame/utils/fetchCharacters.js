const getRandomNumbers = (numbersLength) => {
  const randomNumbers = [];
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  let randomNumber = getRandomNumber(1, 826);

  while (randomNumbers.length < numbersLength) {
    while (randomNumbers.includes(randomNumber)) {
      randomNumber = getRandomNumber(1, 826);
    }
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
};

const fetchCharacters = async (setState, charactersLength) => {
  try {
    const characters = [];
    const randomNumbers = getRandomNumbers(charactersLength);
    const url = `https://rickandmortyapi.com/api/character/${randomNumbers}`;
    const response = await fetch(url, { mode: 'cors' });

    if (!response.ok) { throw (response.status); }

    const data = await response.json();

    data.forEach(
      (character) => characters.push({ url: character.image, name: character.name }),
    );

    setState(characters);
  } catch (err) {
    console.log(`Status response: ${err}`);
  }
};

export default fetchCharacters;
