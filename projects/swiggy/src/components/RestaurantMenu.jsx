import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Navbar from "./Navbar";

export function RestuarantMenu() {
  const [restMenuData, setRestMenuData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      // const proxyServer = "https://cors-anywhere.herokuapp.com/";
      // const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=${id}`;
      // const response = await fetch(proxyServer + swiggyAPI);
      const response = await fetch("/src/utils/pl.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        const data = await response.json();
        // const tempData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const tempData = data;
        const filterData = tempData?.filter((item) => 'title' in item?.card?.card);
        setRestMenuData(filterData);
      }
    }
    fetchData();
  }, []);
  console.log("Restuarant Menu Data:", restMenuData);
  return (
    <>
      <Navbar />
      <div className="w-[60%] container mx-auto mt-10">
        <div className="text-base text-center text-[#02060C99]">MENU</div>
        <a className="h-12 rounded-xl bg-[#02060C1A] flex items-center justify-center my-3 text-[#02060C99]" href="#">
          Search for dishes
        </a>
      </div>
    </>
  );
}
