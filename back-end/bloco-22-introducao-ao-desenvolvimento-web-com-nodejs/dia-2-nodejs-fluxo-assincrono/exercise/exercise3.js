// Função assíncrona que retorna uma promise
const exercise3 = async (a, b, c) => {
    try {
      const condition = typeof a !== "number" || typeof b !== "number" || typeof c !== "number";

      if (condition) throw new Error("Informe apenas números");

      const result = (a + b) * c;

      if (result <= 50) throw new Error("Valor muito baixo");

      return result;
    } catch (error) {

      return error.message;
    }
};

const randomNumber = Math.floor(Math.random() * 100 + 1);

const result = async () => {
  const finalResult = await exercise3(randomNumber, randomNumber, randomNumber);
  
  console.log(finalResult);
};

result();

// async = declaração / await = execução (Criar uma função anônima assíncrona que vai executar o await)
