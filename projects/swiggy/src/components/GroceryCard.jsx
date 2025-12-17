export default function GroceryCard({ food }) {

  return (
    <>
        <div className="flex-none">
            <a href={food?.action?.link}>
                <img className="w-36 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+food?.imageId} alt="" />
            </a>
            <h2 className="font-bold text-[#02060CBF] text-center text-xl w-36">{food?.action?.text}</h2>
        </div>
    </>
  )
}