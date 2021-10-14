INSERT INTO departments (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');


INSERT INTO roles (title, salary, department_id)
VALUES
    ('Sales Lead', 200000, 1),
    ('Salesperson', 130000, 1),
    ('Lead Engineer', 250000, 2),
    ('Software Engineer', 180000, 2),
    ('Accountant', 250000, 3),
    ('Legal Team Lead', 255000, 4),
    ('Lawyer', 200000, 4);

INSERT INTO managers (name)
VALUES
    ('Joe Shmo'),
    ('Shelley Lobster'),
    ('Chris P Bacon'),
    ('Jesus Christo');

INSERT INTO employees (first_name, last_name, role_id, manager_id, dept_id)
VALUES
    ('Bob', 'Smith', 2, 1, 1)
    ('Joe', 'Shmo', 1, NULL, 1),
    ('Eagle' 'Eye', 2, 1, 1),
    ('Shelley', 'Lobster', 3, NULL, 2),
    ('Hugo', 'Buttz', 4, 2, 2),
    ('Harry', 'Chest', 4, 2, 2),
    ('Magnolia', 'Bush', 7, 4, 4),
    ('Chris', 'P.Bacon', 5, NULL, 3),
    ('Sal', 'Amander', 7, 4, 4),
    ('Jesus', 'Christo', 6, NULL, 4);