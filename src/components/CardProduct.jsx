
export default function CardProduct({image, nameP}) {
  return (
    <div>
        <img src={image} alt="" className="mb-[50px] md:w-auto w-[420px]"/>
        <p className="text-[18px] md:w-[550px]">{nameP}</p>
    </div>
  )
}