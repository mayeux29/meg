import { Link } from "react-router-dom";

function Categories() {
    const categories = [
        {
            name: "Fundas",
            description: "Protección y diseño para tu iPhone",
        },
        {
            name: "Cables",
            description: "Cables para carga y conexión",
        },
        {
            name: "Cargadores",
            description: "Carga rápida y eficiente",
        },
        {
            name: "MagSafe",
            description: "Accesorios compatibles con MagSafe",
        },
        {
            name: "Audio",
            description: "Auriculares para todos tus momentos",
        },
        {
            name: "Protección",
            description: "Protegé tu pantalla y cámara",
        },
    ];

    return (
        <main className="min-h-screen bg-white px-6 py-16">
            <div className="mx-auto max-w-7xl">

                <div className="mb-12">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
                        Explora MEG
                    </p>

                    <h1 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
                        Categorías
                    </h1>

                    <p className="mt-4 max-w-2xl text-gray-500">
                        Encontrá todo lo que necesitás para complementar tu iPhone.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3">

                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            to={`/productos?categoria=${category.name}`}
                            className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
                        >
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold text-gray-900">
                                    {category.name}
                                </h2>

                                <span className="text-xl text-gray-400 transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </div>

                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                {category.description}
                            </p>

                            <p className="mt-6 text-sm font-medium text-gray-900">
                                Ver productos
                            </p>
                        </Link>
                    ))}

                </div>

            </div>
        </main>
    );
}

export default Categories;