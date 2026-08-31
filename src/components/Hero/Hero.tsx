import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="relative overflow-hidden bg-white text-neutral-900">
            <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8">

                {/* =========================
            CONTENIDO IZQUIERDO
        ========================= */}
                <div className="max-w-xl">

                    <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                        Nueva colección
                    </span>

                    <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
                        Diseño que
                        <span className="block text-neutral-500">
                            habla por vos.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-lg text-base leading-7 text-neutral-600 sm:text-lg">
                        Descubrí una selección de productos pensados para combinar
                        estilo, calidad y personalidad.
                    </p>

                    {/* BOTONES */}
                    <div className="mt-10 flex flex-col gap-3 sm:flex-row">

                        <Link
                            to="/productos"
                            className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
                        >
                            Ver colección
                        </Link>

                        <Link
                            to="/categories"
                            className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-7 py-3.5 text-sm font-semibold text-neutral-800 transition hover:-translate-y-0.5 hover:border-neutral-950 hover:bg-neutral-50"
                        >
                            Explorar categorías
                        </Link>

                    </div>

                    {/* INFORMACIÓN */}
                    <div className="mt-12 grid grid-cols-3 gap-5 border-t border-neutral-200 pt-6">

                        <div>
                            <p className="text-sm font-semibold text-neutral-900">
                                Envíos
                            </p>
                            <p className="mt-1 text-xs text-neutral-500">
                                A todo el país
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-neutral-900">
                                Compra segura
                            </p>
                            <p className="mt-1 text-xs text-neutral-500">
                                Pago protegido
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-neutral-900">
                                Soporte
                            </p>
                            <p className="mt-1 text-xs text-neutral-500">
                                Estamos para ayudarte
                            </p>
                        </div>

                    </div>

                </div>

                {/* =========================
{/* TARJETA PROMOCIONAL */}
                <div className="relative flex justify-start lg:justify-end order-first lg:order-none">
                    <div className="relative w-[365px] sm:w-[380px] lg:w-full lg:max-w-md aspect-[16/16] lg:aspect-[4/5] overflow-hidden rounded-3xl">
                        {/* IMAGEN DE FONDO */}
                        <img
                            src="/hero.meg.jpeg"
                            alt="Accesorios MEG"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        {/* DEGRADADO PARA QUE EL TEXTO SE LEA BIEN */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* CONTENIDO */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <span className="mb-2 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md">
                                MEG
                            </span>

                            <h3 className="text-2xl font-semibold tracking-tight">
                                Accesorios que hacen la diferencia
                            </h3>

                            <p className="mt-2 text-sm text-white/75">
                                Fundas, cargadores, auriculares y más.
                            </p>

                            <a
                                href="/productos"
                                className="mt-5 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200"
                            >
                                Ver productos
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;