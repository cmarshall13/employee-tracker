const inquirer = require('inquirer');
const db = require('../db/connection');
const deleteRoleFunction = require('../utils/sql-queries');
let roles = [];

module.exports = 
    removeRolePrompt = () => {
        db.query(`SELECT * FROM roles`, async function (err, res) {
            if (err) {
                console.log(`Something went wrong: ${err}`);
                return;
            }
            resObjArr = JSON.parse(JSON.stringify(res));
            for (res of resObjArr) {
                roles.push(res.title)
            }

            const role = await inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'role',
                        message: `Which role would you like to remove?`,
                        choices: roles
                    }
                ]);
            deleteRoleFunction(role.role);
        });
    };