# 🍽️ Exemplos de Cardápios

## Como usar o mesmo código para diferentes clientes

### 1. Restaurante Italiano
```javascript
// src/config/menu.js
restaurant: {
  name: "Bella Italia",
  description: "Autêntica culinária italiana",
  phone: "(11) 3333-4444",
  address: "Rua Augusta, 456 - Consolação"
},
categories: [
  { id: "antipasti", name: "Antipasti", icon: "🧀" },
  { id: "primi", name: "Primi Piatti", icon: "🍝" },
  { id: "secondi", name: "Secondi Piatti", icon: "🥩" },
  { id: "dolci", name: "Dolci", icon: "🍰" }
]
```

### 2. Lanchonete
```javascript
restaurant: {
  name: "Lanchonete do João",
  description: "Lanches e refeições rápidas",
  phone: "(11) 2222-3333",
  address: "Av. Paulista, 789 - Bela Vista"
},
categories: [
  { id: "lanches", name: "Lanches", icon: "🍔" },
  { id: "refeicoes", name: "Refeições", icon: "🍽️" },
  { id: "bebidas", name: "Bebidas", icon: "🥤" },
  { id: "sobremesas", name: "Sobremesas", icon: "🍰" }
]
```

### 3. Bar e Petiscos
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
  { id: "drinks", name: "Drinks", icon: "🍹" },
  { id: "porcoes", name: "Porções", icon: "🍖" }
]
```

### 4. Cafeteria
```javascript
restaurant: {
  name: "Café Central",
  description: "Cafés especiais e doces artesanais",
  phone: "(11) 5555-6666",
  address: "Rua do Comércio, 654 - Centro"
},
categories: [
  { id: "cafes", name: "Cafés", icon: "☕" },
  { id: "salgados", name: "Salgados", icon: "🥐" },
  { id: "doces", name: "Doces", icon: "🧁" },
  { id: "sucos", name: "Sucos", icon: "🥤" }
]
```

## 🎨 Personalização por Cliente

### Para cada cliente, você pode:

1. **Criar uma pasta separada** com o código personalizado
2. **Usar variáveis de ambiente** para diferentes configurações
3. **Fazer deploy em URLs diferentes** (ex: cliente1.vercel.app, cliente2.vercel.app)

### Exemplo de Estrutura:
```
projetos-cardapio/
├── cliente-italiano/
│   ├── src/config/menu.js
│   └── ...
├── cliente-lanchonete/
│   ├── src/config/menu.js
│   └── ...
└── cliente-bar/
    ├── src/config/menu.js
    └── ...
```

## 🚀 Deploy Múltiplos

### Opção 1: Repositórios Separados
- Cada cliente tem seu próprio repositório
- Deploy independente
- Fácil manutenção individual

### Opção 2: Branch por Cliente
- Um repositório principal
- Branch para cada cliente
- Deploy automático por branch

### Opção 3: Configuração Dinâmica
- Um código, múltiplas configurações
- URL com parâmetro: `/cardapio?cliente=italiano`
- Banco de dados com configurações

## 💡 Dicas para Vender

1. **Demonstração ao vivo** - Mostre funcionando no celular
2. **Customização rápida** - Altere cores e logo na hora
3. **Preço competitivo** - Custo baixo, valor alto
4. **Suporte incluído** - Ajuda com personalização
5. **Deploy incluído** - Você faz o deploy para o cliente

## 📊 Exemplo de Proposta

```
CARDÁPIO DIGITAL - R$ 297/mês

✅ Design responsivo
✅ Fácil personalização
✅ QR Code incluído
✅ Deploy e hospedagem
✅ Suporte técnico
✅ Atualizações gratuitas

+ R$ 150 - Personalização inicial
+ R$ 50 - Treinamento da equipe
```

---

**Um código, infinitas possibilidades! 🚀**
