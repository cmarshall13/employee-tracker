const inquirer = require('inquirer');
const db = require('../db/connection');
const removeDeptFunction = require('../utils/sql-queries');
let departments = [];

module.exports = 
    removeDepartmentsPrompt = () => {
        db.query(`SELECT * FROM departments`, async function (err, res){
            if (err) {
                console.log(`Something went wrong: ${err}`);
                return;
            }
            resObjArr = JSON.parse(JSON.stringify(res));
            for (res of resObjArr) {
                departments.push(res.name)
            }

            const department = await inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'department',
                        message: `Which department would you like to remove?`,
                        choices: departments
                    }
                ]);
            deleteDepartment(department.department);
        });
    };