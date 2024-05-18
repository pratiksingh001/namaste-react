import { useState } from "react"
import { CDN_URL } from "../utils/constants"
import { restaurantList } from "../utils/mockData"
import RestaurantCard from "./RestaurantCard"

const Body = () => {
    const [resList, setResList] = useState(restaurantList);

    const filterTopRated = () => {
        console.log(resList);
        setResList(resList.filter((item) => {
            return(
                item.rating >= 4
            )
        }))
    }
    
    console.log(resList);
    
    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={() => {filterTopRated()}}>Filter Top Rated</button>
            </div>
            <div className='res-container'>
                {resList.map((restaurantList) => {
                    return (
                        <RestaurantCard
                            key={restaurantList.name}
                            src={CDN_URL + restaurantList.src}
                            name={restaurantList.name}
                            cuisnes={restaurantList.cuisnes}
                            rating={restaurantList.rating}
                            deliveryTime={restaurantList.deliveryTime}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Body