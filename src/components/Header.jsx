import Image from 'next/image'

export default function Header({ restaurant, cartCount, onCartClick }) {
  return (
    <header className="bg-white border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <Image src={restaurant.logo} alt={`Logo ${restaurant.name}`} width={64} height={64} priority className="h-14 w-14 rounded-full object-cover ring-2 ring-[#f1b5ac]" />
          <div className="min-w-0">
            <h1 className="truncate text-lg md:text-xl font-black tracking-tight">{restaurant.name}</h1>
            <p className="truncate text-xs md:text-sm text-slate-500">{restaurant.address}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href={`tel:${restaurant.phone.replace(/\D/g, '')}`} className="hidden sm:inline-flex rounded-full px-4 py-2 text-sm font-bold text-[#8f1d1d] hover:bg-red-50">Ligar</a>
          <button type="button" onClick={onCartClick} className="relative inline-flex items-center gap-2 rounded-full bg-[#8f1d1d] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#b42318]" aria-label={`Abrir pedido, ${cartCount} itens`}>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6"/><circle cx="10" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>
            <span className="hidden sm:inline">Meu pedido</span>
            {cartCount > 0 && <span className="grid h-6 min-w-6 place-items-center rounded-full bg-[#f2b84b] px-1 text-xs font-black text-[#641313]">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  )
}
