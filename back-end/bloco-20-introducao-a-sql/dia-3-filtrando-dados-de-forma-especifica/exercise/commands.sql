#1
SELECT code, name FROM Pecas WHERE name LIKE 'GR%';
#2
SELECT code, peca, Fornecedor, Preco FROM Fornecimentos WHERE code = '2' ORDER BY Fornecedor;
#3
SELECT code, peca, Fornecedor, Preco FROM Fornecimentos WHERE Fornecedor LIKE '%N%';
#4
SELECT code, name FROM Fornecedores WHERE name LIKE '%LTDA%';
#5
SELECT COUNT(name) FROM Fornecedores WHERE name LIKE '%F%';
#6
SELECT code, peca, Fornecedor, Preco FROM Fornecimentos WHERE Preco BETWEEN 15 AND 40;
#7
SELECT code, fornecimento, quantity, order_date FROM Vendas WHERE  order_date BETWEEN '2018-04-15' AND '2019-07-30';


