const inquirer = require('inquirer');
const addDeptFunction = require('../utils/sql-queries');

module.exports =
    addDepartmentPrompt = async () => {
        const department = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'department',
                    message: `What is the name of the new department?`
                }
            ]);
        addDepartment(department.department);
    };