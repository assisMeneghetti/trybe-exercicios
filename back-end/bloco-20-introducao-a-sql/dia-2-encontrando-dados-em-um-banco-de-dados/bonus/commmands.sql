#1
SELECT 
    Price
FROM
    Provides
WHERE
    Provider = 'RBT';
#2
SELECT 
    *
FROM
    Provides
ORDER BY Price DESC
LIMIT 5;
#3
SELECT 
    Provider, Price
FROM
    Provides
ORDER BY Price DESC
LIMIT 4 OFFSET 2;
#4
SELECT 
    *
FROM
    Provides
WHERE
    Provider = 'HAL'
ORDER BY Price DESC;
#5
SELECT 
    COUNT(DISTINCT Provider)
FROM
    Provides
WHERE
    Piece = 1;
#7
# Select all records where the City column has the value "Berlin".
SELECT 
    *
FROM
    Customers
WHERE
    City = 'Berlin';
    
# Use the NOT keyword to select all records where City is NOT "Berlin".
SELECT 
    *
FROM
    Customers
WHERE
    NOT City = 'Berlin';
    
# Select all records where the CustomerID column has the value 32.
SELECT 
    *
FROM
    Customers
WHERE
    CustomerID = 32;
    
# Select all records where the City column has the value 'Berlin' and the PostalCode column has the value 12209.
SELECT 
    *
FROM
    Customers
WHERE
    City = 'Berlin' AND PostalCode = 12209;
# Select all records where the City column has the value 'Berlin' or 'London'.
SELECT 
    *
FROM
    Customers
WHERE
    City = 'Berlin' OR City = 'London';
#8
# Find the movie with a row id of 6
SELECT 
    *
FROM
    movies
WHERE
    id = 6;

# Find the movies released in the years between 2000 and 2010
SELECT 
    *
FROM
    movies
WHERE
    Year BETWEEN 2000 AND 2010; 
    
# Find the movies not released in the years between 2000 and 2010
SELECT 
    *
FROM
    movies
WHERE
    Year NOT BETWEEN 2000 AND 2010;

# Find the first 5 Pixar movies and their release year
SELECT 
    Title, Year
FROM
    movies
LIMIT 5;

#8
# Display the first name and age for everyone that’s in the table.
SELECT first, age FROM empinfo;

# Display all columns for everyone that is over 40 years old.
SELECT * FROM empinfo WHERE age > 40;

# Display the first and last names for everyone whose last name ends in an “ay”.
SELECT first, last FROM empinfo WHERE last LIKE '%ay';

# Display all columns for everyone whose first name equals “Mary”
SELECT * FROM empinfo WHERE first = 'Mary';

# Display all columns for everyone whose first name contains “Mary”
SELECT * FROM empinfo WHERE first LIKE '%Mary%';

#9
# Give the name and the per capita GDP for those countries with a population of at least 200 million.
SELECT name, gdp / population FROM world WHERE population > 200000000;

# Show the name and population in millions for the countries of the continent 'South America'. Divide the population by 1000000 to get population in millions.
SELECT name, population / 1000000 FROM world WHERE continent = 'South America';

# Show the name and population for France, Germany, Italy
SELECT name, population FROM world WHERE name IN('Italy', 'France', 'Germany');

# Show the countries which have a name that includes the word 'United'
SELECT name FROM world WHERE name LIKE '%United%';

# Two ways to be big: A country is big if it has an area of more than 3 million sq km or it has a population of more than 250 million.
# Show the countries that are big by area or big by population. Show name, population and area.
SELECT name, population, area FROM world WHERE population > 250000000 OR area > 3000000;

# Show the name and population in millions and the GDP in billions for the countries of the continent 'South America'. Use the ROUND function to show the values to two decimal places.

# For South America show population in millions and GDP in billions both to 2 decimal places.
SELECT name, ROUND(population/1000000, 2), ROUND(gdp/1000000000, 2) FROM world WHERE continent = 'South America';
