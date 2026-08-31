import ProductCard from "./ProductCard";
import { products } from "../data/products";

const ProductGrid = () => {
    return (
        <section className="px-6 py-12">

            <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                Productos
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

        </section>
    );
};

export default ProductGrid;