import { imageGridCards } from "../utils/FoodOptions"
import FoodCard from "./FoodCard"

export default function FoodOptions() {

  return (
    <>
        <div className="w-[80%] container mx-auto mt-30">
          <h2 className="text-2xl font-bold mb-8">Order our best food options</h2>
          <div className="flex flex-wrap gap-6">
              {imageGridCards?.map((food)=> <FoodCard key={food?.id} food={food} />)}
          </div>
        </div>
    </>
  );
}