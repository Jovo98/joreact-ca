import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const url = "https://v2.api.noroff.dev/online-shop/";

export function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data.data);
      setFilteredProducts(data.data);
      console.log(data.data);
    }
    getProducts();
  }, []);

  function handleSearch(event) {
    const query = event.target.value.toLowerCase();
    setSearchTerm(query);

    if (query === "") {
      setFilteredProducts(products);
      setSuggestions([]);
      return;
    }

    const matchedProducts = products.filter(product =>
        product.title.toLowerCase().includes(query)
    );

    setFilteredProducts(matchedProducts);
    setSuggestions(matchedProducts.map(product => product.title));
  }

  function handleSuggestionClick(title) {
    setSearchTerm(title);
    setSuggestions([]);
    const matchedProducts = products.filter(product =>
        product.title.toLowerCase() === title.toLowerCase()
    );
    setFilteredProducts(matchedProducts);
  }

  return (
      <>
        <h1 className="m-4 font-bold text-3xl">Products Page</h1>
        <div className="relative w-1/2 mx-auto">
          <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search products..."
              className="w-full p-2 border rounded"
          />
          {suggestions.length > 0 && (
              <ul className="absolute w-full bg-white border rounded shadow-md">
                {suggestions.map((suggestion, index) => (
                    <li
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="p-2 cursor-pointer hover:bg-gray-200"
                    >
                      {suggestion}
                    </li>
                ))}
              </ul>
          )}
        </div>
        <div className="flex flex-wrap gap-6 justify-center mt-4">
          {filteredProducts.map((product) => (
              <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className="max-w-64 hover:shadow-xl rounded-lg p-2 border"
              >
                <img
                    src={product.image.url}
                    alt={product.image.alt}
                    className="h-64 object-cover w-full"
                />
                <h2 className="font-bold text-2xl mt-2">{product.title}</h2>
                <p>{product.description}</p>
                {product.discountedPrice < product.price ? (
                    <>
                      <p className="line-through text-gray-500">${product.price}</p>
                      <p className="text-red-500 font-bold">SALE: ${product.discountedPrice}</p>
                    </>
                ) : (
                    <p className="font-bold">${product.price}</p>
                )}

              </Link>
          ))}
        </div>
      </>
  );
}
