#8.1
SET SQL_SAFE_UPDATES = 0;
#8.2
UPDATE BoxOffice SET rating = 9.0 WHERE domestic_sales > 400000000;

#9
UPDATE BoxOffice SET rating = 6.0 WHERE international_sales < 300000000;

#10.1
SELECT id FROM Movies WHERE length_minutes < 100;

#10.2
DELETE from BoxOffice WHERE movie_id IN (7,8);

#10.3
DELETE FROM Movies WHERE id IN (7,8);
