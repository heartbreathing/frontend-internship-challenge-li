import React, { useEffect, useState } from 'react';
import axios from 'axios';




const Products = () => {

  const [products, setProducts] = useState([]);
  const [addedToCart, setAddedToCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.revam.cloud/api/extension/');
        setProducts(response.data.slice(0, 10));
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (productID) => {
    try {
      const response = await axios.put('https://api.revam.cloud/api/extension', {
        productID,
      });
      setAddedToCart(response.data.addedToCart);
    } catch (err) {
      console.log(err);
    }
  };

  const isProductAdded = (id) => addedToCart.includes(id);

  return (
    <div className="main-container p-4">
      <div className="center-h1 text-center">
        <h1 className="text-2xl font-semibold">Products</h1>
      </div>
      <ul className="content-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <li key={product.id} className="product-container p-4 border rounded-lg flex flex-col">
            <div className="mb-2">
              <div className="image-container h-48 rounded-md overflow-hidden">
                <img
                  src={product.image_url}
                  alt={product.id}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <div className="text-lg">
                <span className="mr-2">{product.company_source}</span>
                <span>{product.price} {product.currency}</span>
              </div>
            </div>
            <button
              onClick={() => addToCart(product.id)}
              className={`${isProductAdded(product.id) ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'
                } text-white px-4 py-2 rounded-md mt-auto`}
              disabled={isProductAdded(product.id)}
            >
              {isProductAdded(product.id) ? 'Added' : 'Add'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Products;