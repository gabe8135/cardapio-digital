import Image from 'next/image'

export default function MenuCard({ item, onItemClick, onAdd }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <button type="button" onClick={() => onItemClick(item)} className="block w-full text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#d94a3a]" aria-label={`Ver detalhes de ${item.name}`}>
        <div className="relative h-52 overflow-hidden bg-slate-100">
          <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />
          {item.popular && <span className="absolute top-3 left-3 rounded-full bg-[#f2b84b] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#641313]">Mais pedido</span>}
          <span className="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1.5 text-lg font-black text-[#8f1d1d] shadow">R$ {item.price.toFixed(2).replace('.', ',')}</span>
        </div>
        <div className="p-5 pb-3">
          <h3 className="text-xl font-black tracking-tight text-slate-900">{item.name}</h3>
          <p className="mt-2 min-h-10 text-sm leading-relaxed text-slate-600 line-clamp-2">{item.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {(item.tags || []).slice(0, 2).map((tag) => <span key={tag} className="rounded-full bg-[#fce8e5] px-2.5 py-1 text-xs font-semibold text-[#8f2d26]">{tag}</span>)}
            {item.prepTime && <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">⏱ {item.prepTime}</span>}
          </div>
        </div>
      </button>
      <div className="px-5 pb-5 pt-2">
        <button type="button" onClick={onAdd} className="w-full rounded-xl bg-[#8f1d1d] px-4 py-3 font-bold text-white transition hover:bg-[#b42318] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#d94a3a]/40">Adicionar ao pedido</button>
      </div>
    </article>
  )
}
