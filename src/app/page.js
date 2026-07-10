'use client'

import { useMemo, useState } from 'react'
import { menuConfig } from '@/config/menu'
import Header from '@/components/Header'
import CategoryFilter from '@/components/CategoryFilter'
import MenuCard from '@/components/MenuCard'
import ItemModal from '@/components/ItemModal'
import CartDrawer from '@/components/CartDrawer'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)
  const [query, setQuery] = useState('')
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('pt-BR')

    return menuConfig.items.filter((item) => {
      const matchesCategory = !activeCategory || item.category === activeCategory
      const searchableText = `${item.name} ${item.description} ${(item.tags || []).join(' ')}`.toLocaleLowerCase('pt-BR')
      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery))
    })
  }, [activeCategory, query])

  const addToCart = (item, quantity = 1, note = '') => {
    setCart((current) => {
      const existing = current.find((entry) => entry.id === item.id && entry.note === note)
      if (existing) {
        return current.map((entry) =>
          entry === existing ? { ...entry, quantity: entry.quantity + quantity } : entry
        )
      }
      return [...current, { ...item, quantity, note }]
    })
    setSelectedItem(null)
  }

  const updateQuantity = (cartIndex, quantity) => {
    setCart((current) =>
      quantity <= 0
        ? current.filter((_, index) => index !== cartIndex)
        : current.map((entry, index) => index === cartIndex ? { ...entry, quantity } : entry)
    )
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-slate-900">
      <Header restaurant={menuConfig.restaurant} cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />

      <main>
        <section className="relative overflow-hidden bg-[#8f1d1d] text-white">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_10%,#f2b84b,transparent_36%)]" />
          <div className="relative max-w-6xl mx-auto px-4 py-10 md:py-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-red-50 ring-1 ring-white/20">
                <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_0_4px_rgba(252,211,77,.18)]" aria-hidden="true" /> Aberto agora · pedidos até 22h30
              </span>
              <h2 className="mt-5 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
                Sabor que transforma <span className="text-[#f0c869]">cada encontro.</span>
              </h2>
              <p className="mt-4 max-w-xl text-base md:text-lg text-red-50/85">
                Explore a casa, personalize seu pedido e envie tudo pelo WhatsApp em poucos toques.
              </p>
            </div>

            <label className="mt-8 flex max-w-2xl items-center gap-3 rounded-2xl bg-white px-4 py-3.5 text-slate-700 shadow-xl shadow-black/10 focus-within:ring-4 focus-within:ring-[#f0c869]/30">
              <svg className="h-5 w-5 shrink-0 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
              <span className="sr-only">Buscar no cardápio</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Busque por prato, ingrediente ou preferência..."
                className="w-full bg-transparent text-base outline-none placeholder:text-slate-400"
                type="search"
              />
              {query && <button type="button" onClick={() => setQuery('')} className="text-sm font-semibold text-[#a52720]">Limpar</button>}
            </label>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b33a2f]">Feito na hora</p>
              <h2 className="mt-1 text-3xl md:text-4xl font-black tracking-tight">Nosso cardápio</h2>
            </div>
            <p className="hidden sm:block text-sm text-slate-500">{filteredItems.length} {filteredItems.length === 1 ? 'opção encontrada' : 'opções encontradas'}</p>
          </div>

          <CategoryFilter categories={menuConfig.categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} onItemClick={setSelectedItem} onAdd={() => addToCart(item)} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white text-center py-14 px-6">
              <div className="text-5xl mb-4" aria-hidden="true">🍽️</div>
              <h3 className="text-xl font-bold">Nenhum prato encontrado</h3>
              <p className="mt-2 text-slate-500">Tente outro termo ou veja todas as categorias.</p>
              <button type="button" onClick={() => { setQuery(''); setActiveCategory(null) }} className="mt-5 rounded-full bg-[#8f1d1d] px-5 py-2.5 font-bold text-white hover:bg-[#b42318]">Ver cardápio completo</button>
            </div>
          )}
        </section>

        <section className="bg-[#fff1ea] border-y border-[#f0d5ce]">
          <div className="max-w-6xl mx-auto px-4 py-8 grid gap-4 md:grid-cols-3">
            {[['🥬','Ingredientes frescos','Seleção diária e preparo feito na hora.'],['🛡️','Pedido conferido','Você revisa tudo antes de enviar.'],['💬','Atendimento fácil','Pedido direto no WhatsApp da casa.']].map(([icon,title,text]) => (
              <div key={title} className="flex gap-3 rounded-2xl bg-white/70 p-4"><span className="text-2xl" aria-hidden="true">{icon}</span><div><h3 className="font-bold">{title}</h3><p className="text-sm text-slate-600">{text}</p></div></div>
            ))}
          </div>
        </section>
      </main>

      {selectedItem && <ItemModal item={selectedItem} isOpen onClose={() => setSelectedItem(null)} onAdd={addToCart} />}
      <CartDrawer cart={cart} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} onUpdateQuantity={updateQuantity} restaurant={menuConfig.restaurant} />

      {cartCount > 0 && !isCartOpen && (
        <button type="button" onClick={() => setIsCartOpen(true)} className="fixed bottom-4 left-4 right-4 z-40 flex items-center justify-between rounded-2xl bg-[#8f1d1d] px-5 py-4 text-white shadow-2xl shadow-red-950/25 hover:bg-[#b42318] md:left-auto md:w-80" aria-label={`Ver pedido com ${cartCount} itens`}>
          <span className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#f2b84b] font-black text-[#641313]">{cartCount}</span><span className="font-bold">Ver pedido</span></span>
          <span className="font-black">R$ {cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2).replace('.', ',')}</span>
        </button>
      )}

      <footer className="bg-[#5c1111] text-red-50 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col gap-2 text-center md:flex-row md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} {menuConfig.restaurant.name}</p>
          <p className="text-red-100/65 text-sm">Cardápio digital · sabor, cuidado e praticidade</p>
        </div>
      </footer>
    </div>
  )
}
