import { render, waitFor, screen } from '@testing-library/react';
import App from './App';
import { rest } from 'msw';
import {setupServer} from 'msw/node';
import userEvent from '@testing-library/user-event'

test('As a Chef I want to store my recipes so that I can keep track of them.', () => {

  render(<App/>);

  let recipeHeader = screen.getByText('My Recipes');
  expect(recipeHeader).toBeInTheDocument();

  let recipeList = screen.getByText('There are no recipes to list.');
  expect(recipeList).toBeInTheDocument();

 
  expect(recipeHeader.compareDocumentPosition(recipeList)).toBe(4);
});


test("contains an add recipe button", async () => {

  render(<App />)

  let recipeHeader = screen.getByText('My Recipes');

  let button = screen.getByRole('button', {name: 'Add Recipe'});
  userEvent.click(button);

  let form = await screen.findByRole('form', undefined, {timeout:3000})

  expect(form).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(screen.getByRole('textbox', {name: /Recipe name/i})).toBeInTheDocument();
  expect(screen.getByRole('textbox', {name: /instructions/i})).toBeInTheDocument();
  button = screen.queryByRole('button', {name: 'Add Recipe'});
  expect(button).toBeNull();
  expect(recipeHeader.compareDocumentPosition(button)).toBe(4);



})

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
