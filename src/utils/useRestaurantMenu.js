import { useEffect, useState } from "react";
import { menuApi } from "./constants";


const useRestaurantMenu = (restaurantId) => {
  const [menu, setMenu] = useState(null);


  async function fetchMenuApi() {
    const response = await fetch(menuApi + restaurantId);

    const data = await response.json();

    console.log(data);

    setMenu(data);
  }

  useEffect(() => {
    fetchMenuApi();
  }, []);

  return menu

};

export default useRestaurantMenu;
