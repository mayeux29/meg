import { useState } from "react";
import { products as initialProducts } from "../data/products";

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    variant: string[];
    color: string;
    stock: number;
};

const categories = [
    "Fundas",
    "Cables",
    "Cargadores",
    "MagSafe",
    "Audio",
    "Protección",
];

const variantsByCategory: Record<string, string[]> = {
    Fundas: [
        "iPhone 11",
        "iPhone 11 Pro",
        "iPhone 11 Pro Max",
        "iPhone 12/12 Pro",
        "iPhone 13/14",
        "iPhone 13 Pro",
        "iPhone 13 Pro Max",
        "iPhone 14 Pro",
        "iPhone 14 Pro Max",
        "iPhone 15",
        "iPhone 15 Pro",
        "iPhone 15 Pro Max",
        "iPhone 16",
        "iPhone 16 Pro",
        "iPhone 16 Pro Max",
        "iPhone 17",
        "iPhone 17 Air",
        "iPhone 17 Pro",
        "iPhone 17 Pro Max",
        "Única",
    ],

    Cables: [
        "USB-C",
        "Lightning",
        "USB-C a USB-C",
        "USB-C a Lightning",
        "Única",
    ],

    Cargadores: [
        "20W",
        "25W",
        "Rápido",
        "Única",
    ],

    MagSafe: [
        "Soporte",
        "Anillo",
        "Power Bank",
        "Cargador",
        "Única",
    ],

    Audio: [
        "AirPods",
        "AirPods Pro",
        "EarPods USB-C",
        "EarPods Lightning",
        "Única",
    ],

    Protección: [
        "Vidrio Templado",
        "Vidrio Privacidad",
        "Protector de Cámara",
        "Única",
    ],
};

const colors = [
    "Negro",
    "Blanco",
    "Transparente",
    "Azul",
    "Rojo",
    "Rosa",
    "Verde",
    "Violeta",
    "Gris",
    "Dorado",
    "Plateado",
    "Único",
];

function Admin() {
    const normalizedProducts: Product[] = initialProducts.map((product: any) => ({
        id: product.id,
        name: product.name,
        description: product.description || "",
        price: Number(product.price) || 0,
        image: product.image || "",
        category: product.category || "",
        variant: product.variant || "",
        color: product.color || "",
        stock: Number(product.stock) || 0,
    }));

    const [products, setProducts] = useState<Product[]>(normalizedProducts);

    const [editingId, setEditingId] = useState<number | null>(null);

    const [form, setForm] = useState({
        name: "",
        category: "",
        variant: [] as string[],
        color: "",
        price: "",
        description: "",
        image: "",
        stock: "",
    });

    const resetForm = () => {
        setForm({
            name: "",
            category: "",
            variant: [],
            color: "",
            price: "",
            description: "",
            image: "",
            stock: "",
        });

        setEditingId(null);
    };

    const handleCategoryChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setForm({
            ...form,
            category: e.target.value,
            variant: [],
        });
    };

    const saveProduct = () => {
        if (
            !form.name.trim() ||
            !form.category ||
            !form.variant ||
            !form.color ||
            !form.price
        ) {
            alert(
                "Completá nombre, categoría, variante, color y precio."
            );
            return;
        }

        const price = Number(form.price);
        const stock = Number(form.stock) || 0;

        if (isNaN(price) || price <= 0) {
            alert("Ingresá un precio válido.");
            return;
        }

        if (editingId !== null) {
            setProducts((currentProducts) =>
                currentProducts.map((product) =>
                    product.id === editingId
                        ? {
                            ...product,
                            name: form.name,
                            category: form.category,
                            variant: form.variant,
                            color: form.color,
                            price,
                            description: form.description,
                            image: form.image,
                            stock,
                        }
                        : product
                )
            );

            alert("Producto actualizado correctamente.");
        } else {
            const newProduct: Product = {
                id:
                    products.length > 0
                        ? Math.max(...products.map((p) => p.id)) + 1
                        : 1,
                name: form.name,
                category: form.category,
                variant: form.variant,
                color: form.color,
                price,
                description: form.description,
                image: form.image,
                stock,
            };

            setProducts((currentProducts) => [
                ...currentProducts,
                newProduct,
            ]);

            alert("Producto agregado correctamente.");
        }

        resetForm();
    };

    const editProduct = (product: Product) => {
        setEditingId(product.id);

        setForm({
            name: product.name,
            category: product.category,
            variant: product.variant,
            color: product.color,
            price: String(product.price),
            description: product.description,
            image: product.image,
            stock: String(product.stock),
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const deleteProduct = (id: number) => {
        const confirmed = window.confirm(
            "¿Seguro que querés eliminar este producto?"
        );

        if (!confirmed) return;

        setProducts((currentProducts) =>
            currentProducts.filter((product) => product.id !== id)
        );

        if (editingId === id) {
            resetForm();
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#f5f7fb",
                padding: "30px",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                {/* ENCABEZADO */}

                <div
                    style={{
                        marginBottom: "30px",
                    }}
                >
                    <h1
                        style={{
                            margin: 0,
                            fontSize: "32px",
                            fontWeight: 700,
                            color: "#111827",
                        }}
                    >
                        Administrador MEG
                    </h1>

                    <p
                        style={{
                            marginTop: "8px",
                            color: "#6b7280",
                        }}
                    >
                        Administrá los productos de tu tienda.
                    </p>
                </div>

                {/* FORMULARIO */}

                <div
                    style={{
                        background: "#ffffff",
                        borderRadius: "20px",
                        padding: "28px",
                        marginBottom: "30px",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
                    }}
                >
                    <h2
                        style={{
                            marginTop: 0,
                            marginBottom: "24px",
                            fontSize: "22px",
                            color: "#111827",
                        }}
                    >
                        {editingId !== null
                            ? "Editar producto"
                            : "Agregar producto"}
                    </h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(240px, 1fr))",
                            gap: "18px",
                        }}
                    >
                        {/* NOMBRE */}

                        <div>
                            <label style={labelStyle}>
                                Nombre del producto
                            </label>

                            <input
                                type="text"
                                value={form.name}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        name: e.target.value,
                                    })
                                }
                                placeholder="Ej: Funda MagSafe"
                                style={inputStyle}
                            />
                        </div>

                        {/* CATEGORÍA */}

                        <div>
                            <label style={labelStyle}>
                                Categoría
                            </label>

                            <select
                                value={form.category}
                                onChange={handleCategoryChange}
                                style={inputStyle}
                            >
                                <option value="">
                                    Seleccionar categoría
                                </option>

                                {categories.map((category) => (
                                    <option
                                        key={category}
                                        value={category}
                                    >
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* VARIANTE */}
                        <div>
                            <label style={labelStyle}>Variante</label>

                            {!form.category ? (
                                <div
                                    style={{
                                        ...inputStyle,
                                        backgroundColor: "#f3f4f6",
                                        color: "#9ca3af",
                                        cursor: "not-allowed",
                                    }}
                                >
                                    Primero elegí una categoría
                                </div>
                            ) : (
                                <div
                                    style={{
                                        border: "1px solid #d1d5db",
                                        borderRadius: "8px",
                                        padding: "12px",
                                        maxHeight: "180px",
                                        overflowY: "auto",
                                        backgroundColor: "#fff",
                                    }}
                                >
                                    {variantsByCategory[form.category]?.map((variant) => (
                                        <label
                                            key={variant}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "10px",
                                                padding: "8px 4px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={form.variant.includes(variant)}
                                                onChange={() => {
                                                    setForm((prev) => ({
                                                        ...prev,
                                                        variant: prev.variant.includes(variant)
                                                            ? prev.variant.filter((item) => item !== variant)
                                                            : [...prev.variant, variant],
                                                    }));
                                                }}
                                            />

                                            <span>{variant}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* COLOR */}

                    <div>
                        <label style={labelStyle}>
                            Color
                        </label>

                        <select
                            value={form.color}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    color: e.target.value,
                                })
                            }
                            style={inputStyle}
                        >
                            <option value="">
                                Seleccionar color
                            </option>

                            {colors.map((color) => (
                                <option
                                    key={color}
                                    value={color}
                                >
                                    {color}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* PRECIO */}

                    <div>
                        <label style={labelStyle}>
                            Precio
                        </label>

                        <input
                            type="number"
                            value={form.price}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    price: e.target.value,
                                })
                            }
                            placeholder="Ej: 18000"
                            min="0"
                            style={inputStyle}
                        />
                    </div>

                    {/* STOCK */}

                    <div>
                        <label style={labelStyle}>
                            Stock
                        </label>

                        <input
                            type="number"
                            value={form.stock}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    stock: e.target.value,
                                })
                            }
                            placeholder="Ej: 10"
                            min="0"
                            style={inputStyle}
                        />
                    </div>

                    {/* IMAGEN */}

                    <div
                        style={{
                            gridColumn: "1 / -1",
                        }}
                    >
                        <label style={labelStyle}>
                            Imagen
                        </label>

                        <input
                            type="text"
                            value={form.image}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    image: e.target.value,
                                })
                            }
                            placeholder="/Imagen1.jpeg"
                            style={inputStyle}
                        />
                    </div>

                    {/* DESCRIPCIÓN */}

                    <div
                        style={{
                            gridColumn: "1 / -1",
                        }}
                    >
                        <label style={labelStyle}>
                            Descripción
                        </label>

                        <textarea
                            value={form.description}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    description: e.target.value,
                                })
                            }
                            placeholder="Descripción del producto..."
                            rows={4}
                            style={{
                                ...inputStyle,
                                resize: "vertical",
                            }}
                        />
                    </div>
                </div>

                {/* BOTONES */}

                <div
                    style={{
                        display: "flex",
                        gap: "12px",
                        marginTop: "24px",
                        flexWrap: "wrap",
                    }}
                >
                    <button
                        onClick={saveProduct}
                        style={primaryButtonStyle}
                    >
                        {editingId !== null
                            ? "Guardar cambios"
                            : "Agregar producto"}
                    </button>

                    {editingId !== null && (
                        <button
                            onClick={resetForm}
                            style={secondaryButtonStyle}
                        >
                            Cancelar
                        </button>
                    )}
                </div>
            </div>

            {/* LISTA DE PRODUCTOS */}

            <div
                style={{
                    background: "#ffffff",
                    borderRadius: "20px",
                    padding: "28px",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "22px",
                        gap: "15px",
                        flexWrap: "wrap",
                    }}
                >
                    <h2
                        style={{
                            margin: 0,
                            fontSize: "22px",
                            color: "#111827",
                        }}
                    >
                        Productos
                    </h2>

                    <span
                        style={{
                            background: "#eef2ff",
                            color: "#4f46e5",
                            padding: "7px 12px",
                            borderRadius: "20px",
                            fontSize: "14px",
                            fontWeight: 600,
                        }}
                    >
                        {products.length} productos
                    </span>
                </div>

                {products.length === 0 ? (
                    <div
                        style={{
                            textAlign: "center",
                            padding: "50px 20px",
                            color: "#6b7280",
                        }}
                    >
                        No hay productos cargados.
                    </div>
                ) : (
                    <div
                        style={{
                            display: "grid",
                            gap: "14px",
                        }}
                    >
                        {products.map((product) => (
                            <div
                                key={product.id}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "18px",
                                    padding: "16px",
                                    border: "1px solid #e5e7eb",
                                    borderRadius: "16px",
                                    flexWrap: "wrap",
                                }}
                            >
                                {/* IMAGEN */}

                                <div
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                        borderRadius: "12px",
                                        overflow: "hidden",
                                        background: "#f3f4f6",
                                        flexShrink: 0,
                                    }}
                                >
                                    {product.image ? (
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    ) : (
                                        <div
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "12px",
                                                color: "#9ca3af",
                                            }}
                                        >
                                            Sin imagen
                                        </div>
                                    )}
                                </div>

                                {/* INFORMACIÓN */}

                                <div
                                    style={{
                                        flex: 1,
                                        minWidth: "220px",
                                    }}
                                >
                                    <h3
                                        style={{
                                            margin: 0,
                                            fontSize: "17px",
                                            color: "#111827",
                                        }}
                                    >
                                        {product.name}
                                    </h3>

                                    <p
                                        style={{
                                            margin: "6px 0",
                                            fontSize: "14px",
                                            color: "#6b7280",
                                        }}
                                    >
                                        {product.category} ·{" "}
                                        {product.variant}
                                    </p>

                                    <p
                                        style={{
                                            margin: "4px 0",
                                            fontSize: "14px",
                                            color: "#6b7280",
                                        }}
                                    >
                                        Color:{" "}
                                        <strong>{product.color}</strong>
                                    </p>

                                    <p
                                        style={{
                                            margin: "4px 0",
                                            fontSize: "14px",
                                            color: "#6b7280",
                                        }}
                                    >
                                        Stock: {product.stock}
                                    </p>

                                    <p
                                        style={{
                                            margin: "6px 0 0",
                                            fontSize: "16px",
                                            fontWeight: 700,
                                            color: "#111827",
                                        }}
                                    >
                                        $
                                        {product.price.toLocaleString(
                                            "es-AR"
                                        )}
                                    </p>
                                </div>

                                {/* ACCIONES */}

                                <div
                                    style={{
                                        display: "flex",
                                        gap: "8px",
                                    }}
                                >
                                    <button
                                        onClick={() =>
                                            editProduct(product)
                                        }
                                        style={{
                                            ...actionButtonStyle,
                                            background: "#eef2ff",
                                            color: "#4338ca",
                                        }}
                                    >
                                        Editar
                                    </button>

                                    <button
                                        onClick={() =>
                                            deleteProduct(product.id)
                                        }
                                        style={{
                                            ...actionButtonStyle,
                                            background: "#fef2f2",
                                            color: "#dc2626",
                                        }}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

/* ESTILOS */

const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "7px",
    fontSize: "14px",
    fontWeight: 600,
    color: "#374151",
};

const inputStyle: React.CSSProperties = {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px 14px",
    borderRadius: "12px",
    border: "1px solid #d1d5db",
    background: "#ffffff",
    color: "#111827",
    fontSize: "14px",
    outline: "none",
};

const primaryButtonStyle: React.CSSProperties = {
    border: "none",
    borderRadius: "12px",
    padding: "13px 20px",
    background: "#2563eb",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
};

const secondaryButtonStyle: React.CSSProperties = {
    border: "1px solid #d1d5db",
    borderRadius: "12px",
    padding: "13px 20px",
    background: "#ffffff",
    color: "#374151",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
};

const actionButtonStyle: React.CSSProperties = {
    border: "none",
    borderRadius: "10px",
    padding: "9px 13px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
};

export default Admin;