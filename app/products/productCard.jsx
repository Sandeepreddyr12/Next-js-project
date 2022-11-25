// import Image from 'next/image';
import Link from 'next/link';

/* --todo

better layout,
cart button

*/


const ProductCard = ({ id, name, description, imgUrl, price }) => {
  
  
  return(
<div
    className=" bg-white w-60  flex flex-col align-center rounded-md mb-16 mr-10 px-4 py-4 transform hover:scale-105 hover:shadow-xl transition delay-50 duration-300 ease-in-out"
  >
<Link href={`/products/${id}`}>

    <div className="flex flex-1 flex-col justify-center mb-4">
      <img  width="220" src={imgUrl} alt={name} 
     className="mx-auto" />
    </div>

    <div className = "h-1/2 flex flex-col justify-between border-solid border-red-700">
      <p className="text-yellow text-sm font-extrabold uppercase text-center">{name}</p>

      <p className="my-4 font-semibold text-slate-600 line-clamp-2">{description}</p>

      <div className = "flex justify-between mb-2">
        <p className="text-lg text-center font-bold pt-2 ml-4">&#x20B9;{price}.00</p>
        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-2 py-2.5 text-center">Know more</button>
      </div>
    </div>
    </Link>
  </div>
)};

export default ProductCard;
