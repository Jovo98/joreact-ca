import { create } from "zustand";

export const useCart = create((set) => ({
    cart: [],
    addToCart: (product) =>
        set((state) => {
            const updatedCart = [...state.cart];
            const existingProductIndex = updatedCart.findIndex((item) => item.id === product.id);

            if (existingProductIndex !== -1) {
                updatedCart[existingProductIndex].quantity += 1;
            } else {
                updatedCart.push({ ...product, quantity: 1 });
            }

            return { cart: updatedCart };
        }),
    removeFromCart: (productId) =>
        set((state) => {
            const updatedCart = state.cart.map((item) => {
                if (item.id === productId) {
                    if (item.quantity > 1) {
                        item.quantity -= 1;
                    } else {
                        return null;
                    }
                }
                return item;
            }).filter(Boolean);
            return { cart: updatedCart };
        }),
    clearCart: () => set({ cart: [] }),
}));
