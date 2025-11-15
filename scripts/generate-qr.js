// Script para gerar QR Code do cardápio
// Execute: node scripts/generate-qr.js

const QRCode = require('qrcode')

async function generateQR() {
  try {
    // URL do seu cardápio (substitua pela sua URL de produção)
    const url = 'https://seu-cardapio.vercel.app' // ou sua URL local: http://localhost:3000
    
    // Gerar QR Code
    const qrCodeDataURL = await QRCode.toDataURL(url, {
      width: 300,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    })
    
    console.log('✅ QR Code gerado com sucesso!')
    console.log('📱 URL do cardápio:', url)
    console.log('🖼️  QR Code salvo como: qr-code.png')
    
    // Salvar como arquivo (requer fs)
    const fs = require('fs')
    const base64Data = qrCodeDataURL.replace(/^data:image\/png;base64,/, '')
    fs.writeFileSync('qr-code.png', base64Data, 'base64')
    
  } catch (error) {
    console.error('❌ Erro ao gerar QR Code:', error.message)
    console.log('\n💡 Para usar este script:')
    console.log('1. npm install qrcode')
    console.log('2. node scripts/generate-qr.js')
  }
}

generateQR()
