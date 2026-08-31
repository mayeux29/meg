interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">

            <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
            />

            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                    {product.description}
                </p>

                <p className="text-xl font-bold text-gray-900 mt-3">
                    ${product.price.toLocaleString("es-AR")}
                </p>
            </div>

        </div>
    );
};

export default ProductCard;