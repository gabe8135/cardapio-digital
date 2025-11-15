# 🎨 Guia de Personalização Rápida

## 📝 Como personalizar seu cardápio em 5 minutos

### 1. Informações Básicas
Edite o arquivo `src/config/menu.js` na seção `restaurant`:

```javascript
restaurant: {
  name: "SEU RESTAURANTE AQUI",
  logo: "/logo.png", // Coloque sua logo na pasta public
  description: "Sua descrição aqui",
  phone: "(11) 99999-9999",
  address: "Sua Rua, 123 - Bairro"
}
```

### 2. Adicionar/Remover Categorias
Na seção `categories`, adicione ou remova categorias:

```javascript
categories: [
  {
    id: "entradas",
    name: "Entradas",
    icon: "🥗"  // Use emojis ou ícones
  },
  {
    id: "bebidas",
    name: "Bebidas",
    icon: "🥤"
  }
  // Adicione mais categorias...
]
```

### 3. Adicionar Itens do Cardápio
Na seção `items`, adicione seus pratos:

```javascript
{
  id: 1,                    // ID único
  category: "entradas",     // Deve corresponder ao ID da categoria
  name: "Nome do Prato",
  description: "Descrição detalhada do prato",
  price: 25.90,            // Preço em reais
  image: "/images/prato.jpg", // Opcional - coloque na pasta public/images
  popular: true            // Opcional - marca como popular
}
```

### 4. Imagens dos Pratos
1. Coloque as imagens na pasta `public/images/`
2. Referencie no item: `image: "/images/nome-da-imagem.jpg"`

### 5. Cores e Tema
Edite `src/config/theme.js` para alterar cores:

```javascript
colors: {
  primary: 'blue',    // Mude para: green, red, purple, indigo, etc.
  secondary: 'gray',
  accent: 'green',
}
```

## 🚀 Deploy Rápido

### Vercel (Recomendado)
1. Faça upload do projeto no GitHub
2. Conecte no [Vercel](https://vercel.com)
3. Deploy automático!

### Netlify
1. Faça build: `npm run build`
2. Faça upload da pasta `out` no Netlify

### Hospedagem Própria
1. `npm run build`
2. `npm start`
3. Configure seu servidor

## 📱 Gerar QR Code

1. Instale: `npm install qrcode`
2. Execute: `node scripts/generate-qr.js`
3. Use o QR Code gerado nos seus materiais

## ✅ Checklist de Personalização

- [ ] Nome do restaurante
- [ ] Telefone e endereço
- [ ] Logo (opcional)
- [ ] Categorias do cardápio
- [ ] Itens com preços
- [ ] Imagens dos pratos
- [ ] Cores do tema
- [ ] Teste em celular
- [ ] Deploy online
- [ ] QR Code gerado

## 🎯 Dicas Importantes

1. **Teste sempre no celular** - A maioria dos clientes acessa pelo celular
2. **Use imagens de qualidade** - Boas fotos vendem mais
3. **Preços atualizados** - Mantenha sempre atualizado
4. **Descrições atrativas** - Seja criativo nas descrições
5. **Categorias organizadas** - Facilite a navegação

## 🆘 Precisa de Ajuda?

- **Problemas técnicos**: Verifique o console do navegador
- **Personalização**: Edite os arquivos de configuração
- **Deploy**: Use Vercel para facilitar

---

**Seu cardápio digital estará pronto em minutos! 🚀**
