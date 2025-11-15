// Configuração de tema e cores - Edite aqui para personalizar
export const themeConfig = {
  colors: {
    primary: 'blue',      // Cor principal (blue, green, red, purple, etc.)
    secondary: 'gray',    // Cor secundária
    accent: 'green',      // Cor de destaque (preços, botões)
  },
  
  // Configurações de layout
  layout: {
    maxWidth: '6xl',      // Largura máxima do conteúdo
    cardColumns: 3,       // Número de colunas no desktop (1, 2, 3, 4)
  },
  
  // Configurações de texto
  typography: {
    restaurantName: 'text-2xl',     // Tamanho do nome do restaurante
    itemName: 'text-lg',            // Tamanho do nome do item
    itemPrice: 'text-xl',           // Tamanho do preço
  },
  
  // Configurações de imagem
  images: {
    cardHeight: 'h-48',             // Altura dos cards de imagem
    modalHeight: 'h-64',            // Altura da imagem no modal
    showPlaceholder: true,          // Mostrar placeholder quando não há imagem
  }
}
