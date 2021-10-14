const inquirer = require('inquirer');
const db = require('../db/connection');
const { getDepartments } = require('../utils/getters');
const addRoleFunction = require('../utils/sql-queries');

module.exports = 
    addRolePrompt = async () => {
        const role = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: `What is the title of this new role?`
                },
                {
                    type: 'list',
                    name: 'department',
                    message: `Which department does this role belong to?`,
                    choices: await getDepartments()
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: `What is the annual salary for this role?`
                }
            ])
        role.department= role.department.charAt(0);
        addRoleFunction(role.title, role.department, role.salary);
    };