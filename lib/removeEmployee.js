const inquirer = require('inquirer');
const deleteEmpFunction = require('../utils/sql-queries');
const db = require('../db/connection');
let employees = [];

module.exports =
    removeEmployeePrompt = () => {
        db.query(`SELECT CONCAT(first_name, ' ', last_name) AS employee FROM employees`, async function (err, res) {
                if (err) {
                    console.log(`Something went wrong: ${err}`);
                    return;
                }
                resObjArr = JSON.parse(JSON.stringify(res));
                for (res of resObjArr) {
                    employees.push(res.employee)
                }

                const employee = await inquirer
                    .prompt([
                        {
                            type: 'list',
                            name: 'employee',
                            message: `Which employee would you like to remove?`,
                            choices: employees
                        }
                    ]);
                deleteEmployee(employee.employee);
        });
    };