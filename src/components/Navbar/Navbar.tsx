import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    FiSearch,
    FiShoppingCart,
    FiTrash2,
    FiMinus,
    FiPlus,
    FiX,
} from "react-icons/fi";

import { useCart } from "../../context/CartContext";

function Navbar() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [cartOpen, setCartOpen] = useState(false);

    const navigate = useNavigate();

    const {
        cart,
        cartCount,
        total,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    // ==============================
    // BÚSQUEDA
    // ==============================

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        const texto = search.trim();

        if (texto !=="") {
            navigate(`/productos?search=${encodeURIComponent(texto)}`);
            setSearchOpen(false);
        }
    };

    // ==============================
    // FORMATO DE PRECIO
    // ==============================

    const formatPrice = (price: number) => {
        const numericPrice = Number(price);

        if (Number.isNaN(numericPrice)) {
            return "$0";
        }

        return `$${numericPrice.toLocaleString("es-AR")}`;
    };

    return (
        <>
            {/* ==============================
                NAVBAR
            ============================== */}

            <header className="w-full bg-white border-b border-gray-200 relative z-50">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="h-20 flex items-center justify-between">

                        {/* ==============================
                            LOGO
                        ============================== */}

                        <Link
                            to="/"
                            className="text-2xl font-bold text-gray-900 tracking-wide"
                        >
                            MEG
                        </Link>

                        {/* ==============================
                            LINKS
                        ============================== */}

                        <nav className="flex items-center gap-2 sm:gap-5">

                            <Link
                                to="/categorias"
                                className="text-xs font-medium text-gray-700 sm:text-sm"
                            >
                                Categorías
                            </Link>

                            <Link
                                to="/productos"
                                className="text-xs font-medium text-gray-700 sm:text-sm"
                            >
                                Productos
                            </Link>

                            <Link
                                to="/nosotros"
                                className="text-xs font-medium text-gray-700 sm:text-sm"
                            >
                                Nosotros
                            </Link>

                        </nav>

                        {/* ==============================
                            DERECHA
                        ============================== */}

                        <div className="flex items-center gap-5">

                            {/* BUSCADOR */}

                            {searchOpen && (
                                <form
                                    onSubmit={handleSearch}
                                    className="flex items-center"
                                >
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                        placeholder="Buscar producto..."
                                        autoFocus
                                        className="w-40 md:w-56 border-b border-gray-400 outline-none px-2 py-1 text-gray-700"
                                    />
                                </form>
                            )}

                            <button
                                type="button"
                                onClick={() =>
                                    setSearchOpen((prev) => !prev)
                                }
                                className="text-gray-800 hover:text-blue-600 transition"
                            >
                                {searchOpen ? (
                                    <FiX size={25} />
                                ) : (
                                    <FiSearch size={25} />
                                )}
                            </button>

                            {/* ==============================
                                CARRITO
                            ============================== */}

                            <div className="relative">

                                <button
                                    type="button"
                                    onClick={() =>
                                        setCartOpen((prev) => !prev)
                                    }
                                    className="relative text-gray-800 hover:text-blue-600 transition"
                                >
                                    <FiShoppingCart size={28} />

                                    {cartCount > 0 && (
                                        <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                            {cartCount}
                                        </span>
                                    )}
                                </button>

                                {/* ==============================
                                    DROPDOWN DEL CARRITO
                                ============================== */}

                                {cartOpen && (
                                    <div className="absolute right-0 top-12 w-[360px] bg-white border border-gray-200 rounded-2xl shadow-xl p-5">

                                        {/* CABECERA */}

                                        <div className="flex items-center justify-between mb-5">

                                            <h2 className="text-xl font-semibold text-gray-900">
                                                Mi carrito
                                            </h2>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setCartOpen(false)
                                                }
                                                className="text-gray-500 hover:text-gray-900"
                                            >
                                                <FiX size={22} />
                                            </button>

                                        </div>

                                        {/* ==============================
                                            CARRITO VACÍO
                                        ============================== */}

                                        {cart.length === 0 ? (

                                            <div className="py-10 text-center">

                                                <p className="text-gray-500">
                                                    Tu carrito está vacío
                                                </p>

                                            </div>

                                        ) : (

                                            <>

                                                {/* ==============================
                                                    PRODUCTOS
                                                ============================== */}

                                                <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">

                                                    {cart.map((item) => (

                                                        <div
                                                            key={item.product.id}
                                                            className="flex gap-3 border-b border-gray-100 pb-4"
                                                        >

                                                            {/* IMAGEN */}

                                                            <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">

                                                                <img
                                                                    src={item.product.image}
                                                                    alt={item.product.name}
                                                                    className="w-full h-full object-cover"
                                                                    onError={(e) => {
                                                                        e.currentTarget.style.display =
                                                                            "none";
                                                                    }}
                                                                />

                                                            </div>

                                                            {/* INFORMACIÓN */}

                                                            <div className="flex-1 min-w-0">

                                                                <p className="font-medium text-gray-900 truncate">
                                                                    {item.product.name}
                                                                </p>

                                                                <p className="text-sm text-gray-500 mt-1">
                                                                    {formatPrice(item.product.price)}
                                                                </p>

                                                                {/* CANTIDAD */}

                                                                <div className="flex items-center gap-3 mt-2">

                                                                    <button
                                                                        type="button"
                                                                        onClick={() =>
                                                                            decreaseQuantity(
                                                                                item.product.id
                                                                            )
                                                                        }
                                                                        className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                                                    >
                                                                        <FiMinus
                                                                            size={
                                                                                14
                                                                            }
                                                                        />
                                                                    </button>

                                                                    <span className="text-sm font-medium">
                                                                        {item.quantity}
                                                                    </span>

                                                                    <button
                                                                        type="button"
                                                                        onClick={() =>
                                                                            increaseQuantity(
                                                                                item.product.id
                                                                            )
                                                                        }
                                                                        className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                                                    >
                                                                        <FiPlus
                                                                            size={
                                                                                14
                                                                            }
                                                                        />
                                                                    </button>

                                                                </div>

                                                            </div>

                                                            {/* ELIMINAR */}

                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    removeFromCart(
                                                                        item.product.id
                                                                    )
                                                                }
                                                                className="text-gray-400 hover:text-red-500 self-start"
                                                            >
                                                                <FiTrash2
                                                                    size={18}
                                                                />
                                                            </button>

                                                        </div>

                                                    ))}

                                                </div>

                                                {/* ==============================
                                                    TOTAL
                                                ============================== */}

                                                <div className="border-t border-gray-200 mt-5 pt-4">

                                                    <div className="flex items-center justify-between mb-4">

                                                        <span className="text-gray-600">
                                                            Total
                                                        </span>

                                                        <span className="text-xl font-bold text-gray-900">
                                                            {formatPrice(total)}
                                                        </span>

                                                    </div>

                                                    {/* ==============================
                                                        VER CARRITO
                                                    ============================== */}

                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setCartOpen(false);
                                                            navigate("/cart");
                                                        }}
                                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition"
                                                    >
                                                        Ver carrito
                                                    </button>

                                                </div>

                                            </>

                                        )}

                                    </div>
                                )}

                            </div>

                        </div>

                    </div>

                </div>

            </header>
        </>
    );
}

export default Navbar;