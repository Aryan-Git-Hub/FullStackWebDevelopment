import { imageGridCards } from "../utils/Groceries"
import GroceryCard from "./GroceryCard"

export default function Groceries() {

  return (
    <>
        <div className="w-[80%] container mx-auto mt-30">
          <h2 className="text-2xl font-bold mb-8">Shop groceries on Instamart</h2>
          <div className="flex flex-nowrap overflow-x-auto gap-10 no-scrollbar">
              {imageGridCards?.map((food)=> <GroceryCard key={food?.id} food={food} />)}
          </div>
        </div>
    </>
  );
}