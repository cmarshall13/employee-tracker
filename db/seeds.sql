INSERT INTO departments (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');


INSERT INTO roles (title, salary, department_id)
VALUES
    ('Sales Lead', 112987, 1),
    ('Salesperson', 113987, 1),
    ('Lead Engineer', 226789, 2),
    ('Software Engineer', 227789, 2),
    ('Accountant', 323456, 3),
    ('Legal Team Lead', 433456, 4),
    ('Lawyer', 443456, 4);

INSERT INTO managers (name)
VALUES
    ('Joe Shmo'),
    ('Shelley Lobster'),
    ('Chris P Bacon'),
    ('Jesus Christo');
