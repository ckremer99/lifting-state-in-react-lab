
import './App.css';
import BurgerStack from './components/BurgerStack';
import IngredientList from './components/IngredientList';
import { useState } from 'react'

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [stack, setStack] = useState([])

  const addIngredient = (newIngredient) => {
    const updatedStack = [...stack, newIngredient]
    setStack(updatedStack)
  }

  const removeIngredient = (ingredientToRemove) => {
    const index = stack.findIndex((item) => item.name === ingredientToRemove.name)
    const updatedStack = [...stack.slice(0,index), ...stack.slice(index+1)]
    setStack(updatedStack)
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList availableIngredients={availableIngredients} addIngredient={addIngredient}/>
        <BurgerStack stack={stack} removeIngredient={removeIngredient}/>
      </section>
    </main>
  );
};


export default App;
