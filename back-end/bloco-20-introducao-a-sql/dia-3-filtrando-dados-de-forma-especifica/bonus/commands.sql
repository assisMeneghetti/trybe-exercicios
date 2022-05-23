#1
SELECT SSN,Name FROM Scientists WHERE name LIKE '%e%';
#2
SELECT Name FROM Projects WHERE  Code LIKE 'A%' ORDER BY Name;
#3
SELECT Code,Name,Hours FROM Projects WHERE Code LIKE '%3%' ORDER BY Name;
#4
SELECT Code,Name,Hours FROM Projects WHERE Code IN ('AeH3', 'Ast3', 'Che1');
#5
SELECT Code,Name,Hours FROM Projects WHERE Hours > 500;
#6
SELECT Code,Name,Hours FROM Projects WHERE Hours > 250 AND Hours < 800;
#7
SELECT Code,Name FROM Projects WHERE Name NOT LIKE 'A%';
#8
SELECT Name FROM Projects WHERE Code LIKE '%H%';




