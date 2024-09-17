import "./OmletRecipe.scss"
export const OmletRecipe = () => {
    return (
        <>
            <div className="main-conteiner">
                <div className="image-conteiner">
                    <img src={process.env.PUBLIC_URL + "/images/image-omelette.jpeg"} alt="omlette-img" className="omlette" />
                </div>
                <div className="recipe-conteiner">
                    <h1 className="headline">Simple Omelette Recipe</h1>
                    <div className="about-omelette">
                        <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
                            to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
                    </div>
                    <div className="preparation">
                        <span className="second-headline">Preparation time</span>
                        <ul className="time-cooking">
                            <li><strong>Total:</strong> Approximately 10 minutes</li>
                            <li><strong>Preparation:</strong> 5 minutes</li>
                            <li><strong>Cooking:</strong> 5 minutes</li>
                        </ul>
                    </div>
                    <div className="ingredients">
                        <h2 className="third-headline">Ingredients</h2>
                        <ul className="products">
                            <li className="markers-ingredients">2-3 large eggs</li>
                            <li className="markers-ingredients">Salt, to taste</li>
                            <li className="markers-ingredients">Pepper, to taste</li>
                            <li className="markers-ingredients">1 tablespoon of butter or oil</li>
                            <li className="markers-ingredients">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                        </ul>
                    </div>
                </div>
                <div className="instruction">
                    <h2 className="four-headline">Instructions</h2>
                    <ol className="all-stages">
                        <li className="markers-instruction"><strong>Beat the eggs:</strong>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
                            You can add a tablespoon of water or milk for a fluffier texture.</li>
                        <li className="markers-instruction"><strong>Heat the pan:</strong>Place a non-stick frying pan over medium heat and add butter or oil.</li>
                        <li className="markers-instruction"><strong>Cook the omelette:</strong>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
                        <li className="markers-instruction"><strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
                        <li className="markers-instruction"><strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
                        <li className="markers-instruction"><strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.</li>
                    </ol>
                </div>
                <hr className="spacer"/>
                <div className="nutrition">
                    <h2 className="fifth-headline">Nutrition</h2>
                    <span>The table below shows nutritional values per serving without the additional fillings.</span>
                    <ul className="compound">
                        <li>Calories<strong className="kcal kcal-1">277kcal</strong></li>
                        <hr className="spacer"/>
                            <li>Carbs<strong className="kcal kcal-2">0g</strong></li>
                            <hr className="spacer"/>
                                <li>Protein<strong className="kcal kcal-3">20g</strong></li>
                                <hr className="spacer"/>
                                    <li>Fat<strong className="kcal kcal-4">22g</strong></li>
                                </ul>
                            </div>
                            <div className="attribution-omlette">
                                Coded by <a href="https://github.com/ypayel">ypayel</a>.
                            </div>
                        </div>
                    </>
                    )
}

                    export default OmletRecipe;