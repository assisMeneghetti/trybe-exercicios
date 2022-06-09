import { Component } from 'react';

class ReceitasList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/recipes')
      .then(response => response.json())
      .then((recipes) => this.setState(
        {
          recipes,
          isLoading: false,
        },
      ));
  }

  render() {
    const { recipes, isLoading } = this.state;

    console.log(recipes);

    return (
      <div>
        <div>
          {isLoading && <h1>Loading ...</h1>}
          <div className='card-group'>
            {recipes.map((recipe) => (
              <div key={recipe.id}>
                <h1>{recipe.name}</h1>
                <span>Preço: {recipe.preco}</span>
                <br/>
                <span>Tempo de preparo: {recipe.tempoDePreparo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ReceitasList;