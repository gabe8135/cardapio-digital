'use client'

import { useEffect, useRef, useState } from 'react'

export default function CartDrawer({ cart, isOpen, onClose, onUpdateQuantity, restaurant }) {
  const [table, setTable] = useState('')
  const closeRef = useRef(null)
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

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

  if (!isOpen) return null

  const sendOrder = () => {
    if (!cart.length) return
    const lines = cart.map((item) =>
      `• ${item.quantity}x ${item.name} — R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}${item.note ? `\n  Obs.: ${item.note}` : ''}`
    )
    const message = [
      'Olá! Gostaria de fazer este pedido:',
      '',
      ...lines,
      '',
      `Total: R$ ${total.toFixed(2).replace('.', ',')}`,
      table ? `Mesa: ${table}` : '',
      '',
      'Aguardo a confirmação.',
    ].filter(Boolean).join('\n')

    window.open(`https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <aside role="dialog" aria-modal="true" aria-labelledby="cart-title" className="ml-auto flex h-full w-full max-w-md flex-col bg-[#fff8f5] shadow-2xl">
        <header className="flex items-center justify-between border-b border-red-100 bg-white px-5 py-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#b33a2f]">Revise antes de enviar</p>
            <h2 id="cart-title" className="text-2xl font-black">Meu pedido</h2>
          </div>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Fechar pedido" className="grid h-11 w-11 place-items-center rounded-full bg-red-50 text-2xl text-[#8f1d1d] hover:bg-red-100">×</button>
        </header>

        <div className="flex-1 overflow-y-auto p-5">
          {cart.length === 0 ? (
            <div className="grid h-full place-content-center text-center">
              <span className="text-5xl" aria-hidden="true">🛒</span>
              <h3 className="mt-4 text-xl font-black">Seu pedido está vazio</h3>
              <p className="mt-2 text-slate-500">Escolha um prato para começar.</p>
              <button type="button" onClick={onClose} className="mt-5 rounded-xl bg-[#8f1d1d] px-5 py-3 font-bold text-white hover:bg-[#b42318]">Explorar cardápio</button>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.map((item, index) => (
                <article key={`${item.id}-${item.note}`} className="rounded-2xl border border-red-100/70 bg-white p-4 shadow-sm">
                  <div className="flex justify-between gap-3">
                    <div>
                      <h3 className="font-black">{item.name}</h3>
                      {item.note && <p className="mt-1 text-xs text-slate-500">Obs.: {item.note}</p>}
                    </div>
                    <strong className="shrink-0 text-[#8f1d1d]">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</strong>
                  </div>
                  <div className="mt-3 flex items-center gap-1">
                    <button type="button" onClick={() => onUpdateQuantity(index, item.quantity - 1)} className="grid h-9 w-9 place-items-center rounded-full bg-red-50 font-bold text-[#8f1d1d] hover:bg-red-100" aria-label={`Remover uma unidade de ${item.name}`}>−</button>
                    <span className="w-8 text-center font-black">{item.quantity}</span>
                    <button type="button" onClick={() => onUpdateQuantity(index, item.quantity + 1)} className="grid h-9 w-9 place-items-center rounded-full bg-red-50 font-bold text-[#8f1d1d] hover:bg-red-100" aria-label={`Adicionar uma unidade de ${item.name}`}>+</button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <footer className="border-t border-red-100 bg-white p-5">
            <label className="text-sm font-bold">
              Mesa (opcional)
              <input value={table} onChange={(event) => setTable(event.target.value.replace(/\D/g, '').slice(0, 3))} inputMode="numeric" placeholder="Ex.: 12" className="mt-2 w-full rounded-xl border border-slate-200 p-3 font-normal outline-none focus:border-[#d94a3a] focus:ring-4 focus:ring-red-100" />
            </label>
            <div className="my-4 flex justify-between text-xl font-black"><span>Total</span><span className="text-[#8f1d1d]">R$ {total.toFixed(2).replace('.', ',')}</span></div>
            <button type="button" onClick={sendOrder} className="w-full rounded-xl bg-[#b42318] px-5 py-4 font-black text-white shadow-lg shadow-red-950/15 hover:bg-[#8f1d1d]">Enviar pedido pelo WhatsApp</button>
            <p className="mt-2 text-center text-xs text-slate-500">O pedido só será confirmado após resposta do restaurante.</p>
          </footer>
        )}
      </aside>
    </div>
  )
}
