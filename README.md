# 🍽️ Cardápio Digital

Um cardápio digital simples e reutilizável para restaurantes, bares e lanchonetes.

## ✨ Características

- **Responsivo** - Funciona perfeitamente em celulares, tablets e desktops
- **Fácil de personalizar** - Edite apenas um arquivo para alterar todo o cardápio
- **Sem pedidos online** - Apenas exibe o cardápio, pedidos são feitos com o garçom
- **Design moderno** - Interface limpa e atrativa com Tailwind CSS
- **Reutilizável** - Mesmo código para diferentes clientes

## 🚀 Como usar

### 1. Instalação

```bash
cd cardapio-digital
npm install
npm run dev
```

### 2. Personalização

Edite o arquivo `src/config/menu.js` para personalizar:

#### Informações do Restaurante
```javascript
restaurant: {
  name: "Seu Restaurante",
  logo: "/logo.png", // Coloque sua logo na pasta public
  description: "Sua descrição aqui",
  phone: "(11) 99999-9999",
  address: "Sua Rua, 123 - Bairro"
}
```

#### Categorias
```javascript
categories: [
  {
    id: "entradas",
    name: "Entradas",
    icon: "🥗"
  },
  // Adicione mais categorias...
]
```

#### Itens do Cardápio
```javascript
items: [
  {
    id: 1,
    category: "entradas",
    name: "Nome do Prato",
    description: "Descrição detalhada do prato",
    price: 25.90,
    image: "/images/prato.jpg", // Opcional
    popular: true // Opcional - marca como popular
  },
  // Adicione mais itens...
]
```

### 3. Imagens

Coloque as imagens dos pratos na pasta `public/images/` e referencie no arquivo de configuração.

### 4. Deploy

Para usar em produção:

```bash
npm run build
npm start
```

## 📱 Como funciona

1. Cliente escaneia o QR Code
2. Acessa o cardápio digital
3. Navega pelas categorias
4. Vê detalhes dos pratos
5. Chama o garçom para fazer o pedido

## 🎨 Personalização Avançada

### Cores
Edite o arquivo `tailwind.config.js` para alterar as cores do tema.

### Layout
Modifique os componentes em `src/components/` para ajustar o layout.

### Funcionalidades
Adicione novas funcionalidades como:
- Busca por pratos
- Filtros por preço
- Integração com sistema de pedidos
- Analytics de visualizações

## 📦 Estrutura do Projeto

```
cardapio-digital/
├── src/
│   ├── app/
│   │   └── page.js          # Página principal
│   ├── components/
│   │   ├── Header.jsx       # Cabeçalho
│   │   ├── MenuCard.jsx     # Card do item
│   │   ├── ItemModal.jsx    # Modal de detalhes
│   │   └── CategoryFilter.jsx # Filtro de categorias
│   ├── config/
│   │   └── menu.js          # Configuração do cardápio
│   └── lib/
│       └── supabase.js      # Configuração do Supabase
├── public/
│   └── images/              # Imagens dos pratos
└── README.md
```

## 🔧 Tecnologias

- **Next.js** - Framework React
- **Tailwind CSS** - Estilização
- **JavaScript** - Linguagem (sem TypeScript)
- **Supabase** - Banco de dados (opcional)

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato!

---

**Desenvolvido para ser simples, rápido e eficiente! 🚀**