const axios =  require('axios');
const fs = require('fs');
const { parse } = require('node-html-parser');

const { getRandomArrElement, rand } = require('./helpers'); 
const { SCP_ITEMS } = require('./consts'); 
const { 
  BITCOIN_LINK, 
  LEARN_JS_LINK, 
  SCP_LINK, 
  HABR_JS_INTERVIEW_QUESTIONS, 
  REFACTORING_GURU 
} = require('./links');

function getBitcoinChangeWeek() {
  return axios
    .get(BITCOIN_LINK)
    .then((res) => {
      return '```js ' +
            `1 ₿: ${res.data.USD.buy} 💵` +
            '```';
    })
    .catch(() => {
      return 'Cannot obtain data(';
    });
}


function getLearnJsRandomChapter() {
  const data = fs.readFileSync('learnJsLinks.json', 'utf8');
  return new Promise((res, rej) => data ? res(
    `Here's your link: ${LEARN_JS_LINK + getRandomArrElement(JSON.parse(data))}`
  ) : rej("Cannot obtain links"))
}


function getRandomScpObject() {
  return Promise.resolve(`*Here's your SCP link*: \n${SCP_LINK}${rand(SCP_ITEMS)}`);
}


function getRandomJsQuestion() {
  return Promise.resolve(
    `*Here's your random js interview question from habr*:\n${HABR_JS_INTERVIEW_QUESTIONS}/#${rand(70)}`)
}

function getRandomPatternGuru() {
  const data = fs.readFileSync('guruRefactor.json', 'utf8');
  return new Promise((res, rej) => data ? res(
    `Here's your link: ${REFACTORING_GURU + getRandomArrElement(JSON.parse(data))}`
  ) : rej("Cannot obtain links"))
}


module.exports = { 
  bitcoin: getBitcoinChangeWeek,
  learnJs: getLearnJsRandomChapter,
  scp: getRandomScpObject,
  jsQ: getRandomJsQuestion,
  patternGuru: getRandomPatternGuru
};