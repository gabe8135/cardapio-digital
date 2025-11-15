# 🚀 Guia de Deploy

## Opções de Hospedagem

### 1. Vercel (Recomendado) ⭐

**Mais fácil e rápido:**

1. Acesse [vercel.com](https://vercel.com)
2. Conecte sua conta GitHub
3. Importe o projeto
4. Deploy automático!

**Vantagens:**
- Deploy automático
- HTTPS gratuito
- CDN global
- Domínio personalizado
- Preview de branches

### 2. Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Conecte GitHub ou faça upload
3. Configure build: `npm run build`
4. Pasta de output: `out`

### 3. Hospedagem Própria

```bash
# Build do projeto
npm run build

# Iniciar servidor
npm start

# Ou usar PM2 para produção
npm install -g pm2
pm2 start npm --name "cardapio" -- start
```

## 📱 Configuração do QR Code

### 1. Instalar dependência
```bash
npm install qrcode
```

### 2. Gerar QR Code
```bash
npm run qr
```

### 3. Personalizar URL
Edite `scripts/generate-qr.js`:
```javascript
const url = 'https://seu-cardapio.vercel.app'
```

## 🌐 Domínio Personalizado

### Vercel
1. Vá em Settings > Domains
2. Adicione seu domínio
3. Configure DNS

### Netlify
1. Vá em Domain Management
2. Adicione domínio personalizado
3. Configure DNS

## 📊 Analytics (Opcional)

### Google Analytics
Adicione no `src/app/layout.js`:
```javascript
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## 🔧 Configurações de Produção

### Variáveis de Ambiente
Crie `.env.local`:
```env
NEXT_PUBLIC_RESTAURANT_NAME=Seu Restaurante
NEXT_PUBLIC_RESTAURANT_PHONE=(11) 99999-9999
```

### Otimizações
- Comprima imagens
- Use WebP quando possível
- Configure cache headers
- Use CDN para imagens

## 📱 Teste Mobile

**Sempre teste em:**
- iPhone (Safari)
- Android (Chrome)
- Diferentes tamanhos de tela
- Modo paisagem e retrato

## 🆘 Problemas Comuns

### Build falha
```bash
# Limpar cache
rm -rf .next
npm run build
```

### Imagens não carregam
- Verifique se estão na pasta `public/images/`
- Use caminhos relativos: `/images/nome.jpg`

### Estilos não aplicam
- Verifique se Tailwind está configurado
- Execute: `npm run dev`

## ✅ Checklist de Deploy

- [ ] Projeto builda sem erros
- [ ] Testado em mobile
- [ ] Imagens carregam
- [ ] QR Code gerado
- [ ] Domínio configurado
- [ ] HTTPS ativo
- [ ] Analytics configurado (opcional)

---

**Seu cardápio digital estará online em minutos! 🚀**
