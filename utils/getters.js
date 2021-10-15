const db = require('../db/connection');
const promise = require('mysql2/promise');

let roles = [];
let managers = [];
let departments = [];
let employees = [];

getEmployees = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT id, CONCAT(first_name, ' ', last_name) AS name FROM employees`, function (err, res) {
            if (err) {
                reject('Something went wrong!' + err);
            }
            let resOnjArr = JSON.parse(JSON.stringify(res));
            for (res of resObjArr) {
                employees.push(`${res.id}: ` + res.name);
            }
            resolve(employees);
        })
    });
};

getRoles = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM roles`, function (err, res) {
            if (err) {
                reject('Something went wrong!' + err);
            }
            let resObjArr = JSON.parse(JSON.stringify(res));
            for (res of resObjArr) {
                roles.push(`${res.id}: ` + res.title);
            }
            resolve(roles);
        })
    });
};