import MenuItems from "./MenuItems";

const RestaurantCategory = ({ category }) => {
  console.log(category);
  return (
    <div className="category-accordian">
      <div className="category-header">
        <span>{category.title}</span> <span>⬇️</span>
      </div>

      <div className="category-body">
        {category.itemCards.map((elem) => {
          return <MenuItems details={elem.card.info} key={elem.card.info.id} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantCategory;
