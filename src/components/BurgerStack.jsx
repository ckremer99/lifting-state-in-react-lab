const BurgerStack = (props) => {
  return (
    <ul>
      {props.stack.map((ingredient, idx) => (
        <li key={idx} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => props.removeIngredient({name: ingredient.name, color: ingredient.color})}>-</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
