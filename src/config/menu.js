// Configuração do cardápio - Edite aqui para personalizar
export const menuConfig = {
  // Informações do estabelecimento
  restaurant: {
    name: "Restaurante Exemplo",
    logo: "/images/logo.png", // Coloque sua logo na pasta public
    description: "Cardápio digital com os melhores pratos da casa",
    phone: "(11) 99999-9999",
    whatsapp: "5511999999999",
    address: "Rua Exemplo, 123 - Centro",
  },

  // Categorias do cardápio
  categories: [
    {
      id: "entradas",
      name: "Entradas",
      icon: "🥗",
    },
    {
      id: "pratos-principais",
      name: "Pratos Principais",
      icon: "🍽️",
    },
    {
      id: "bebidas",
      name: "Bebidas",
      icon: "🥤",
    },
    {
      id: "sobremesas",
      name: "Sobremesas",
      icon: "🍰",
    },
  ],

  // Itens do cardápio
  items: [
    // ENTRADAS
    {
      id: 1,
      category: "entradas",
      name: "Bruschetta Italiana",
      description:
        "Pão italiano grelhado com tomate, manjericão e azeite extra virgem",
      price: 18.9,
      image: "/images/boteko-da-vila.webp",
      popular: true,
    },
    {
      id: 2,
      category: "entradas",
      name: "Carpaccio de Salmão",
      description:
        "Fatias finas de salmão com rúcula, parmesão e molho de mostarda",
      price: 32.9,
      image: "/images/cantinho-da-jane.webp",
    },
    {
      id: 3,
      category: "entradas",
      name: "Camarão ao Alho",
      description: "Camarões grelhados com alho, pimenta e azeite",
      price: 28.9,
      image: "/images/delicias-do-mar.webp",
    },

    // PRATOS PRINCIPAIS
    {
      id: 4,
      category: "pratos-principais",
      name: "Risotto de Cogumelos",
      description: "Arroz arbóreo cremoso com mix de cogumelos e parmesão",
      price: 45.9,
      image: "/images/magia-dos-sabores.webp",
      popular: true,
    },
    {
      id: 5,
      category: "pratos-principais",
      name: "Salmão Grelhado",
      description: "Filé de salmão grelhado com legumes e molho de ervas",
      price: 52.9,
      image: "/images/patrao-chopp.webp",
    },
    {
      id: 6,
      category: "pratos-principais",
      name: "Picanha na Chapa",
      description: "Picanha grelhada na chapa com arroz e feijão",
      price: 48.9,
      image: "/images/point-dos-amigos.webp",
    },
    {
      id: 7,
      category: "pratos-principais",
      name: "Lasanha à Bolonhesa",
      description: "Lasanha caseira com molho bolonhesa e queijo gratinado",
      price: 38.9,
      image: "/images/rancho-alegre.webp",
    },

    // BEBIDAS
    {
      id: 8,
      category: "bebidas",
      name: "Suco Natural de Laranja",
      description: "Suco de laranja natural, sem açúcar",
      price: 8.9,
      image: "/images/restaurante-maisa.webp",
    },
    {
      id: 9,
      category: "bebidas",
      name: "Cerveja Artesanal",
      description: "Cerveja artesanal local, 350ml",
      price: 12.9,
      image: "/images/rota-da-praia.webp",
    },
    {
      id: 10,
      category: "bebidas",
      name: "Refrigerante Lata",
      description: "Refrigerante em lata, 350ml",
      price: 6.9,
      image: "/images/sabor-do-oriente.webp",
    },
    {
      id: 11,
      category: "bebidas",
      name: "Água Mineral",
      description: "Água mineral sem gás, 500ml",
      price: 4.9,
      image: "/images/boteko-da-vila.webp",
    },

    // SOBREMESAS
    {
      id: 12,
      category: "sobremesas",
      name: "Tiramisu",
      description: "Sobremesa italiana com café, mascarpone e cacau",
      price: 22.9,
      image: "/images/cantinho-da-jane.webp",
      popular: true,
    },
    {
      id: 13,
      category: "sobremesas",
      name: "Pudim de Leite",
      description: "Pudim caseiro com calda de caramelo",
      price: 16.9,
      image: "/images/delicias-do-mar.webp",
    },
    {
      id: 14,
      category: "sobremesas",
      name: "Sorvete de Açaí",
      description: "Sorvete de açaí com granola e banana",
      price: 18.9,
      image: "/images/magia-dos-sabores.webp",
    },
  ],
};

const categoryDetails = {
  entradas: { prepTime: '10–15 min', serves: 'Serve 1–2 pessoas', tags: ['Para compartilhar'] },
  'pratos-principais': { prepTime: '20–30 min', serves: 'Serve 1 pessoa', tags: ['Feito na hora'] },
  bebidas: { prepTime: '5 min', serves: '1 unidade', tags: ['Gelado'] },
  sobremesas: { prepTime: '8–12 min', serves: 'Serve 1 pessoa', tags: ['Doce da casa'] },
}

menuConfig.items = menuConfig.items.map((item) => ({
  ...categoryDetails[item.category],
  ...item,
  tags: item.popular ? ['Mais pedido', ...categoryDetails[item.category].tags] : categoryDetails[item.category].tags,
  allergens: item.category === 'bebidas' ? null : 'Consulte nossa equipe em caso de restrições alimentares.',
}))
