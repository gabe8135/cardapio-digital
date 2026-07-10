export default function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <nav aria-label="Categorias do cardápio" className="sticky top-0 z-30 -mx-4 mb-7 overflow-x-auto border-y border-black/5 bg-[#f7f5f0]/95 px-4 py-3 backdrop-blur md:static md:mx-0 md:border-0 md:bg-transparent md:px-0 md:py-0">
      <div className="flex w-max gap-2 md:flex-wrap">
        <button type="button" aria-pressed={activeCategory === null} onClick={() => onCategoryChange(null)} className={`rounded-full px-4 py-2.5 font-bold transition ${activeCategory === null ? 'bg-[#8f1d1d] text-white shadow-md shadow-red-950/15' : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:ring-[#d94a3a]'}`}>Todos</button>
        {categories.map((category) => (
          <button type="button" key={category.id} aria-pressed={activeCategory === category.id} onClick={() => onCategoryChange(category.id)} className={`rounded-full px-4 py-2.5 font-bold transition ${activeCategory === category.id ? 'bg-[#8f1d1d] text-white shadow-md shadow-red-950/15' : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:ring-[#d94a3a]'}`}>
            <span className="mr-2" aria-hidden="true">{category.icon}</span>{category.name}
          </button>
        ))}
      </div>
    </nav>
  )
}
