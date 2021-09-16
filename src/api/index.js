const axios = require('axios');

// const getCharacters = async () => axios.get('https://rickandmortyapi.com/api/character/1,671');
const getCharacters = async () => axios.get('https://rickandmortyapi.com/api/character/?page=2');

module.exports = {
  getCharacters,
};
