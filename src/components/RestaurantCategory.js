import MenuItems from "./MenuItems";

const RestaurantCategory = ({ category, command, setIndex }) => {
  return (
    <div className="category-accordian">
      <div
        className="category-header"
        onClick={() => {
          setIndex();
        }}
      >
        <span>
          {category.title} ({category.itemCards.length})
        </span>
        {command ? <span>⬆️</span> : <span>⬇️</span>}
      </div>

      {command ? (
        <div className="category-body">
          {category.itemCards.map((elem) => {
            return (
              <MenuItems details={elem.card.info} key={elem.card.info.id} />
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default RestaurantCategory;
