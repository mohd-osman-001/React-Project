import { useState } from "react";
import RestaurantMenuInfoCard from "./RestaurantMenuInfoCard";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenuPage = () => {

  const { restaurantId } = useParams();

  const menu = useRestaurantMenu(restaurantId)

  const [showIndex, setShowIndex] = useState(1);

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

      {containerArr.map((categories, index) => {
        return (
          <RestaurantCategory
            command = {index == showIndex? true: false}
            setIndex = {()=>{
              setShowIndex(index)
            }}
            category={categories.card.card}
            key={categories.card.card.categoryID}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenuPage;
