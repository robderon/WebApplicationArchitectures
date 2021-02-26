const fse = require('fs-extra');
const englishDictionary = require('./dictionary.json');

// This reformats "dictionary.json" into a JSON file that can be loaded into
// MongoDB via the `mongoimport` command, formatted in the way the dictionary
// examples expect.
(async function() {
  let formatted = '';
  for (const word in englishDictionary) {
    const entry = {
      word: word,
      definition: englishDictionary[word]
    }
    formatted += JSON.stringify(entry);
  }
  await fse.writeFile('./formatted-dictionary.json', formatted);
})();
