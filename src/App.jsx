import React, { useState } from 'react';
import './App.css';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (id) => {
    setFoods(foods.filter((food) => food.id !== id));
  };

  const handleAddFood = (newFood) => {
    // Generate a unique ID for the new food item
    newFood.id = foods.length + 1;
    setFoods([...foods, newFood]);
  };

  return (
    <div className="App">
      {foods.map((food) => (
        <FoodBox key={food.id} food={food} onDelete={deleteFood} />
      ))}
      <AddFoodForm onAddFood={handleAddFood} />
    </div>
  );
}

export default App;

// {
//   name: "Orange",
//   calories: 85,
//   image: "https://i.imgur.com/abKGOcv.jpg",
//   servings: 1
// } } 
