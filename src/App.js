import logo from './logo.svg';
import { useEffect, useState } from 'react';

function App() {
  const [recipeFormShown, showRecipeForm,] = useState(false);

//   let submitRecipe = (event) => {};
//   preventDefault()
//   onSubmit(currentTarget.elements.userInput.value)
 
//   const form = recipe.currentTarget

//   const formElements = form.elements as typeof form.elements & { userInput: value: string}

//   onSubmitUserRecipe(formElements.userInput.value)

// }


let submitRecipe = (event) => {
  event.preventDefault()

  let newRecipeName = document.getElementById('newRecipeName').value;
  let newRecipeInstructions = document.getElementById('newRecipeInstructions').value;

  let previousRecipeList = 
  
  this.setState({recipes: [
      {
        name: newRecipeName,
        instructions : newRecipeInstructions
      }
    ]
  })
}

  return (
    <div className="App">
      <h1 className="App-header">My Recipes</h1>
      {
        recipeFormShown ? 
          <>

            <form id="recipe-form" name='recipe-form' onSubmit={submitRecipe}>
              <label htmlFor="newRecipeName">Recipe name: </label>
              <input type="text" id="newRecipeName" />
              <label htmlFor="newRecipeInstructions">Instructions:</label>
              <textarea id="newRecipeInstructions" placeholder="write recipe instructions here..." />
              <input type="submit" />
            </form>
          </>
          : 
            <button onClick={ () => showRecipeForm(!recipeFormShown) }>Add Recipe</button>
      }
    </div>
  );
}








export default App;