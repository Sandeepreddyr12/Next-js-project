import React from 'react';
// import Image from 'next/image';




const ProductCard = ({ id, name, description, imgUrl, price }) => (
<div
    className=" bg-white w-30 flex flex-col align-center rounded-md mb-6 mr-6 px-4 py-6 transform hover:scale-105 hover:shadow-xl transition delay-50 duration-300 ease-in-out"
    to={`/product/${id}`}
  >
    <div className="flex flex-1 flex-col justify-center mb-4">
      <img  width="220" src={imgUrl} alt={name} 
     className="mx-auto" />
    </div>

    <div>
      <p className="text-yellow text-sm font-extrabold uppercase text-center">{name}</p>

      {/* <p className="mb-4">{description}</p> */}

        <p className="text-xl text-center font-bold pt-2 ml-4">&#x20B9; {price}</p>
    </div>
  </div>
);

export default ProductCard;
