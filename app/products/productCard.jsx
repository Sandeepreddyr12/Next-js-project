// import Image from 'next/image';
import Link from 'next/link';



const ProductCard = ({ id, name, description, imgUrl, price }) => {
  
  
  return(
<div
    className=" bg-white w-60 flex flex-col align-center rounded-md mb-16 mr-10 px-4 py-6 transform hover:scale-105 hover:shadow-xl transition delay-50 duration-300 ease-in-out"
  >
<Link href={`/products/${id}`}>

    <div className="flex flex-1 flex-col justify-center mb-4">
      <img  width="220" src={imgUrl} alt={name} 
     className="mx-auto" />
    </div>

    <div className='wi'>
      <p className="text-yellow text-sm font-extrabold uppercase text-center">{name}</p>

      <p className="my-4 font-semibold text-slate-600 line-clamp-2"   >{description}</p>

        <p className="text-xl text-center font-bold pt-2 ml-4">&#x20B9;{price}.00</p>
    </div>
    </Link>
  </div>
)};

export default ProductCard;
