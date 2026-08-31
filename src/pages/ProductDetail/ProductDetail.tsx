import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";

function ProductDetail() {
    const { addToCart } = useCart();
    const { id } = useParams();

    const product = products.find(
        (product) => product.id.toString() === id
    );

    if (!product) {
        return (
            <main className="min-h-screen bg-white px-6 py-16">
                <div className="mx-auto max-w-6xl">
                    <h1 className="text-3xl font-semibold text-neutral-900">
                        Producto no encontrado
                    </h1>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white px-6 py-16">
            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">

                <div className="overflow-hidden rounded-2xl bg-gray-100">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
                        Producto
                    </p>

                    <h1 className="text-4xl font-semibold text-neutral-900">
                        {product.name}
                    </h1>

                    <p className="mt-4 text-lg text-gray-500">
                        {product.description}
                    </p>

                    <p className="mt-6 text-2xl font-semibold text-neutral-900">
                        ${product.price}
                    </p>

                    <button
                        onClick={() => addToCart(product)}
                        className="mt-8 w-full rounded-full bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-gray-700 md:w-fit">
                        Agregar al carrito
                    </button>
                </div>

            </div>
        </main>
    );
}

export default ProductDetail;