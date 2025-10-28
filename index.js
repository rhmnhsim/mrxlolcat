import { Frog } from 'frog'

// ============================================
// FRAME: CLAIM NFT 🎁
// ============================================

const app = new Frog({
  title: 'Claim NFT 🎁',
  assetsPath: '/',
  basePath: '/',
})

// FRAME UTAMA
app.frame('/', (c) => {
  return c.res({
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', // bisa diganti ke gambar NFT kamu
    imageAspectRatio: '1:1',
    intents: [
      {
        label: 'Claim NFT 🎁',
        action: 'post',
        target: '/mint',
      },
    ],
  })
})

// FRAME KEDUA (SAAT USER KLIK)
app.frame('/mint', (c) => {
  return c.res({
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg', // ganti ke gambar "success"
    imageAspectRatio: '1:1',
    intents: [
      {
        label: 'Go to Mint Page 🪄',
        action: 'link',
        target: 'https://zora.co/collect/zora/12345', // ganti dengan URL NFT kamu
      },
      {
        label: 'Back 🔙',
        action: 'post',
        target: '/',
      },
    ],
  })
})

export default app
