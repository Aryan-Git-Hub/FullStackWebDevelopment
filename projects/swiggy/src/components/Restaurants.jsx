import { useState, useEffect } from "react";
import { RestCard } from "./RestCard";
import { ShimmerEffect } from "./ShimmerEffect";

export default function Restuarants() {
  const [RestData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
      const response = await fetch(proxyServer + swiggyAPI);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        const data = await response.json();
        setRestData(
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      }
    }
    fetchData();
  }, []);

  if (RestData.length == 0) return (<ShimmerEffect />);

  return (
    <>
      <div className="w-[80%] container mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-8">
          Top restaurant chains in Indore
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {
            RestData?.map((restaurant) => (
              <RestCard key={restaurant?.info?.id} restaurant={restaurant} />
            ))
          }
        </div>
      </div>
    </>
  );
}
