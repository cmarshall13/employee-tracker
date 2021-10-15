const consoleTable = require('console.table');
const db = require('../db/connection');
const prompts = require('../lib/prompts');

viewAllDepartments = () => {
    const query = `SELECT * FROM departments`;
    db.query(query, function (err, res) {
        if (err) {
            console.log(`Something went wrong: ${err}`);
            return;
        }
        console.table(`\n\nALL DEPARTMENTS`, res);
        console.log(`Press UP or DOWN to continue...`);
    });
    init();
};

viewAllRoles = () => {
    const query = `SELECT roles.id, roles.title, departments.name AS department, roles.salary
                    FROM roles
                    LEFT JOIN departments ON roles.department_id = departments.id`;
    db.query( query, function (err, res) {
        if (err) {
            console.log(`Something went wrong" ${err}`);
            return;
        }
        console.table(`\n\nALL ROLES, res`);
        console.log(`Press UP or DOWN to continue...`);
    });
    init();
};