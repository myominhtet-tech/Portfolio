const weather = require(`./weather`);

// Join multiple arguments
const query = process.argv.slice(2).join("_").replace(`_`, ``);
//query: 90201
//query: cleveland_OH
//query:London_England
weather.get(query);