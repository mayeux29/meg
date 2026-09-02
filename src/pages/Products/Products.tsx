import { products } from "../../data/products";
import { useSearchParams, Link } from "react-router-dom";

function Products() {
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get("search")?.toLowerCase() || "";

    const categoria = searchParams.get("categoria");
    const busqueda = searchParams.get("busqueda");

    const productosFiltrados = products.filter((product) => {
        const coincideCategoria =
            !categoria || product.category === categoria;

        const coincideBusqueda =
            !busqueda ||
            product.name.toLowerCase().includes(busqueda.toLowerCase()) ||
            product.description.toLowerCase().includes(busqueda.toLowerCase());

        const coincideSearch =
            !searchText ||
            product.name.toLowerCase().includes(searchText) ||
            product.description.toLowerCase().includes(searchText);

        return coincideCategoria && coincideBusqueda && coincideSearch;
    });

    return (
        <main className="min-h-screen bg-white px-6 py-16">
            <div className="mx-auto max-w-7xl">

                {/* ENCABEZADO */}
                <div className="mb-12">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
                        Nuestra colección
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        {categoria || "Productos"}
                    </h1>

                    <p className="mt-4 max-w-2xl text-gray-500">
                        Descubrí nuestra selección de productos pensados para combinar
                        estilo, calidad y personalidad.
                    </p>
                </div>

                {/* SI NO HAY PRODUCTOS */}
                {productosFiltrados.length === 0 ? (
                    <div className="py-20 text-center">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Producto no encontrado
                        </h2>

                        <p className="mt-3 text-gray-500">
                            No encontramos productos que coincidan con tu búsqueda.
                        </p>

                        <Link
                            to="/productos"
                            className="mt-6 inline-block rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white"
                        >
                            Ver todos los productos
                        </Link>
                    </div>
                ) : (
                    /* PRODUCTOS */
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {productosFiltrados.map((product) => (
                            <article
                                key={product.id}
                                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                            >
                                {/* IMAGEN */}
                                <div className="relative aspect-square overflow-hidden bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* ETIQUETA */}
                                    <div
                                        className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${product.stock > 0
                                                ? "bg-white/90 text-green-700"
                                                : "bg-red-500 text-white"
                                            }`}
                                    >
                                        {product.stock > 0 ? "Disponible" : "Sin stock"}
                                    </div>
                                </div>

                                    {/* INFORMACIÓN */}
                                    <div className="p-3 sm:p-5">


                                        <Link to={`/producto/${product.id}`}>
                                            <h2 className="font-semibold text-base text-gray-900 transition-colors group-hover:text-gray-600 sm:text-lg">
                                                {product.name}
                                            </h2>
                                        </Link>

                                        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-500 sm:text-sm">
                                            {product.description}
                                        </p>

                                        {/* PRECIO + BOTÓN */}
                                        <div className="mt-4">
                                            {/* PRECIO */}
                                            <p className="text-base font-bold text-gray-900 sm:text-xl">
                                                ${product.price.toLocaleString("es-AR")}
                                            </p>

                                            {/* BOTÓN */}
                                            <Link
                                                to={`/producto/${product.id}`}
                                                className="mt-3 inline-block rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold text-white sm:px-5 sm:py-2.5 sm:text-sm"
                                            >
                                                Ver producto
                                            </Link>
                                        </div>

                                    </div>
                            </article>
                        ))}
                    </div>
                )}

            </div>
        </main>
    );
}

export default Products;