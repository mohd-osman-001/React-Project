import { useState, useEffect } from "react";
import RestaurantMenuInfoCard from "./RestaurantMenuInfoCard";
import RestaurantCategory from "./RestaurantCategory";
import { menuApi } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenuPage = () => {
  const [menu, setMenu] = useState(null);

  const { restaurantId } = useParams();

  async function fetchMenuApi() {
    const response = await fetch(menuApi + restaurantId);

    const data = await response.json();

    console.log(data);

    setMenu(data);
  }

  useEffect(() => {
    fetchMenuApi();
  }, []);

  if (menu == null) {
    return <div>Loading...</div>;
  }

  const containerArr =
    menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((elem) => {
      if (
        elem.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) {
        return true;
      } else {
        return false;
      }
    });

  return (
    <div
      style={{
        paddingLeft: "340px",
        paddingBottom: "50px",
        paddingRight: "340px",
      }}
    >
      <RestaurantMenuInfoCard menu={menu} />

      {containerArr.map((categories) => {
        return (
          <RestaurantCategory
            category={categories.card.card}
            key={categories.card.card.categoryID}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenuPage;
