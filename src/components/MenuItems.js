import { useContext } from "react";
import { baseUrl } from "../utils/constants";
import UserContext from "../utils/UserContext"

const MenuItems = ({dataPassing, details }) => {
  const { name, price, description, imageId, ratings } = details;

  const userObj = useContext(UserContext)

  return (
    <div className="menu-item-card">
      <div>
        <h1>{name}</h1>
        <p>Price: {price / 100}</p>
        <p>
          ⭐️ {ratings.aggregatedRating.rating} (
          {ratings.aggregatedRating.ratingCountV2})
        </p>
        <p>{description}</p>
      </div>

      <div>
        <img alt={name} className="menu-item-img" src={baseUrl + imageId} />
      </div>

      <div>{dataPassing}</div>
      <div>{userObj.name}</div>
    </div>
  );
};

export default MenuItems;
