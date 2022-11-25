import ProductCard from './products/productCard';

/* --todo

pagination
link to products route
better layout,
need other route for home. 


*/


// with revalidate it acts like ISR 
async function fetchProducts(){
  const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=20',{
    next : {revalidate : 300},
  });
  const data = await res.json();
  return data
}


async function Products() {


    const products = await fetchProducts();


    return (
        <div className="flex flex-wrap  justify-center mt-16 min-h-screen">
            {products.length === 0 ? (
                <div className="text-center mt-8">
                    <h4 className="font-krona">Sorry, no products</h4>
                </div>
            ) : (
                <>
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            id= {product.id}
                            name = {product.title}
                            description= {product.description}
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
