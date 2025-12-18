export default function Navbar() {
  return (
  <header className="h-20 shadow-[0_15px_40px_-20px_rgba(40,44,63,0.15)] flex items-center justify-around">

    <div className="">
        <div></div>
        <a className="underline text-[#02060CE6] hover:text-[#ff5200] font-bold" href="#">Other</a>
    </div>
    <div className="flex items-center gap-15 text-inherit">
        <a className="hover:text-[#ff5200]" href="#">Swiggy Corporate</a>
        <a className="hover:text-[#ff5200]" href="#">Search</a>
        <a className="hover:text-[#ff5200]" href="#">Offers</a>
        <a className="hover:text-[#ff5200]" href="#">Help</a>
        <a className="hover:text-[#ff5200]" href="#">Sign In</a>
        <a className="hover:text-[#ff5200]" href="#">Cart</a>
    </div>

  </header>
);
}
