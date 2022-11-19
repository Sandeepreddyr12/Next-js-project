import {AiFillStar,AiOutlineStar} from 'react-icons/ai'

export default async function ProductScreen({params}) {

  

  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${params.slug}`);
  const data = await res.json();

  const addToCartHandler = () => {console.log("cart button")}

  

  return (
    <div className='w-3/5 m-auto'>
      <div className='flex items-center my-10 space-x-10'>
        <div className='product-img w-[500px] h-[500px]'>
          <img className='w-full h-full object-contain' src= {data.category?.image} alt={data.category.name} />
        </div>
        <div className='product-detail w-1/2 space-y-10'>
          <h1 className='text-4xl font-bold'>{data.title}</h1>
          <h2 className='text-xl font-semibold'>&#x20B9; {data.price}</h2>
          <p>
            {data.description}
          </p>
          <div className='stars flex space-x-2'>
            <div><AiFillStar/></div>
            <div><AiFillStar/></div>
            <div><AiFillStar/></div>
            <div><AiOutlineStar/></div>
            <div><AiOutlineStar/></div>
          </div>
          <input className='outline-0 w-16 px-2 border-2 border-gray-800' min = '1' max = '5' type="Number" id='amount' />
          <div className='btns space-x-5'>
            <button className='bg-stone-800 text-white px-5 py-2'>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

  


// export default ProductDetail