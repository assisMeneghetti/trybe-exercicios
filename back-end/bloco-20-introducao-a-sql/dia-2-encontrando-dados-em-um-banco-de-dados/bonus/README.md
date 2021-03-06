### Bônus

**Exercício 2**: Para realizar as tarefas do 1 ao 4, restaure o seguinte
banco de dados:
 
Copiar

```
DROP SCHEMA IF EXISTS PiecesProviders;
CREATE SCHEMA PiecesProviders;
USE PiecesProviders;

CREATE TABLE Pieces (
  Code INTEGER PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Providers (
  Code VARCHAR(40) PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Provides (
  Piece INTEGER,
  FOREIGN KEY (Piece) REFERENCES Pieces (Code),
  Provider VARCHAR(40),
  FOREIGN KEY (Provider) REFERENCES Providers (Code),
  Price INTEGER NOT NULL,
  PRIMARY KEY (Piece , Provider)
);

INSERT INTO Providers(Code, Name)
  VALUES ('HAL', 'Clarke Enterprises'),
    ('RBT', 'Susan Calvin Corp.'),
    ('TNBC', 'Skellington Supplies');

INSERT INTO Pieces(Code, Name)
  VALUES (1, 'Sprocket'),
    (2, 'Screw'),
    (3, 'Nut'),
    (4, 'Bolt');

INSERT INTO Provides(Piece, Provider, Price)
  VALUES (1, 'HAL', 10),
    (1, 'RBT', 15),
    (2, 'HAL', 20),
    (2, 'RBT', 25),
    (2, 'TNBC', 14),
    (3, 'RBT', 50),
    (3, 'TNBC', 45),
    (4, 'HAL', 5),
    (4, 'RBT', 7);
```

>
> Esse banco de dados é de uso livre, sendo licenciado de acordo com os
> termos [deste
> link](https://creativecommons.org/licenses/by-sa/3.0/).
>

1.  Escreva uma *query* para exibir a peça e o preço de tudo que é
    provido pela empresa `RBT`.
2.  Escreve uma *query* para exibir todas as informações das cinco peças
    com os maiores preços.
3.  Escreva uma *query* para exibir o nome das empresas e preço das
    peças com os quatro maiores preços, começando a lista a partir do 3º
    item.
4.  Escreva uma *query* para exibir todas as informações das peças que
    são providas pela empresa `HAL`. Ordene o resultado pelos
    preços das peças de forma decrescente.
5.  Escreva uma *query* para exibir por quantas empresas a peça
    `1` é provida.

**Exercício 7**: Usando `WHERE`, faça os exercícios [deste
link](https://www.w3schools.com/sql/exercise.asp?filename=exercise_where1).

**Exercício 8**: Aplicando restrições, faça os exercícios [deste
link](https://sqlbolt.com/lesson/select_queries_with_constraints).

**Exercícios 9**: Estude e faça os exercícios das páginas \"What is
SQL?\", \"Table Basics\" e \"Selecting Data\" [deste
link](http://www.sqlcourse.com/intro.html).

**Exercício 10**: Exercícios de comparação de valores. Faça os
exercícios [deste
link](https://sqlzoo.net/wiki/SELECT_from_WORLD_Tutorial).

------------------------------------------------------------------------

