const db = require('./db/connection');
const prompts = require('./lib/prompts');

try {
    console.log(
        `
        &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
        &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
        *********************************
        WELCOME TO YOUR EMPLOYEE TRACKER!
        *********************************
        &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
        &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&`
    )
    init();
} catch (err) {`Something went wrong: ${err}`};