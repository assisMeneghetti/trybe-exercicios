<div>

### Agora a prática

> <div>
>
> 🚀 *Se liga nesse foguete!*
>
> </div>
>
> <div>
>
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no
> projeto! Todos os exercícios vão contribuir com sua formação mas fique
> de olho nesses! 👀
>
> </div>

<div>

Pronto, agora já podemos \"dockerizar\" todas as nossa aplicações e, não
só isso, podemos \"dockerizar\" nossos ambientes inteiro, tanto
aplicações, quanto bancos de dados e outras tecnologias, assim como suas
comunicações e configurações.

</div>

<div>

Bora praticar!

</div>

<div>

🚀 **Exercício 1**:

</div>

<div>

Vamos aprimorar nossos conhecimentos sobre `images` e `volumes`, para
isso:

</div>

1.  <div>

    Crie um arquivo HTML chamado `missao_trybe.html` que tenha a
    seguinte estrutura:

    </div>

    -   <div>

        Tag `<title>` com o seguinte texto \"Trybe\";

        </div>

    -   <div>

        Tag `<H1>` com o seguinte texto \"Missão da Trybe\";

        </div>

    -   <div>

        Tag `<p>` com o seguinte texto \"Gerar oportunidade para
        pessoas\";

        </div>

    -   <div>

        Salve o arquivo em qualquer lugar da sua máquina com a extensão
        `html`

        </div>

2.  <div>

    Crie um container para manter um servidor `httpd:2.4` **Apache** e
    vincule sua porta interna com a porta 4545 da sua máquina local.

    </div>

3.  <div>

    Após criar o container acesse a página HTML que está rodando no
    servidor em seu browser.

    </div>

4.  <div>

    Acesse o arquivo `missao_trybe.html` e acrescente a tag `<p>` com o
    seguinte texto \"Nosso negócio é GENTE! \#VQV\";

    </div>

5.  <div>

    Obtenha o id do container `httpd:2.4`;

    </div>

6.  <div>

    Obtenha o `Mounts` através da propriedade `Source` que deve mostrar
    o volume desse container no *Docker Host*;

    </div>

7.  <div>

    Agora pare o container `httpd:2.4`;

    </div>

8.  <div>

    Exclua o seu container;

    </div>

9.  <div>

    Verifique se a pasta onde você salvo o arquivo html permanece no
    mesmo lugar;

    </div>

10. <div>

    Obtenha o `IMAGE ID` do servidor;

    </div>

11. <div>

    Depois de obter o `IMAGE ID`, exclua a imagem.

    </div>

<div>

🚀 **Exercício 2**:

</div>

<div>

Crie o arquivo Compose para subir um ghost blog, essa plataforma é
similar com o Wordpress e é utilizada para criar sites de conteúdo. Você
pode ler no site oficial como criar conteúdos nele e utilizá-lo. Para
esse exercício, utilizaremos apenas sua página de exemplo:

</div>

1.  Utilize a versão \"3\" no arquivo;
2.  Crie um `service` para subir a plataforma, utilize a imagem
    `ghost:1-alpine`;
3.  Publique a porta `2368`, fazendo *bind* também para a `2368`;
4.  Suba a aplicação utilizando o `docker-compose` e então acesse a
    porta publicada para validar se deu tudo certo.

<div>

🚀 **Exercício 3**:

</div>

<div>

Por padrão o `ghost` utiliza um `sqlite` interno para salvar as
informações, porém, vamos alterar esse comportamento para exercitar
nossos conhecimentos:

</div>

1.  Crie um novo serviço para o nosso banco de dados, podemos utilizar
    um mysql, utilize a imagem `mysql:5.7`;
2.  Precisamos definir uma senha `root` para o nosso *bd*, para isso
    utilize a variável `MYSQL_ROOT_PASSWORD`, lembre-se que é possível
    utilizar a sintaxe `${}` para passar uma `env` do *host*, para a
    `env` do *container*;
3.  Agora precisamos configurar nosso service com o *ghost* para
    utilizar o MySQL, para isso defina a variável `database__client`
    para `mysql`;
4.  Defina o nome `ghost` para o nome do *database* utilizando a
    variável `database__connection__database`;
5.  E então, indique a conexão para o nosso MySQL na *env*
    `database__connection__host`;
6.  Para definir a pessoa usuária (**root**) e senha (a mesma que
    definimos no nosso MySQL), utilize respectivamente as *envs*
    `database__connection__user` e `database__connection__password`.
7.  Utilize a opção `depends_on` para criar relações de dependências
    entre os serviços.
8.  Suba o ambiente com o novo arquivo usando o `docker-compose` e então
    acesse a porta.

<div>

**Exercício 4**:

</div>

<div>

Agora vamos praticar os conceitos de `volumes` e `networks`.

</div>

1.  Configure o nosso serviço *mysql* para utilizar um volume, conforme
    vimos no conteúdo, utilize o caminho *target* `/var/lib/mysql`.
2.  Ao invés de utilizar a rede padrão criada pelo *Compose*, defina uma
    rede chamada `my-network` para a comunicação dos dois serviços.
3.  Suba o ambiente com o novo arquivo usando o `docker-compose` e então
    acesse-o.

<div>

**Exercício 5**:

</div>

<div>

Agora vamos criar um novo arquivo Compose, para rodarmos uma aplicação
`React`, conforme vimos alguns exemplos do conteúdo:

</div>

1.  Inicie um novo projeto `ReactJS` utilizando o *create-react-app*;
2.  Crie o `Dockerfile`, conforme vimos na aula passada;
3.  Crie um novo arquivo *Compose* utilizando a versão `3`;
4.  Defina um serviço no arquivo para nosso *app*, para isso utilize a
    opção `build` para apontar para o `Dockerfile`;
5.  Publique a porta exposta no `Dockerfile` fazendo *bind* para a porta
    `8080` do *localhost*;

<div>

**Exercício 6**:

</div>

<div>

Para simularmos o processo de desenvolvimento, faça a alteração em
alguma parte do código do *app react*, e então execute o comando para
subir o serviço novamente, \"rebuildando\" a imagem para aplicar as
alterações.

</div>

</div>
