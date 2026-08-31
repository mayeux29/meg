import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { useCart } from "../../context/CartContext";

function Cart() {
    const {
        cart,
        total,
        removeFromCart,
        updateQuantity,
    } = useCart();

    if (cart.length === 0) {
        return (
            <main className="min-h-screen bg-white px-6 py-16">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Tu carrito está vacío
                    </h1>

                    <p className="mt-3 text-gray-500">
                        Todavía no agregaste productos a tu carrito.
                    </p>

                    <Link
                        to="/productos"
                        className="mt-8 inline-block rounded-full bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-700"
                    >
                        Ver productos
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white px-6 py-12">
            <div className="mx-auto max-w-4xl">

                {/* Título */}
                <h1 className="mb-8 text-3xl font-bold text-gray-900">
                    Mi carrito
                </h1>

                {/* Productos */}
                <div className="space-y-4">
                    {cart.map((item) => (
                        <div
                            key={item.product.id}
                            className="flex items-center gap-5 rounded-2xl border border-gray-200 p-5"
                        >
                            {/* Imagen */}
                            <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="h-24 w-24 rounded-xl object-cover"
                            />

                            {/* Información */}
                            <div className="flex-1">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    {item.product.name}
                                </h2>

                                {/* Precio unitario */}
                                <p className="mt-1 text-gray-500">
                                    ${item.product.price.toLocaleString("es-AR")}
                                </p>

                                {/* Cantidad */}
                                <div className="mt-3 flex items-center gap-3">
                                    <button
                                        onClick={() =>
                                            updateQuantity(
                                                item.product.id,
                                                item.quantity - 1
                                            )
                                        }
                                        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-lg hover:bg-gray-100"
                                    >
                                        −
                                    </button>

                                    <span className="min-w-5 text-center font-medium">
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() =>
                                            updateQuantity(
                                                item.product.id,
                                                item.quantity + 1
                                            )
                                        }
                                        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-lg hover:bg-gray-100"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Precio total del producto + eliminar */}
                            <div className="flex flex-col items-end gap-4">
                                <p className="font-bold text-gray-900">
                                    $
                                    {(
                                        item.product.price * item.quantity
                                    ).toLocaleString("es-AR")}
                                </p>

                                <button
                                    onClick={() =>
                                        removeFromCart(item.product.id)
                                    }
                                    className="text-gray-400 transition hover:text-red-500"
                                    aria-label="Eliminar producto"
                                >
                                    <FiTrash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Total */}
                <div className="mt-10 border-t border-gray-200 pt-6">
                    <div className="flex items-center justify-between text-xl font-bold">
                        <span>Total</span>

                        <span>
                            ${total.toLocaleString("es-AR")}
                        </span>
                    </div>

                    {/* Finalizar compra */}
                    <Link
                        to="/checkout"
                        className="mt-6 block rounded-full bg-gray-900 py-4 text-center font-medium text-white transition hover:bg-gray-700"
                    >
                        Finalizar compra
                    </Link>

                    {/* Seguir comprando */}
                    <Link
                        to="/productos"
                        className="mt-4 block text-center text-gray-500 hover:text-gray-900"
                    >
                        ← Seguir comprando
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Cart;