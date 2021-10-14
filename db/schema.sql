DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE departments (
    id INT AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT,
    title VARCHAR (30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE managers (
    id INT AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    dept_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL,
    FOREIGN KEY (manager_id) REFERENCES managers(id) ON DELETE SET NULL,
    FOREIGN KEY (dept_id) REFERENCESdepartments(id) ON DELETE SET NULL
);