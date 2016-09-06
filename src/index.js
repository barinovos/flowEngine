import flowEngine from './helpers/flow-engine';

// Extract data from json file - you can change it to play
let {data, rules} = require('./flow.json');

// Run engine
flowEngine(data, rules);
