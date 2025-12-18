import React from "react";
export default function DineCard({ restaurant }) {

  return (
    <>
        <div className="flex-none w-82 h-fit rounded-2xl shadow-md">
            <div className="relative">
                <a href={"https://www.swiggy.com/restaurants/"+restaurant?.info?.id+"/dineout"}>
                    <img className="rounded-t-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restaurant?.info?.mediaFiles[0]?.url} alt="" />
                </a>
                <div className="p-3 absolute bottom-0 left-0 right-0 flex justify-between items-center text-white z-10">
                    <p className="font-bold text-xl">{restaurant?.info?.name}</p>
                    <p className="text-base">{restaurant?.info?.rating?.value}</p>
                </div>
                <div className="absolute bg-linear-to-t from-black h-10 bottom-0 left-0 right-0"></div>
            </div>
            <div className="px-3 pb-3 text-[13px] text-[#02060C99]">
                <div className="flex justify-between mt-1">
                    <h3>
                        {restaurant?.info?.cuisines?.map((cuisine, index) => (
                        <React.Fragment key={index}>
                            {cuisine}
                            {index < restaurant.info.cuisines.length - 1 && <span> • </span>}
                        </React.Fragment>
                        ))}
                    </h3>
                    <h3>{restaurant?.info?.costForTwo}</h3>
                </div>
                <div className="flex justify-between mt-1">
                    <h3>{restaurant?.info?.locality}, {restaurant?.info?.locationInfo?.city?.name}</h3>
                    <h3>{restaurant?.info?.locationInfo?.distanceString}</h3>
                </div>
                <div className="flex items-center gap-1.5 mt-2.5">
                    <span className="flex items-center gap-0.5 bg-[#f0f0f5] px-2 py-0.5 rounded-xl">
                        <img className="w-3 h-3" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png" alt="" />
                        <p className="inline">Table booking</p>
                    </span>
                </div>
                <div className="mt-3 px-2 flex justify-between items-center bg-[#1BA672] h-9 rounded-xl text-white">
                    <div className="flex items-center">
                        <img className="w-6.5 h-5" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png" alt="" />
                        <h3>Flat 20% off on pre-booking</h3>
                    </div>
                    <div>
                        +3 more
                    </div>
                </div>
                <div className="mt-3 px-2 flex items-center bg-[#c8f9e5] h-9 rounded-xl text-[#1BA672]">Up to 10% off with bank offers</div>
            </div>
        </div>
    </>
  )
}