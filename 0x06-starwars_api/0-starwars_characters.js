#!/usr/bin/node
const request = require('request');

if (process.argv.length < 3) {
  throw new Error('you must enter the id of the film');
}
const req = {
  url: `https://swapi-api.alx-tools.com/api/films/${process.argv[2]}`,
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Accept-Charset': 'utf-8'
  }
};
function getCharacters (chr = null) {
  return new Promise((resolve, reject) => {
    if (chr !== null) {
      req.url = chr;
      request.get(req, (error, response, body) => {
        if (error) {
          throw new Error(error);
        }
        if (response.statusCode === 200) {
          const nm = JSON.parse(body).name;
          resolve(nm);
        }
      });
    } else {
      let characters;
      request.get(req, (error, response, body) => {
        if (error) {
          throw new Error(error);
        }
        if (response.statusCode === 200) {
          characters = JSON.parse(body).characters;
          resolve(characters);
        }
      });
    }
  });
}

const reque = getCharacters();
const data = reque.then((res) => {
  return res;
}).catch((err) => {
  console.log(err);
});
async function main () {
  const characters = await data;
  for (let i = 0; i < characters.length; i++) {
    const name = await getCharacters(characters[i]);
    console.log(name);
  }
}

main();
