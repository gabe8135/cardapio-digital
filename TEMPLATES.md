# 🎨 Templates de Cardápio

## Modelos prontos para diferentes tipos de negócio

### 🍕 Pizzaria

```javascript
// src/config/menu.js
restaurant: {
  name: "Pizzaria do Bairro",
  description: "Pizzas artesanais com ingredientes frescos",
  phone: "(11) 3333-4444",
  address: "Rua das Pizzas, 123 - Centro"
},
categories: [
  { id: "pizzas", name: "Pizzas", icon: "🍕" },
  { id: "bebidas", name: "Bebidas", icon: "🥤" },
  { id: "sobremesas", name: "Sobremesas", icon: "🍰" }
],
items: [
  {
    id: 1,
    category: "pizzas",
    name: "Pizza Margherita",
    description: "Molho de tomate, mussarela, manjericão e azeite",
    price: 35.90,
    popular: true
  },
  {
    id: 2,
    category: "pizzas",
    name: "Pizza Portuguesa",
    description: "Presunto, ovos, cebola, ervilha e mussarela",
    price: 42.90
  }
]
```

### 🍔 Lanchonete

```javascript
restaurant: {
  name: "Lanchonete do João",
  description: "Lanches e refeições rápidas",
  phone: "(11) 2222-3333",
  address: "Av. Paulista, 456 - Bela Vista"
},
categories: [
  { id: "lanches", name: "Lanches", icon: "🍔" },
  { id: "refeicoes", name: "Refeições", icon: "🍽️" },
  { id: "bebidas", name: "Bebidas", icon: "🥤" }
],
items: [
  {
    id: 1,
    category: "lanches",
    name: "X-Burger",
    description: "Hambúrguer, queijo, alface, tomate e maionese",
    price: 18.90,
    popular: true
  },
  {
    id: 2,
    category: "lanches",
    name: "X-Bacon",
    description: "Hambúrguer, bacon, queijo, alface e tomate",
    price: 22.90
  }
]
```

### ☕ Cafeteria

```javascript
restaurant: {
  name: "Café Central",
  description: "Cafés especiais e doces artesanais",
  phone: "(11) 5555-6666",
  address: "Rua do Comércio, 789 - Centro"
},
categories: [
  { id: "cafes", name: "Cafés", icon: "☕" },
  { id: "salgados", name: "Salgados", icon: "🥐" },
  { id: "doces", name: "Doces", icon: "🧁" }
],
items: [
  {
    id: 1,
    category: "cafes",
    name: "Café Expresso",
    description: "Café expresso tradicional",
    price: 4.90
  },
  {
    id: 2,
    category: "cafes",
    name: "Cappuccino",
    description: "Café com leite vaporizado e espuma",
    price: 8.90,
    popular: true
  }
]
```

### 🍺 Bar e Petiscos

```javascript
restaurant: {
  name: "Bar do Zé",
  description: "Petiscos e cervejas artesanais",
  phone: "(11) 4444-5555",
  address: "Rua das Flores, 321 - Vila Madalena"
},
categories: [
  { id: "petiscos", name: "Petiscos", icon: "🍤" },
  { id: "cervejas", name: "Cervejas", icon: "🍺" },
  { id: "drinks", name: "Drinks", icon: "🍹" }
],
items: [
  {
    id: 1,
    category: "petiscos",
    name: "Camarão na Moranga",
    description: "Camarão refogado na moranga com catupiry",
    price: 45.90,
    popular: true
  },
  {
    id: 2,
    category: "cervejas",
    name: "Cerveja Artesanal",
    description: "Cerveja artesanal local, 350ml",
    price: 12.90
  }
]
```

### 🍣 Restaurante Japonês

```javascript
restaurant: {
  name: "Sushi Bar",
  description: "Culinária japonesa autêntica",
  phone: "(11) 7777-8888",
  address: "Rua Japão, 654 - Liberdade"
},
categories: [
  { id: "sushis", name: "Sushis", icon: "🍣" },
  { id: "sashimis", name: "Sashimis", icon: "🐟" },
  { id: "temakis", name: "Temakis", icon: "🌯" },
  { id: "bebidas", name: "Bebidas", icon: "🍶" }
],
items: [
  {
    id: 1,
    category: "sushis",
    name: "Sushi de Salmão",
    description: "Sushi de salmão fresco com arroz",
    price: 8.90
  },
  {
    id: 2,
    category: "sushis",
    name: "Sushi de Atum",
    description: "Sushi de atum fresco com arroz",
    price: 9.90,
    popular: true
  }
]
```

### 🍰 Confeitaria

```javascript
restaurant: {
  name: "Doce Vida",
  description: "Doces artesanais e bolos caseiros",
  phone: "(11) 9999-0000",
  address: "Rua dos Doces, 987 - Jardins"
},
categories: [
  { id: "bolos", name: "Bolos", icon: "🎂" },
  { id: "tortas", name: "Tortas", icon: "🥧" },
  { id: "doces", name: "Doces", icon: "🍰" },
  { id: "bebidas", name: "Bebidas", icon: "☕" }
],
items: [
  {
    id: 1,
    category: "bolos",
    name: "Bolo de Chocolate",
    description: "Bolo de chocolate com cobertura de ganache",
    price: 25.90,
    popular: true
  },
  {
    id: 2,
    category: "tortas",
    name: "Torta de Limão",
    description: "Torta de limão com merengue",
    price: 18.90
  }
]
```

## 🎨 Personalização de Cores

### Pizzaria (Vermelho)
```javascript
// src/config/theme.js
colors: {
  primary: 'red',
  secondary: 'gray',
  accent: 'yellow'
}
```

### Cafeteria (Marrom)
```javascript
colors: {
  primary: 'amber',
  secondary: 'gray',
  accent: 'orange'
}
```

### Bar (Azul)
```javascript
colors: {
  primary: 'blue',
  secondary: 'gray',
  accent: 'indigo'
}
```

### Restaurante Japonês (Verde)
```javascript
colors: {
  primary: 'green',
  secondary: 'gray',
  accent: 'emerald'
}
```

## 📱 Dicas por Segmento

### Pizzaria
- Destaque sabores populares
- Mostre ingredientes frescos
- Preços por tamanho (P, M, G)

### Lanchonete
- Foque em rapidez
- Mostre combos
- Preços acessíveis

### Cafeteria
- Ambiente aconchegante
- Ingredientes especiais
- Opções veganas

### Bar
- Happy hour
- Porções para compartilhar
- Cervejas especiais

---

**Escolha o template ideal para seu cliente! 🚀**
