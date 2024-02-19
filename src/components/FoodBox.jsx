// Your code here
import React from "react";
 
function FoodBox({ food, onDelete }) {
    const { id, name, calories, image, servings } = food;
  
    // Handler for delete button click
    const handleDelete = () => {
      onDelete(id);
    };
  
    return (
      <div className="FoodBox">
        <p>{name}</p>
        <img src={image} alt={name} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  }
  
  export default FoodBox;