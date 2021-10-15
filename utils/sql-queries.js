const consoleTable = require('console.table');
const db = require('../db/connection');
const prompts = require('../lib/prompts');

viewAllDepartments = () => {
    const query = `SELECT * FROM departments;`;
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
                    LEFT JOIN departments ON roles.department_id = departments.id;`;
    db.query( query, function (err, res) {
        if (err) {
            console.log(`Something went wrong: ${err}`);
            return;
        }
        console.table(`\n\nALL ROLES, res`);
        console.log(`Press UP or DOWN to continue...`);
    });
    init();
};

viewAllEmployees = () => {
    const query = `SELECT employees.id, employees.first_name, employees.last_name,
                    roles.title AS title, departments.name AS department,
                    roles.salary AS salary, managers.name AS manager
                    FROM EMPLOYEES
                    LEFT JOIN roles ON employees.role_id = roles.id
                    LEFT JOIN departments ON employees.dept_id = departments.id
                    LEFT JOIN managers ON employees.manager_id = managers.id;`;
    db.query(query, function (err, res) {
        if (err) {
            console.log(`Something went wrong: ${err} `);
            return;
        }
        console.table('\n\nALL EMPLOYEES', res);
        console.log(`Press UP or DOWN to continue...`);
    });
    init();
};

viewEmployeesByManager = () => {
    const query = `SELECT employees.id, employees.first_name, employees.last_name, managers.name AS manager
                    FROM employees
                    LEFT JOIN managers ON employees.manager_id = managers.id WHERE name IS NOT NULL;`;
    db.query(query, function (err, res) {
        if (err) {
            console.log(`Something went wrong: ${err}`);
            return;
        }
        console.table('\n\nEMPLOYEES BY MANAGER', res);
        console.log(`Press UP or DOWN to continue...`);
    });
    init();
};

viewEmployeesByDepartment = () => {
    const query = `SELECT employees.id, employees.first_name, employees.last_name, departments.name AS department
                    FROM employees
                    LEFT JOIN departments ON employees.dept_id = departments.id;`;
    db.query(query, function (err, res) {
        if (err) {
            console.log(`Something went wrong: ${err}`);
            return;
        }
        console.table('\n\nEMPLOYEES BY DEPARTMENT', res);
        console.log(`Press UP or DOWN to continue...`);
    });
    init();
};

addDepartment = department => {
    const query = `INSERT INTO departments(name)
                    VALUE(?)`
    const param = department;
    db.query(query, param, function (err, res) {
        if (err) {
            console.log(`Something went wrong: ${err}`);
            return;
        }
        console.log('\n\nAdded department to database.');
        console.log(`Press UP or DOWN to continue...`);
    });
    init();
};

addRole = (title, department, salary) => {
    const query = `INSERT INTO roles(title, department_id, salary)
                    VALUE(?, ?, ?)`
    const params = [title, department, salary];
    db.query(query, params, function (err, res) {
        if (err) {
            console.log(`Something went wrong: ${err}`);
            return;
        }
        console.log('\n\nRole added successfully.');
        console.log(`Press UP or DOWN to continue...`);
    });
    init();
};

addEmployee = (firstName, lastName, role, manager, department) => {
    const query = `INSERT INTO employees(first_name, last_name, role_id, manager_id, dept_id)
                    VALUES(?, ?, ?, ?, ?)`;
    const params = [firstName, lastName, role, manager, department];
    db.query(query, params, function (err, res) {
        if (err) {
            console.log(`Something went wrong: ${err}`);
            return;
        }
        console.log(`\n\nEmployee added to database.`);
        console.log(`Press UP or DOWN to continue...`);
    });
    init();
};