import DishCard from "./DishCard";
import { resArr } from "../utils/mockData";

const Body = () => {
  let filterData = resArr;
  return (
    <div className="bodyContainer">
      <div className="btn">
        <button onClick={()=>{
          console.log("before filter:", filterData)
          filterData = filterData.filter((elem)=>{
            if(elem["avgRating"] > 4.2){
              return true
            } 
            else{
              return false
            }
          })

          console.log("after filter:", filterData)
          

        }} className="filterbtn">Filter restaurants </button>
      </div>
      <div className="bc1">
        {resArr.map((elem, index) => {
          return <DishCard key={resArr[index].id} resObj={elem} />;
        })}
      </div>
    </div>
  );
};

export default Body;
