// color: #ff5200
export default function Header() {
  return (
    <>
      <header className="bg-[#ff5200]">
        <div className="flex items-center justify-between container mx-auto text-base py-6">
          <img
            className="w-40 h-12"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
            alt=""
          />
          <div className="h-20 text-white flex gap-10 items-center">
            <a href="" target="_blank">
              Partner with us
            </a>
            <a href="" target="_blank">
              Swiggy Corporate
            </a>
            <a className="border border-white rounded-xl py-3 px-4 w-38 text-center" href="" target="_blank">
              Get the App
            </a>
            <a className="border border-black bg-black rounded-xl py-3 px-4 w-38 text-center" href="" target="_blank">
              Sign in
            </a>
          </div>
        </div>
        <div className="pt-16 relative">
            <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
            <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
            <div className="text-white text-5xl font-bold text-center container m-auto w-[60%]">
                Order Food & groceries. Discover best restaurants. Swiggy it!
            </div>
            <div className="my-6 flex justify-center items-center gap-4">
                <div className="bg-white h-15 w-70 rounded-2xl flex items-center justify-between">
                    <svg></svg>
                    <input className="h-full focus:outline-none placeholder:text-base" type="text" placeholder="Enter your delivery location" />
                    <svg></svg>
                </div>
                <div className="bg-white h-15 w-120 rounded-2xl flex items-center">
                    <p className="text-[#8C8F91] text-base ml-4">Search for restaurant, item or more</p>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center h-87">
            <img className="h-full object-contain" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
            <img className="h-full object-contain" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" />
            <img className="h-full object-contain" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" />
        </div>
      </header>
    </>
  );
}
