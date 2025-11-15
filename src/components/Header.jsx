export default function Header({ restaurant }) {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            {restaurant.logo ? (
              <img
                src={restaurant.logo}
                alt={restaurant.name}
                className="h-20 w-auto mr-4"
                style={{ maxHeight: '80px' }}
              />
            ) : (
              <div className="h-12 w-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-xl font-bold">
                  {restaurant.name.charAt(0)}
                </span>
              </div>
            )}
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{restaurant.name}</h1>
              <p className="text-gray-600 text-sm">{restaurant.description}</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end mb-2">
              <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-700 font-medium">{restaurant.phone}</span>
            </div>
            <p className="text-gray-600 text-sm">{restaurant.address}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
