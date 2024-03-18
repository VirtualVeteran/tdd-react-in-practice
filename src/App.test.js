import { render, waitFor, screen } from '@testing-library/react';
import App from './App';

import userEvent from '@testing-library/user-event'

test('As a Chef I want to store my recipes so that I can keep track of them.', () => {

  render(<App/>);

  let recipeHeader = screen.getByText('My Recipes');
  expect(recipeHeader).toBeInTheDocument();

  let recipeList = screen.getByText('There are no recipes to list.');
  expect(recipeList).toBeInTheDocument();

 
  expect(recipeHeader.compareDocumentPosition(recipeList)).toBe(4);
});

test("contains an add recipe button that when clicked opens a form", async () => {

  render(<App />);

  
  let button = screen.getByRole('button', {name: 'Add Recipe'});
  userEvent.click(button);

  
  let form = await screen.findByRole('form', undefined, {timeout:3000});

 
  expect(form).toBeInTheDocument();

  expect(screen.getByRole('textbox', {name: /Recipe name/i})).toBeInTheDocument();
  expect(screen.getByRole('textbox', {name: /instructions/i})).toBeInTheDocument();
  
  
  button = screen.queryByRole('button', {name: 'Add Recipe'});
  expect(button).toBeNull();
});


test("As a Chef, I want to be able to see a recipe that I have added show up under 'My Recipes'", async () => {
  render(<App />)

  let button = screen.getByRole('button', {name: 'Add Recipe'});
  userEvent.click(button);

  let submitButton = screen.getByRole('button');
  userEvent.click(submitButton);

  let recipeNameBox = screen.getByRole('textbox', {name: /Recipe name/i});
  userEvent.type(recipeNameBox, 'Tofu Scramble Tacos');

  const recipeName = 'Tofu Scramble Tacos';
  constRecipeInstructions = '1.Turn on oven'
 userEvent.type(recipeNameBox, recipeName);
 userEvent.type(RecipeInstructionbox, constRecipeInstructions);

let recipe = await screen.findByText(/Name:.*Tofu Scramble Tacos/i);

  // expect(recipeNameBox).toBeInTheDocument();

  // expect(RecipeInstructionbox).toBeInTheDocument();

  // expect(constRecipeInstructions).toBeInTheDocument();

})

test('previous recipe submissions listed under "My Recipes" ', async () => {
  render(<App />)


})




test('clicking on previous submissions populates recipe intructions ', async () => {
  render(<App />)

  
})


test('edit buttons are on the name of recipe on instructions that allow user to edit either and update value', async () => {
  render(<App />)

  
})


test('clicking save to an update refreshes page and saves updates', async () => {
  render(<App />)

  
})

