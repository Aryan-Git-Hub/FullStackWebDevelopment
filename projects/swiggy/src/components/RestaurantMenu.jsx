import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router";
import Navbar from "./Navbar";

const Partition = () => {
  return (<div className="h-4 bg-[#02060C0D] mt-4"></div>);
}
const DownArrow = ({ className = "w-4 h-4", recommendedDropDown }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" // Increased thickness to match your screenshot
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
};

export const UpArrow = ({ className = "w-4 h-4" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
};

const RecommendedMenu = () => {
  return (
    <div>
      Recommended content here...
    </div>
  )
}

export function RestuarantMenu() {
  const [restMenuData, setRestMenuData] = useState([]);
  const { id } = useParams();
  const [selected, setSelected] = useState("all");
  const [recommendedDropDown, setRecommendedDropDown] = useState(false);

  const options = [
    { id: "veg", label: "Veg", color: "text-[#1BA672]", icon: "●" },
    { id: "non-veg", label: "Non-Veg", color: "text-[#E43B4F]", icon: "▲" },
  ];
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
        const filterData = tempData?.filter(
          (item) => "title" in item?.card?.card
        );
        setRestMenuData(filterData);
      }
    }
    fetchData();
  }, []);

const topPicks = useMemo(() => {
    // Find the Top Picks section
    const topPicksCard = restMenuData.find((card) => card?.card?.card?.title==="Top Picks");
    const carouselData = topPicksCard?.card?.card?.carousel || [];
    // Apply Filter Logic
    if (selected==="veg") {
        return carouselData.filter((item) => item?.dish?.info?.isVeg!==undefined);
    } 
    if (selected==="non-veg") {
        return carouselData.filter((item) => item?.dish?.info?.isVeg===undefined);
    }
    return carouselData;
}, [restMenuData, selected]); // Only re-calculates if these change, it doesn't re-render because now topPics is not state variable

  if (restMenuData.length == 0) return (<div>Loading...</div>);
  return (
    <>
      <Navbar />
      <div className="w-[60%] container mx-auto mt-10">
        <div className="text-base text-center text-[#02060C99]">MENU</div>
        <a
          className="h-12 rounded-xl bg-[#02060C1A] flex items-center justify-center my-3 text-[#02060C99]"
          href="#"
        >
          Search for dishes
        </a>
        <div className="flex gap-2 mt-5">
          {options.map((opt) => (
            <label
              key={opt.id}
              className="cursor-pointer flex items-center h-9 px-3 border border-[#02060C26] rounded-[18px] transition-all hover:bg-gray-50"
            >
              <input
                type="checkbox"
                name="diet"
                className="hidden"
                checked={selected === opt.id}
                onChange={() => {
        // If the same option is clicked, set it to 'all' or null, otherwise set the new ID
        setSelected(selected === opt.id ? 'all' : opt.id);
      }}
              />

              {/* Background color handle */}
              <div
                className={`w-9.5 h-3 rounded-full transition-colors duration-200 flex items-center
      ${
        selected === opt.id
          ? opt.id === "veg"
            ? "bg-[#1BA672]"
            : "bg-[#E43B4F]"
          : "bg-gray-200"
      }
    `}
              >
                {/* The Moving Slider Thumb */}
                <div
                  className={`
        w-5 h-5 bg-white rounded-md shadow-sm flex items-center justify-center transition-transform duration-200
        ${selected === opt.id ? "translate-x-4.5" : "translate-x-0"}
      `}
                >
                  {/* The Icon inside the Thumb (Square with Dot/Triangle) */}
                  <div
                    className={`h-full w-full
              border-2 rounded-md ${opt.color} flex items-center justify-center
          ${opt.id === "veg" ? "border-green-700" : "border-red-700"}
        `}
                  >
                      {opt.icon}
                  </div>
                </div>
              </div>
            </label>
          ))}
          <div className="border border-[#02060C26] rounded-[18px] px-3 py-2 text-sm">
            Bestseller
          </div>
        </div>
        <div className="my-6 h-[0.5px] bg-[#02060C26]"></div>
        <div>
          <div>
            <div className="flex justify-between items-center text-xl font-bold mb-4">
              <h1>Top Picks</h1>
              <div></div>
            </div>
            <div className="flex flex-nowrap overflow-x-auto gap-3 no-scrollbar p-4">
              {topPicks.length>0 && topPicks.map((item) => (
                <div className="flex-none w-[20vw]" key={item?.bannerId}>
                  <img className="" src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.creativeId}`} alt="" />
                </div>
              ))}
            </div>
          </div>
          <Partition />
          <div className="mx-4 mb-4 mt-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-[#02060ceb] text-xl font-bold">Recommended (20)</h1>
              <button className="p-1 cursor-pointer" onClick={()=>setRecommendedDropDown(!recommendedDropDown)}>
              {recommendedDropDown ? <UpArrow className="w-5 h-5" /> : <DownArrow className="w-5 h-5" />}
              </button>
            </div>
            {recommendedDropDown && <RecommendedMenu />}
          </div>
          <Partition />
        </div>
      </div>
    </>
  );
}
