const ratingSVG = (
  <svg
    className="w-4 h-4 text-white fill-current"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);
export function RestCard({ restaurant }) {
  return (
    <>
      <a
        className="transition-all duration-150 ease-in-out hover:scale-95 cursor-pointer"
        href={restaurant?.cta?.link}
      >
        <div className="relative">
          <img
            className="h-46 w-full object-cover rounded-2xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              restaurant?.info?.cloudinaryImageId
            }
            alt=""
          />
          <div className="p-3 absolute bottom-0 left-0 right-0 flex justify-between items-center text-white z-10">
            <p className="font-bold text-xl">
              {restaurant?.info?.aggregatedDiscountInfoV3 &&
                (restaurant?.info?.aggregatedDiscountInfoV3?.header +
                  " " +
                  (restaurant?.info?.aggregatedDiscountInfoV3?.subHeader || ""))}
            </p>
            <p className="text-base">{restaurant?.info?.rating?.value}</p>
          </div>
          <div className="absolute bg-linear-to-t from-black h-10 bottom-0 left-0 right-0"></div>
        </div>
        <div className="mx-2 mt-2 text-base">
          <div className="font-bold">{restaurant?.info?.name}</div>
          <div className="flex gap-1">
            <div className="bg-[#1BA672] rounded-full p-1 flex items-center justify-center">
            {ratingSVG}
            </div>
            <span className="text-[#02060CEB]">
              {restaurant?.info?.avgRatingString} •{" "}
            </span>
            {restaurant?.info?.sla?.slaString}
          </div>
          <div className="text-[#02060C99] truncate">
            {restaurant?.info?.cuisines.join(", ")}
          </div>
          <div className="text-[#02060C99]">{restaurant?.info?.areaName}</div>
        </div>
      </a>
    </>
  );
}
