#### Para Fixar

#### Estruturando uma API

1.  Crie uma array `drinks` com os seguintes objetos dentro dela e uma rota `GET /drinks` que retorna a lista de bebidas.

Copiar

    const drinks = [
    	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
    	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
    	{ id: 3, name: 'Suco 300ml', price: 4.0 },
    	{ id: 4, name: 'Suco 1l', price: 10.0 },
    	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
    	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
    ];

2.  Modifique tanto a rota de bebidas como de receitas para retornar a lista ordenada pelo nome em ordem alfabética.

******

#### Para Fixar

#### Parâmetros de rota

1.  Crie uma rota `GET /drink/:id` para retornar uma bebida pelo `id`.

Você aprendeu como utilizar parâmetro de rota, mas imagine o cenário em que, além de pesquisar pelo nome você deseja buscar as receitas com valor máximo de 30 reais ao mesmo tempo. Você até poderia utilizar o parâmetro de rotas para isso, mas teriam rotas um pouco mais difíceis de usar pois você precisaria se preocupar com a ordem que os parâmetros são organizados, diminuindo a legibilidade das rotas da API. Para isso, existe uma segunda forma de enviar parâmetros através de uma URL, conhecida como _query string_.