const inquirer = require('inquirer');
const { queries } = require('../utils/sql-queries');
const { imports } = require('../utils/importObjects/promptImports');
const db = require('../db/connection');

module.exports =
    init = async () => {
        const userAction = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'userChoice',
                    message: `How would you like to proceed?`,
                    choices: [
                        'View all employees',
                        'View employees by department',
                        'View employees by manager',
                        'View all roles',
                        'View all departments',
                        'Add an employee',
                        'Remove an employee',
                        'Add a role',
                        'Add a department',
                        'Update employee role',
                        'Get total utilized budget',
                        'Exit application'
                    ]
                },
            ]);
        switch (userAction.userChoice) {
            case 'View all employees':
                viewAllEmployees();
                break;
            case 'View employees by department':
                viewEmployeesByDepartment();
                break;
            case 'View employees by manager':
                viewEmployeesByManager();
                break;
            case 'View all roles':
                viewAllRoles();
                break;
            case 'View all departments':
                viewAllDepartments();
                break;
            case 'Add an employee':
                addEmployeePrompt();
                break;
            case 'Remove an employee':
                removeEmployeePrompt();
                break;
            case 'Add a role':
                addRolePrompt();
                break;
            case 'Remove a role':
                removeRolePrompt();
                break;
            case 'Add a department':
                addDepartmentPrompt();
                break;
            case 'Remove a department':
                removeDepartmentPrompt();
                break;
            case 'Update employee role':
                updateEmployeeRolePrompt();
                break;
            case 'Get total utilized budget':
                addSalaries();
                break;
            case 'Exit application':
                db.end();
                break;
        };
    };