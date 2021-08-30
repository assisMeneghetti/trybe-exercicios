const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const buyer = order.name;
  const buyerPhone = order.phoneNumber;
  const buyerStreet = order.address.street;
  const buyerAddressNumber = order.address.number;
  const buyerAp = order.address.apartment;


  // console.log(`Olá ${deliveryPerson}, entrega para: ${buyer}, Telefone: ${buyerPhone}, R. ${buyerStreet}, N: ${buyerAddressNumber}, AP: ${buyerAp}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  let newBuyer = order.name;
  const pizzas = Object.keys(order.order.pizza);
  newBuyer = 'Luiz Silva';
  const drink = order.order.drinks.coke.type;
  let totalPayment = order.payment.total;
  totalPayment = 50;
  console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} e R$ ${totalPayment},00`);
}

orderModifier(order);