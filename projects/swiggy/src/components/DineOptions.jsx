import { dineoutRestaurants } from "../utils/DineOptions";
import DineCard from "./DineCard";


export default function DineOptions() {
    return (
    <>
        <div className="w-[80%] container mx-auto mt-30">
          <h2 className="text-2xl font-bold mb-8">Discover best restaurants on Dineout</h2>
          <div className="flex flex-nowrap overflow-x-auto gap-4 no-scrollbar">
              {dineoutRestaurants?.map((restaurant)=> <DineCard key={restaurant?.info?.id} restaurant={restaurant} />)}
          </div>
        </div>
    </>
    );
}