export default function FoodCard({ food }) {

  return (
    <>
        <a href={food?.action?.link}>
            <img className="w-36 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+food?.imageId} alt="" />
        </a>
    </>
  )
}