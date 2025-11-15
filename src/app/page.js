'use client'

import { useState } from 'react'
import { menuConfig } from '@/config/menu'
import Header from '@/components/Header'
import CategoryFilter from '@/components/CategoryFilter'
import MenuCard from '@/components/MenuCard'
import ItemModal from '@/components/ItemModal'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Filtrar itens por categoria
  const filteredItems = activeCategory 
    ? menuConfig.items.filter(item => item.category === activeCategory)
    : menuConfig.items

  const handleItemClick = (item) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header restaurant={menuConfig.restaurant} />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Nosso Cardápio</h2>
          <p className="text-gray-600">
            Escolha seus pratos favoritos e chame um garçom para fazer seu pedido
          </p>
        </div>

        <CategoryFilter
          categories={menuConfig.categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onItemClick={handleItemClick}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Nenhum item encontrado
            </h3>
            <p className="text-gray-500">
              Tente selecionar uma categoria diferente
            </p>
          </div>
        )}
      </main>

      <ItemModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2024 {menuConfig.restaurant.name}. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Cardápio digital - Para pedidos, chame um garçom
          </p>
        </div>
      </footer>
    </div>
  )
}