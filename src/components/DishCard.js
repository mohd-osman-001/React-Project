const DishCard = ({ resObj }) => {
  const { resName, cuisine, avgRating, delieveryTime, costForTwo, imgId } =
    resObj;

  return (
    <div className="dishCard1">
      <div className="dsImg">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resObj.info.cloudinaryImageId
          }
          alt="res-log"
          className="dishImg"
        />
      </div>

      <div className="dsContent">
        <h3 className="restName">{resObj.info.name}</h3>
        <h4 className="cuisine">{resObj.info.cuisines}</h4>
        <h4 className="rate">
          <span className="star">✰</span>
          {resObj.info.avgRating} | stars
        </h4>
        <h4 className="deliveryTimeCost">
          {resObj.info.sla.delieveryTime} mins | {resObj.info.costForTwo} for two
        </h4>
      </div>
    </div>
  );
};

export default DishCard;
