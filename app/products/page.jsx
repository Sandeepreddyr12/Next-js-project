// import { useSearchState } from '../../state/search-context';

import ProductCard from './productCard';

async function fetchProducts(){
  const res = await fetch('https://api.escuelajs.co/api/v1/products');
  const data = await res.json();
  return data
}


async function Products() {
    // const [{ products }] = useSearchState();

    const products = await fetchProducts();
    // console.log(products[36])


    return (
        <div className="flex flex-wrap justify-center bg-gray-400">
            {products.length === 0 ? (
                <div className="text-center mt-8">
                    <h4 className="font-krona">Sorry, no products</h4>
                    <p>Please try changing your filters</p>
                </div>
            ) : (
                <>
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            id= {product.id}
                            name = {product.title}
                            // description= {product.description}
                            imgUrl= {product.category.image}
                            price= {product.price}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export default Products;
