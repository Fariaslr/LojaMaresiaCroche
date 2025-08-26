import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Heart, Star, ShoppingBag, Instagram, MessageCircle, Filter } from 'lucide-react'
import './App.css'

import jogoAmericano from './assets/jogo-americano.webp'
import floresCroche from './assets/flores-croche.jpeg'
import tapeteColorido from './assets/tapete-colorido.jpg'
import tapeteElo7 from './assets/tapete-elo7.jpg'
import bolsaCroche from './assets/bolsa-croche.jpeg'
import { Waves } from 'lucide-react'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [selectedColor, setSelectedColor] = useState('todas')

  const produtos = [
    {
      id: 1,
      nome: 'Jogo Americano Artesanal',
      categoria: 'mesa',
      preco: 'R$ 45,00',
      cores: ['branco', 'bege', 'rosa'],
      imagem: jogoAmericano,
      descricao: 'Jogo americano em crochê feito à mão, perfeito para decorar sua mesa.',
      rating: 5
    },
    {
      id: 2,
      nome: 'Flores Decorativas',
      categoria: 'decoracao',
      preco: 'R$ 25,00',
      cores: ['rosa', 'azul', 'verde', 'roxo'],
      imagem: floresCroche,
      descricao: 'Lindas flores de crochê para decoração, disponíveis em várias cores.',
      rating: 5
    },
    {
      id: 3,
      nome: 'Tapete Colorido Redondo',
      categoria: 'tapetes',
      preco: 'R$ 120,00',
      cores: ['multicolor', 'azul', 'verde'],
      imagem: tapeteColorido,
      descricao: 'Tapete redondo vibrante e colorido, ideal para sala ou quarto.',
      rating: 5
    },
    {
      id: 4,
      nome: 'Tapete Oval Tradicional',
      categoria: 'tapetes',
      preco: 'R$ 95,00',
      cores: ['multicolor', 'bege', 'marrom'],
      imagem: tapeteElo7,
      descricao: 'Tapete oval em estilo tradicional, perfeito para ambientes aconchegantes.',
      rating: 4
    },
    {
      id: 5,
      nome: 'Bolsa Madame',
      categoria: 'bolsa',
      preco: 'R$ 45,00',
      cores: ['azul'],
      imagem: bolsaCroche,
      descricao: 'Bolsa em estilo tradicional, ideal para passeio.',
      rating: 4
    }
  ]

  const categorias = [
    { id: 'todos', nome: 'Todos os Produtos' },
    { id: 'tapetes', nome: 'Tapetes' },
    { id: 'mesa', nome: 'Mesa Posta' },
    { id: 'decoracao', nome: 'Decoração' },
    { id: 'bolsa', nome: 'Bolsa' }
  ]

  const cores = [
    { id: 'todas', nome: 'Todas as Cores' },
    { id: 'branco', nome: 'Branco' },
    { id: 'bege', nome: 'Bege' },
    { id: 'rosa', nome: 'Rosa' },
    { id: 'azul', nome: 'Azul' },
    { id: 'verde', nome: 'Verde' },
    { id: 'multicolor', nome: 'Multicolor' }
  ]

  const produtosFiltrados = produtos.filter(produto => {
    const categoriaMatch = selectedCategory === 'todos' || produto.categoria === selectedCategory
    const corMatch = selectedColor === 'todas' || produto.cores.includes(selectedColor)
    return categoriaMatch && corMatch
  })

  const abrirWhatsApp = (produto) => {
    const mensagem = `Olá! Tenho interesse no produto: ${produto.nome} - ${produto.preco}. Gostaria de mais informações!`
    const url = `https://wa.me/557196789255?text=${encodeURIComponent(mensagem)}`
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-cyan-400 rounded-full flex items-center justify-center">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Maresia - Moda em Crochê
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-sky-600 transition-colors">Início</a>
              <a href="#catalogo" className="text-gray-700 hover:text-sky-600 transition-colors">Catálogo</a>
              <a href="#sobre" className="text-gray-700 hover:text-sky-600 transition-colors">Sobre</a>
              <a href="#contato" className="text-gray-700 hover:text-sky-600 transition-colors">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Artesanato com o frescor do
            <span className="block bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Mar e da Praia
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Peças únicas de crochê, inspiradas nas cores do oceano.
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

      {/* Catálogo */}
      <section id="catalogo" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nosso Catálogo</h3>
            <p className="text-lg text-gray-600">Escolha entre nossas peças artesanais únicas</p>
          </div>

          {/* Filtros */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-center">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categorias.map(categoria => (
                  <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"></div>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {cores.map(cor => (
                  <option key={cor.id} value={cor.id}>{cor.nome}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Grid de Produtos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {produtosFiltrados.map(produto => (
              <Card key={produto.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-white/90">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">{produto.rating}</span>
                      </div>
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{produto.nome}</CardTitle>
                  <CardDescription>{produto.descricao}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">{produto.preco}</span>
                    <div className="flex gap-1">
                      {produto.cores.slice(0, 3).map((cor, index) => (
                        <div
                          key={index}
                          className={`w-4 h-4 rounded-full border-2 border-white shadow-sm ${cor === 'branco' ? 'bg-gray-100' :
                            cor === 'bege' ? 'bg-amber-100' :
                              cor === 'rosa' ? 'bg-pink-300' :
                                cor === 'azul' ? 'bg-blue-400' :
                                  cor === 'verde' ? 'bg-green-400' :
                                    cor === 'multicolor' ? 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400' :
                                      'bg-gray-300'
                            }`}
                        />
                      ))}
                      {produto.cores.length > 3 && (
                        <span className="text-xs text-gray-500 ml-1">+{produto.cores.length - 3}</span>
                      )}
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                    onClick={() => abrirWhatsApp(produto)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Fazer Pedido
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Sobre a Maresia</h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Cada peça da Maresia Crochê é criada com muito amor e atenção aos detalhes.
            Trabalhamos com fios de alta qualidade e técnicas tradicionais para garantir
            que você receba um produto único e duradouro. Personalizamos cores e tamanhos
            para que cada cliente tenha exatamente o que deseja.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Feito com Amor</h4>
              <p className="text-gray-600">Cada ponto é feito com carinho e dedicação</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Qualidade Premium</h4>
              <p className="text-gray-600">Utilizamos apenas fios de alta qualidade</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Personalização</h4>
              <p className="text-gray-600">Cores e tamanhos sob medida para você</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Entre em Contato</h3>
          <p className="text-lg text-gray-600 mb-8">
            Pronta para fazer seu pedido? Entre em contato conosco!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700"
              onClick={() => window.open('https://wa.me/55557196789255', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('https://instagram.com/lojamaresia_croche', '_blank')}
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-orange-400 rounded-full flex items-center justify-center">
              <Heart className="w-3 h-3 text-white" />
            </div>
            <h4 className="text-xl font-bold">Maresia Crochê</h4>
          </div>
          <p className="text-gray-400 mb-4">Artesanato feito com carinho e dedicação</p>
          <p className="text-sm text-gray-500">
            © 2024 Maresia Crochê. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

