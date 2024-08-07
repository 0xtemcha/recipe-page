import imgSrc from "./assets/image-omelette.jpeg";
import PreparationTime from "./components/PreparationTime/PreparationTime";

function App() {
  return (
    <div className="container">
      <div className="recipe-img">
        <img src={imgSrc} alt="Simple Omelette Recipe" />
      </div>
      <main className="content">
        <div>
          <h1 className="text-preset-1">Simple Omelette Recipe</h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>
        <PreparationTime />
        <div>
          <h2 className="text-preset-2">Ingredients</h2>
          <ul>
            <li>
              <span>2-3 large eggs</span>
            </li>
            <li>
              <span>Salt, to taste</span>
            </li>
            <li>
              <span>Pepper, to taste</span>
            </li>
            <li>
              <span>1 tablespoon of butter or oil</span>
            </li>
            <li>
              <span>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </span>
            </li>
          </ul>
        </div>
        <hr className="hr" />
        <div>
          <h2 className="text-preset-2">Instructions</h2>
          <ol>
            <li>
              <span>
                <span className="text-preset-4-bold">Beat the eggs:</span> In a
                bowl, beat the eggs with a pinch of salt and pepper until they
                are well mixed. You can add a tablespoon of water or milk for a
                fluffier texture.
              </span>
            </li>
            <li>
              <span>
                <span className="text-preset-4-bold">Heat the pan:</span> Place
                a non-stick frying pan over medium heat and add butter or oil.
              </span>
            </li>
            <li>
              <span>
                <span className="text-preset-4-bold">Cook the omelette:</span>{" "}
                Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </span>
            </li>
            <li>
              <span>
                <span className="text-preset-4-bold">
                  Add fillings (optional):
                </span>{" "}
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </span>
            </li>
            <li>
              <span>
                <span className="text-preset-4-bold">Fold and serve:</span> As
                the omelette continues to cook, carefully lift one edge and fold
                it over the fillings. Let it cook for another minute, then slide
                it onto a plate.
              </span>
            </li>
            <li>
              <span>
                <span className="text-preset-4-bold">Enjoy:</span> Serve hot,
                with additional salt and pepper if needed.
              </span>
            </li>
          </ol>
        </div>
        <div style={{ width: "100%" }}>
          <h2 className="text-preset-2">Nutrition</h2>
          <p style={{ marginBottom: 24 }}>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table>
            <tr>
              <td>
                <span>Calories</span>
              </td>
              <td>
                <span
                  className="text-preset-4-bold"
                  style={{ color: "var(--rose-800)" }}
                >
                  277kcal
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Carbs</span>
              </td>
              <td>
                <span
                  className="text-preset-4-bold"
                  style={{ color: "var(--rose-800)" }}
                >
                  0g
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Protein</span>
              </td>
              <td>
                <span
                  className="text-preset-4-bold"
                  style={{ color: "var(--rose-800)" }}
                >
                  20g
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Fat</span>
              </td>
              <td>
                <span
                  className="text-preset-4-bold"
                  style={{ color: "var(--rose-800)" }}
                >
                  22g
                </span>
              </td>
            </tr>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
