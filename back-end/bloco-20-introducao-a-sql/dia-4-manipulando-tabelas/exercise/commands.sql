#1
INSERT Movies (title, director, year, length_minutes)
VALUES ('Monstros SA', 'Pete Docter', 2001, 92),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird', 2004, 116),
('WALL-E,', 'Pete Docter', 2008, 104);

#2
INSERT BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES (9, 6.8, 450000000, 370000000);

#3
UPDATE Movies SET director = 'Andrew Staton' WHERE director = 'John Lasseter';

#4
UPDATE Movies SET title = 'Ratatouille', year = 2007 WHERE title = 'ratatui';

#5
INSERT BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES (8, 8.5, 300000000, 250000000),
(10, 7.4, 460000000, 510000000),
(11, 9.9, 290000000, 280000000);

#6.1
DELETE FROM BoxOffice WHERE movie_id = 11;
#6.2
DELETE FROM Movies WHERE id = 11;

#7.1
SELECT id FROM Movies
WHERE director = 'Andrew Staton';

#7.2
DELETE FROM BoxOffice
WHERE movie_id IN (1, 2, 5, 6, 9);

#7.3
DELETE FROM Movies
WHERE director = 'Andrew Staton';