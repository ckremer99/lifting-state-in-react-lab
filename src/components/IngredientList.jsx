

const IngredientList = (props) => {
    return (
    <ul>
        {props.availableIngredients.map((ingredient, idx) => {
            return <li key={idx} style={{backgroundColor: ingredient.color}}>
                {ingredient.name}
                <button onClick={() => props.addIngredient({name: ingredient.name, color: ingredient.color})}>+</button>
            </li>
        })}
    </ul>
    )
  };
  
  export default IngredientList;