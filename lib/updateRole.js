const inquirer = require('inquirer');
const db = require('../db/connection');
const updateRoleFunction = require('../utils/sql-queries');
const { getters } = require('../utils/getters');

module.exports =
    updateEmployeeRolePrompt = async function () {
        const updateRole = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'employee',
                    message: `What is the name of the employee you would like to update?`,
                    choices: await getEmployees()
                },
                {
                    type: 'list',
                    name: 'role',
                    message: `What is this employee's new role?`,
                    choices: await getRoles()
                },
                {
                    type: 'list',
                    name: 'dept',
                    message: `What is the employee's department?`,
                    choices: await getDepartments()
                }
            ]);
                updateEmployeeRole(updateRole.employee.charAt(0), updateRole.role.charAt(0), updateRole.dept.charAt(0));
    };