// Função síncrona que retorna uma promise
const exercise1 = (a, b, c) => {
    const promise = new Promise((resolve, reject) => {
      const condition = typeof a !== "number" || typeof b !== "number" || typeof c !== "number";

      if (condition) reject(new Error("Informe apenas números"));

      const result = (a + b) * c;

      resolve(result);
    });

    return promise;
};

const randomNumber = Math.floor(Math.random() * 100 + 1);

exercise1(randomNumber,randomNumber,randomNumber)
  .then((result) => {
    if (result <= 50) throw new Error("Valor muito baixo")
    console.log(result);
  })
  .catch((err) => console.log(err.message));

// async = declaração / await = execução (Criar uma função anônima assíncrona que vai executar o await)
