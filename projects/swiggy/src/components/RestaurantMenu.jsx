import { useState, useEffect } from "react";
import { useParams } from "react-router";

export function RestuarantMenu() {
  const [restMenuData, setRestMenuData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
    //   const proxyServer = "https://cors-anywhere.herokuapp.com/";
    //   const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=${id}`;
    //   const response = await fetch(proxyServer + swiggyAPI);
      const response = await fetch("/src/utils/pl.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        const data = await response.json();
        const tempData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const filterData = tempData?.filter((item) => 'title' in item?.card?.card);
        setRestMenuData(filterData);
      }
    }
    fetchData();
  }, []);
  console.log("Restuarant Menu Data:", restMenuData);
  return (
    <>
      <h1>Restuarant Menu - {id}</h1>
    </>
  );
}
