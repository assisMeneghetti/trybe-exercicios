SELECT 
    m.id,
    m.title,
    m.director,
    m.`year`,
    m.length_minutes,
    t.`name`,
    b.rating
FROM
    Pixar.Movies AS m
        INNER JOIN
    Pixar.Theater AS t ON m.theater_id = t.id
        INNER JOIN
    Pixar.BoxOffice AS b ON b.movie_id = m.id
WHERE
    t.`name` <> 'NULL' AND b.rating > 8;