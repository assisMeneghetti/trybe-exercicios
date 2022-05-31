#1
SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    Pixar.BoxOffice AS b
        INNER JOIN
    Pixar.Movies AS m ON m.id = b.movie_id;

#2
SELECT 
    m.title, (b.domestic_sales + b.international_sales) AS sales
FROM
    Pixar.BoxOffice AS b
        INNER JOIN
    Pixar.Movies AS m ON m.id = b.movie_id
WHERE
    international_sales > domestic_sales;

#3
SELECT 
    m.title, b.rating
FROM
    Pixar.BoxOffice AS b
        INNER JOIN
    Pixar.Movies AS m
ORDER BY b.rating DESC;

#4
SELECT 
    t.id, t.location, t.name, m.title
FROM
    Pixar.Theater AS t
        LEFT JOIN
    Pixar.Movies AS m ON t.id = m.theater_id
ORDER BY t.name;

#5
SELECT 
    m.id, m.title, m.director, m.year, m.length_minutes, t.name
FROM
    Pixar.Theater AS t
        RIGHT JOIN
    Pixar.Movies AS m ON t.id = m.theater_id
ORDER BY t.name;