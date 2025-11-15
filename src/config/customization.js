// Arquivo de personalização rápida
// Edite apenas este arquivo para personalizar seu cardápio

export const customization = {
  // INFORMAÇÕES DO SEU RESTAURANTE
  restaurant: {
    name: "Restaurante Exemplo",
    description: "Cardápio digital com os melhores pratos da casa",
    phone: "(11) 99999-9999",
    address: "Rua Exemplo, 123 - Centro",
    logo: null // Coloque o nome do arquivo da logo na pasta public
  },

  // CONFIGURAÇÕES VISUAIS
  appearance: {
    primaryColor: "blue",     // blue, green, red, purple, indigo, pink, yellow
    showPopularBadge: true,   // Mostrar badge "POPULAR" nos itens
    showImages: true,         // Mostrar imagens dos pratos
    cardStyle: "modern"       // modern, classic, minimal
  },

  // CONFIGURAÇÕES DE FUNCIONAMENTO
  features: {
    enableSearch: false,      // Busca por pratos (futuro)
    enableFilters: true,      // Filtros por categoria
    enableModal: true,        // Modal com detalhes do prato
    showPrices: true          // Mostrar preços
  },

  // MENSAGENS PERSONALIZADAS
  messages: {
    welcomeTitle: "Nosso Cardápio",
    welcomeSubtitle: "Escolha seus pratos favoritos e chame um garçom para fazer seu pedido",
    noItemsFound: "Nenhum item encontrado",
    callWaiter: "Para fazer seu pedido, chame um garçom",
    footerText: "Cardápio digital - Para pedidos, chame um garçom"
  }
}
