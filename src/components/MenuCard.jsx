import { useState } from 'react'

export default function MenuCard({ item, onItemClick }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => onItemClick(item)}
    >
      <div className="relative">
        {item.image && !imageError ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-4xl">🍽️</span>
          </div>
        )}
        {item.popular && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            POPULAR
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          <span className="text-xl font-bold text-green-600">
            R$ {item.price.toFixed(2).replace('.', ',')}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  )
}
