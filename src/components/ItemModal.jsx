'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function ItemModal({ item, isOpen, onClose, onAdd }) {
  const [quantity, setQuantity] = useState(1)
  const [note, setNote] = useState('')
  const closeRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const handleKeyDown = (event) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen || !item) return null

  return (
    <div className="fixed inset-0 z-50 grid place-items-end bg-black/60 p-0 backdrop-blur-sm md:place-items-center md:p-4" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section role="dialog" aria-modal="true" aria-labelledby="item-modal-title" className="max-h-[94vh] w-full overflow-y-auto rounded-t-3xl bg-white shadow-2xl md:max-w-lg md:rounded-3xl">
        <div className="relative h-64 md:h-72">
          <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, 512px" className="object-cover" priority />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Fechar detalhes do prato" className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-2xl shadow-lg hover:bg-slate-100">×</button>
          {item.popular && <span className="absolute bottom-4 left-4 rounded-full bg-[#f2b84b] px-3 py-1 text-xs font-black uppercase text-[#641313]">Mais pedido</span>}
        </div>
        <div className="p-5 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div><h2 id="item-modal-title" className="text-2xl font-black tracking-tight">{item.name}</h2><p className="mt-1 text-sm font-semibold text-[#b33a2f]">⏱ {item.prepTime} · {item.serves}</p></div>
            <span className="shrink-0 text-2xl font-black text-[#8f1d1d]">R$ {item.price.toFixed(2).replace('.', ',')}</span>
          </div>
          <p className="mt-4 leading-relaxed text-slate-600">{item.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">{(item.tags || []).map((tag) => <span key={tag} className="rounded-full bg-[#fce8e5] px-3 py-1 text-xs font-bold text-[#8f2d26]">{tag}</span>)}</div>
          {item.allergens && <p className="mt-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-900"><strong>Alergênicos:</strong> {item.allergens}</p>}
          <label className="mt-5 block text-sm font-bold text-slate-700">Alguma observação?<textarea value={note} onChange={(event) => setNote(event.target.value)} maxLength={180} rows={2} placeholder="Ex.: sem cebola, molho separado..." className="mt-2 w-full resize-none rounded-xl border border-slate-200 p-3 font-normal outline-none focus:border-[#d94a3a] focus:ring-4 focus:ring-[#d94a3a]/15" /></label>
          <div className="mt-5 flex gap-3">
            <div className="flex items-center rounded-xl border border-slate-200" aria-label="Quantidade">
              <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="h-12 w-11 text-xl font-bold" aria-label="Diminuir quantidade">−</button><span className="w-8 text-center font-black">{quantity}</span><button type="button" onClick={() => setQuantity((value) => Math.min(20, value + 1))} className="h-12 w-11 text-xl font-bold" aria-label="Aumentar quantidade">+</button>
            </div>
            <button type="button" onClick={() => onAdd(item, quantity, note.trim())} className="flex-1 rounded-xl bg-[#8f1d1d] px-4 py-3 font-bold text-white hover:bg-[#b42318]">Adicionar · R$ {(item.price * quantity).toFixed(2).replace('.', ',')}</button>
          </div>
        </div>
      </section>
    </div>
  )
}
