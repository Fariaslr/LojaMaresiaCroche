import React from 'react'

export default function Hero() {
  return (
    <section id="inicio" className="py-40 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text--900 mb-6">
              Artesanato com o frescor do
              <span className="block bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Mar e da Praia
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Peças únicas de crochê, inspiradas nas cores do mar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-cyan-600 hover:from-sky-600 hover:to-cyan-700"
                onClick={() => document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' })}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Ver Catálogo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sky-500 text-sky-600 hover:bg-sky-50"
                onClick={() => abrirWhatsApp({ nome: 'Catálogo Geral', preco: '' })}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Fazer Pedido
              </Button>
            </div>
          </div>
        </section>
  )
}
