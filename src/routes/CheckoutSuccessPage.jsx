import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../store";

export function CheckoutSuccessPage() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, [clearCart]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Thank you for your purchase!</h1>
            <p className="text-xl mb-6">Your order was successful.</p>
            <Link to="/" className="text-blue-500 font-bold text-lg hover:underline">
                Back to Store
            </Link>
            <p>
            <Link to="/contact-us" className="text-blue-500 font-bold text-lg hover:underline">
                Contact Us
            </Link></p>
        </div>
    );
}
