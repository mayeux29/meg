import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";


// PRODUCTO
export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}


// PRODUCTO DENTRO DEL CARRITO
export interface CartItem {
    product: Product;
    quantity: number;
}

// TIPO DEL CONTEXTO
interface CartContextType {
    cart: CartItem[];

    addToCart: (product: Product) => void;

    removeFromCart: (id: number) => void;

    clearCart: () => void;

    increaseQuantity: (id: number) => void;

    decreaseQuantity: (id: number) => void;

    total: number;

    cartCount: number;
}


// CONTEXTO
const CartContext = createContext<CartContextType | undefined>(
    undefined
);


// PROVIDER
export function CartProvider({
    children,
}: {
    children: ReactNode;
}) {

    const [cart, setCart] = useState<CartItem[]>([]);


    // AGREGAR PRODUCTO
    const addToCart = (product: Product) => {

        setCart((prevCart) => {

            const existingProduct = prevCart.find(
                (item) => item.product.id === product.id
            );


            // Si ya existe, aumenta la cantidad
            if (existingProduct) {

                return prevCart.map((item) =>

                    item.product.id === product.id

                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                        }

                        : item
                );
            }


            // Si no existe, lo agrega
            return [
                ...prevCart,

                {
                    product: product,
                    quantity: 1,
                },
            ];
        });
    };


    // ELIMINAR PRODUCTO
    const removeFromCart = (id: number) => {

        setCart((prevCart) =>
            prevCart.filter(
                (item) => item.product.id !== id
            )
        );
    };


    // AUMENTAR CANTIDAD
    const increaseQuantity = (id: number) => {

        setCart((prevCart) =>

            prevCart.map((item) =>

                item.product.id === id

                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }

                    : item
            )
        );
    };

    // DISMINUIR CANTIDAD
    const decreaseQuantity = (id: number) => {

        setCart((prevCart) =>

            prevCart

                .map((item) =>

                    item.product.id === id

                        ? {
                            ...item,
                            quantity: item.quantity - 1,
                        }

                        : item
                )

                // Si llega a 0, se elimina
                .filter((item) => item.quantity > 0)
        );
    };


    // VACIAR CARRITO
    const clearCart = () => {
        setCart([]);
    };


    // TOTAL
    const total = cart.reduce(

        (acc, item) =>

            acc +
            item.product.price *
            item.quantity,

        0
    );


    // CANTIDAD TOTAL
    const cartCount = cart.reduce(

        (acc, item) =>
            acc + item.quantity,

        0
    );


    // PROVIDER
    return (

        <CartContext.Provider
            value={{
                cart,

                addToCart,

                removeFromCart,

                clearCart,

                increaseQuantity,

                decreaseQuantity,

                total,

                cartCount,
            }}
        >

            {children}

        </CartContext.Provider>
    );
}


// HOOK useCart
export function useCart() {

    const context = useContext(CartContext);


    if (!context) {

        throw new Error(
            "useCart debe utilizarse dentro de un CartProvider"
        );
    }


    return context;
}