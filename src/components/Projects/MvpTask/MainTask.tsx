import { useState } from "react";
import "./MainTask.scss";
import Nav from "../../Nav/Nav";

type Meal = {
  title: string;
  description: string
}

export const MainTask = () => {
  const [meals, setMeals] = useState<Meal[]>([
     { title: "Breakfast", description: "Oatmeal with berries" },
    { title: "Lunch", description: "Quinoa salad" },
    { title: "Dinner", description: "Grilled salmon with vegetables" },
    { title: "Snack", description: "Greek yogurt with honey" },
  ]);

  const [newMeal, setNewMeal] = useState<Meal>({
    title: "",
    description: "",
  });

  const handleAddMeal = () => {
    if (newMeal.title.trim() && newMeal.description.trim()) {
      setMeals([...meals, newMeal]);
      setNewMeal({ title: "", description: ""});
    }
  };

  const handleDeleteMeal = (index: number) => {
    setMeals(meals.filter((_, i) => i !== index));
  };

  return (
    <>
       <div className="meal-main-container">
        <Nav/>
      <div className="box-container">
        <div className="header-container">
          <h2 className="header-first">Healthy Meal Planner</h2>
          <h3 className="meals-header">Today's Meals</h3>
        </div>
        <div className="meals-container">
          {meals.map((meal, index) => (
            <div className="meals-dish" key={index}>
              <div className="meal-header-row">
                <h4 className="meal-header-third">{meal.title}</h4>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteMeal(index)}
                >
                  <img src={process.env.PUBLIC_URL + "/images/delete.png"} alt="delete" className="meal-image" />
                </button>
              </div>
              <p className="meal-describe">{meal.description}</p>
            </div>
          ))}
        </div>
        <div className="form-container">
          <input
            type="text"
            placeholder="Meal name (e.g. Snack)"
            value={newMeal.title}
            onChange={(e) =>
              setNewMeal({ ...newMeal, title: e.target.value })
            }
            className="meal-input"
          />
          <input
            type="text"
            placeholder="Meal description (e.g. Apple + nuts)"
            value={newMeal.description}
            onChange={(e) =>
              setNewMeal({ ...newMeal, description: e.target.value })
            }
            className="meal-input"
          />
          <div className="button-container">
            <button className="meal-button" onClick={handleAddMeal}>
              Add Meal
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MainTask;
