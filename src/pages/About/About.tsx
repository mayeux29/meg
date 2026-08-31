function About() {
    return (
        <main className="min-h-screen bg-white px-6 py-16">
            <div className="mx-auto max-w-4xl text-center">

                <h1 className="text-2xl font-bold text-gray-900 mb-6">
                    Nosotros
                </h1>

                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                    En MEG creemos que cada producto puede ser parte de tu estilo,
                    acompañándote en cada momento de tu día.
                </p>

                <div className="grid gap-8 md:grid-cols-3 mt-12">

                    <div className="rounded-2xl border border-gray-200 p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">
                            Nuestra esencia
                        </h2>
                        <p className="text-gray-600">
                            Buscamos ofrecer productos modernos, originales y de calidad,
                            pensados para quienes quieren darle un toque diferente a su estilo.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">
                            Nuestra propuesta
                        </h2>
                        <p className="text-gray-600">
                            Seleccionamos cada producto pensando en las tendencias y en lo
                            que nuestros clientes realmente buscan.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">
                            Nuestro objetivo
                        </h2>
                        <p className="text-gray-600">
                            Queremos que comprar en MEG sea una experiencia simple,
                            cómoda y diferente.
                        </p>
                    </div>

                </div>

            </div>
        </main>
    );
}

export default About;