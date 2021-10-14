const inquirer = require('inquirer');
const db = require('../db/connection');
const addEmpFunction = require('../utils/sql-queries');
const { getters } = require('../utils/getters');

module.exports = 
    addEmployeePrompt = async () => {
        const employee = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: `What is the employee's first name?`
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: `What is the employee's last name?`
                },
                {
                    type: 'list',
                    name: 'role',
                    message: `What is the employee's role?`,
                    choices: await getRoles()
                },
                {
                    type: 'list',
                    name: 'manager',
                    message: `Who is the employee's manager?`,
                    choices: await getManagers()
                },
                {
                    type: 'list',
                    name: 'department',
                    message: `Which department does the employee work for?`,
                    choices: await getDepartments()
                }
            ]);
        addEmployee(
            employee.firstName,
            employee.lastName,
            employee.role.charAt(0),
            employee.manager.charAt(0),
            employee.department.charAt(0)
        );
    };