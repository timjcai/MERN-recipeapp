import { useEffect, useState } from "react";

const Home = () => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch("/");
      console.log(response);
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setRecipes(json);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="home">
      <div className="recipes">
        {recipes &&
          recipes.map((recipe) => <p key={recipe._id}>{recipe.name}</p>)}
      </div>
    </div>
  );
};

export default Home;
