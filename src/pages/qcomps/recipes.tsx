import React from 'react';

export const recipes = [
  {
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta']),
  },
  {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']),
  },
  {
    id: 'hummus',
    name: 'Hummus',
    ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']),
  },
];

export default function RecipeList() {
  // using map to loop through the array of recipes and render a list item for each one
  // The ingredients are stored in a Set, so I'm using Array.from to convert it to an array because map is only applied to arrays so that I can loop through the ingredients
  // using the recipe.id as the key for each list item
  // using the ingredient as the key for each ingredient list item since the ingredients are unique because set can only have unique values
  
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          
          <li key={recipe.id}>
            <h2>{recipe.name}</h2>
            <ul>
              {Array.from(recipe.ingredients).map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}