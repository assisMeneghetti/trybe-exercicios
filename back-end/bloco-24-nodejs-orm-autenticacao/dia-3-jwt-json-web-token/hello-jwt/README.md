### Agora, a prática

Antes de começar, crie um novo projeto chamado `hello-jwt` utilizando o comando `npm init @tryber/backend hello-jwt`, aceitando as opções padrão.

1.  🚀 Crie um _endpoint_ `POST /login`.
    *   O _endpoint_ deve receber os seguintes dados no corpo da requisição:

Copiar

        {
          "username": "algumNomeDeUsuario",
          "password": "algumaSenha"
        }

Copiar

    - Caso `username` e `password` sejam válidos, retorne um _token_ que atenda às seguintes especificações:
      - Expira em uma hora;
      - Contém, no _payload_, o nome de usuário informado na _request_;
      - Contém, no _payload_, uma propriedade `admin`, com o valor `false`.
    - Para retornar o _token_, utilize o seguinte formato no corpo da resposta:

Copiar

        {
          "token": "<JWT aqui>"
        }

Copiar

    - Para que `username` seja válido, seu valor precisa ser uma _string_ alfanumérica de, pelo menos, 5 caracteres.
    - Para que `password` seja válido, seu valor precisa ser uma _string_ de, pelo menos, 5 caracteres.

2.  🚀 Altere o _endpoint_ `POST /login`:
    *   Caso `username` seja `admin` e `password` seja `s3nh4S3gur4???`, a chave `admin` no _payload_ do _token_ gerado deve ter o valor `true`.
3.  🚀 Crie o _endpoint_ `/GET /users/me`:
    1.  O _endpoint_ só pode ser acessado por pessoas autenticadas.
    2.  Para realizar a autenticação, a requisição deve conter o _header_ `Authorization`, cujo valor deve ser um _token_ válido.
    3.  Caso o _token_ não exista, retorne o status `401 Unauthorized`, com o seguinte corpo da resposta:

Copiar

        {
          "error": {
            "message": "Token not found"
          }
        }

Copiar

    4. Caso aconteça um erro ao validar o _token_, retorne o status `401 Unauthorized` com o seguinte conteúdo no corpo:

Copiar

        {
          "error": {
          "message": "<mensagem de erro da biblioteca>"
          }
        }

Copiar

    5. Caso o _token_ seja válido, retorne o status `200 OK` e, no corpo da resposta, o nome de usuário ao qual aquele _token_ pertence e o valor da propriedade `admin`, no seguinte formato:

Copiar

        {
          "username": "nome de usuário do token",
          "admin": true || false
        }

Copiar

    6. Utilize um _middleware_ exclusivo para a autenticação. Armazene-o no arquivo `middlewares/auth.js`.

4.  🚀 Crie o _endpoint_ `/GET /top-secret`.
    *   O _endpoint_ só pode ser acessado por pessoas autenticadas.
    *   Apenas _tokens_ contendo, no _payload_, a propriedade `admin` com o valor `true` têm autorização para acessar esse _endpoint_.
    *   Caso o _token_ não exista, retorne o status `401 Unauthorized`, com o seguinte corpo da resposta:

Copiar

        {
          "error": {
            "message": "Token not found"
          }
        }

Copiar

    - Caso aconteça um erro ao validar o _token_, retorne o status `401 Unauthorized` com o seguinte conteúdo no corpo:

Copiar

        {
          "error": {
          "message": "<mensagem de erro da biblioteca>"
          }
        }

Copiar

    - Caso o _token_ seja válido, mas a propriedade `admin` do _payload_ não seja `true`, retorne o status `403 Forbidden` e o seguinte JSON:

Copiar

        {
          "error": {
            "message": "Restricted access"
          }
        }

Copiar

    - Caso o _token_ seja válido e o _payload_ contenha `admin` com o valor `true`, retorne o seguinte JSON:

Copiar

        {
          "secretInfo": "Peter Parker é o Homem-Arannha"
        }

Copiar

    - Para validar se a pessoa é admin, crie um novo _middleware_ no arquivo `middlewares/admin.js`.

