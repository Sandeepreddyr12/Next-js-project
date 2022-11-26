'use client';

/* --todo

in next 13, we have to decouple client ( to use event handler, use state..) & server components, later joined in other component to form a single componet.

better layout,
protected routes,


*/

import { useEffect, useState, useContext } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

import { Store } from '../../store/store';

export default function ProductScreen({ params }) {
  const [data, setData] = useState({});
  const [quantity, setquantity] = useState(1);
  const { state, dispatch } = useContext(Store);

  const router = useRouter();

  useEffect(() => {
    async function productFetch() {
      const res = await fetch(
        `https://api.escuelajs.co/api/v1/products/${params.slug}`
      );
      const data = await res.json();
      setData(data);
    }

    productFetch();
  }, [params]);

  const buyingHandler = () => {
    dispatch({ type: 'BUYING_ITEM', payload: { ...data, quantity } });
    router.push('/checkout');
  };


  return (
    <div className="w-10/12 m-auto">
      <div className="flex justify-between items-center my-10 space-x-10 flex-wrap sm:flex-nowrap">
        <div className="product-img w-[500px] h-[500px]">
          <img
            className="w-full h-full object-contain"
            src={data?.category?.image}
            alt={data?.category?.name}
          />
        </div>
        <div className="product-detail w-1/2 space-y-10 justify-self-center">
          <h1 className="text-4xl font-bold">{data?.title}</h1>
          <h2 className="text-xl font-semibold">&#x20B9; {data.price}</h2>
          <p>{data?.description}</p>
          <div className="stars flex space-x-2">
            <div>
              <AiFillStar />
            </div>
            <div>
              <AiFillStar />
            </div>
            <div>
              <AiFillStar />
            </div>
            <div>
              <AiFillStar />
            </div>
            <div>
              <AiOutlineStar />
            </div>
          </div>

          <select
            onChange={(e) => setquantity(e.target.value)}
            id="quantity"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Q</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <div className="btns space-x-5">
            <button
              className="bg-blue-500 text-white px-5 py-2 disabled:cursor-not-allowed mb-10"
              disabled
            >
              Add To Cart
            </button>
            <button
              className="bg-green-500 text-white px-5 py-2"
              onClick={buyingHandler}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
