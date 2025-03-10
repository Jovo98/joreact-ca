import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../store";

export function SpecificProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();
    const [notifications, setNotifications] = useState([]);
    const url = "https://v2.api.noroff.dev/online-shop/";

    useEffect(() => {
        async function getProduct() {
            try {
                const res = await fetch(url + id);
                const data = await res.json();
                setProduct(data.data);
            } catch (error) {
                console.error("Failed to fetch product", error);
            }
        }
        getProduct();
    }, [id]);

    const handleAddToCart = (product) => {
        addToCart(product);
        const newNotification = "Added to cart";

        setNotifications((prevNotifications) => [...prevNotifications, newNotification]);

        setTimeout(() => {
            setNotifications((prevNotifications) => prevNotifications.slice(1));
        }, 3000);
    };

    if (!product) {
        return <p className="text-lg font-semibold text-center">Loading...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
            <h1 className="font-bold text-4xl text-gray-900 mb-6">{product.title}</h1>
            <div className="flex flex-col md:flex-row gap-6">
                <img
                    src={product.image.url}
                    alt={product.image.alt}
                    className="h-64 w-64 object-cover rounded-lg shadow-lg mx-auto md:mx-0"
                />
                <div className="flex flex-col justify-between">
                    <p className="mt-2 text-lg text-gray-700">{product.description}</p>
                    <div className="mt-4">
                        {product.discountedPrice < product.price ? (
                            <>
                                <p className="line-through text-gray-500 text-lg">${product.price}</p>
                                <p className="text-red-500 font-bold text-xl">SALE: ${product.discountedPrice}</p>
                            </>
                        ) : (
                            <p className="font-bold text-xl text-gray-900">${product.price}</p>
                        )}
                    </div>
                    <button
                        className="cursor-pointer mt-6 bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition"
                        onClick={() => handleAddToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            <div className="absolute top-10 right-0 p-2 space-y-2 z-10">
                {notifications.map((notification, index) => (
                    <div
                        key={index}
                        className="items-center align-center text-center bg-gray-400 text-white px-4 py-2 rounded-lg shadow-lg"

                    >
                        <img
                            src={product.image.url}
                            alt={product.image.alt}
                            className="h-24 w-24 object-cover rounded-lg m-2"
                        />
                        <p>1x</p>

                        {notification}
                    </div>
                ))}
            </div>
        </div>
    );
}
