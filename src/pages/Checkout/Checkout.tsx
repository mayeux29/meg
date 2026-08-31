import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Checkout() {
    const { cart, total, clearCart } = useCart();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        alert("¡Compra realizada correctamente!");

        clearCart();
    };

    // SI EL CARRITO ESTÁ VACÍO
    if (cart.length === 0) {
        return (
            <main className="min-h-screen bg-white px-6 py-16">
                <div className="mx-auto max-w-2xl text-center">

                    <h1 className="mb-4 text-3xl font-bold text-gray-900">
                        No hay productos en tu carrito
                    </h1>

                    <p className="mb-8 text-gray-500">
                        Agregá algún producto antes de finalizar tu compra.
                    </p>

                    <Link
                        to="/productos"
                        className="inline-block rounded-full bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-700 transition"
                    >
                        Ver productos
                    </Link>

                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white px-6 py-12">

            <div className="mx-auto max-w-5xl">

                {/* TÍTULO */}
                <div className="mb-10">

                    <h1 className="text-3xl font-bold text-gray-900">
                        Finalizar compra
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Completá tus datos para realizar el pedido.
                    </p>

                </div>

                <div className="grid gap-10 md:grid-cols-2">

                    {/* FORMULARIO */}
                    <div className="rounded-2xl border border-gray-200 p-6">

                        <h2 className="mb-6 text-xl font-bold text-gray-900">
                            Datos de contacto
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >

                            {/* NOMBRE */}
                            <div>

                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Nombre completo
                                </label>

                                <input
                                    type="text"
                                    required
                                    placeholder="Tu nombre"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-gray-900"
                                />

                            </div>

                            {/* EMAIL */}
                            <div>

                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    required
                                    placeholder="tuemail@gmail.com"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-gray-900"
                                />

                            </div>

                            {/* TELÉFONO */}
                            <div>

                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Teléfono
                                </label>

                                <input
                                    type="tel"
                                    required
                                    placeholder="11 1234 5678"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-gray-900"
                                />

                            </div>

                            {/* DIRECCIÓN */}
                            <div>

                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Dirección
                                </label>

                                <input
                                    type="text"
                                    required
                                    placeholder="Calle y número"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-gray-900"
                                />

                            </div>

                            {/* BOTÓN */}
                            <button
                                type="submit"
                                className="w-full rounded-full bg-gray-900 py-4 font-medium text-white hover:bg-gray-700 transition"
                            >
                                Confirmar compra
                            </button>

                        </form>

                    </div>

                    {/* RESUMEN DEL PEDIDO */}
                    <div className="rounded-2xl border border-gray-200 p-6">

                        <h2 className="mb-6 text-xl font-bold text-gray-900">
                            Resumen del pedido
                        </h2>

                        <div className="space-y-5">

                            <div className="space-y-5">
                                {cart.map((item) => (
                                    <div
                                        key={item.product.id}
                                        className="flex items-center gap-4"
                                    >
                                        {/* IMAGEN */}
                                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                            <img
                                                src={item.product.image}
                                                alt={item.product.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* INFORMACIÓN */}
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-900">
                                                {item.product.name}
                                            </p>

                                            <p className="text-sm text-gray-500">
                                                Cantidad: {item.quantity}
                                            </p>
                                        </div>

                                        {/* PRECIO */}
                                        <p className="font-medium text-gray-900">
                                            ${(item.product.price * item.quantity).toLocaleString("es-AR")}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* TOTAL */}
                        <div className="mt-8 border-t border-gray-200 pt-6">

                            <div className="flex items-center justify-between">

                                <span className="text-lg text-gray-600">
                                    Total
                                </span>

                                <span className="text-2xl font-bold text-gray-900">
                                    ${total.toLocaleString("es-AR")}
                                </span>

                            </div>

                        </div>

                        {/* VOLVER AL CARRITO */}
                        <Link
                            to="/cart"
                            className="mt-6 block text-center text-sm text-gray-500 hover:text-gray-900 transition"
                        >
                            ← Volver al carrito
                        </Link>

                    </div>

                </div>

            </div>

        </main>
    );
}

export default Checkout;