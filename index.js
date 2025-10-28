import { Frog } from 'frog'

// Inisialisasi aplikasi Frame
const app = new Frog({
  title: 'Claim NFT 🎁',
})

// Frame utama (halaman pertama)
app.frame('/', (c) => {
  return c.res({
    image: 'https://zora.co/coin/base:0x431371045e52dac0bd39a722dfc9e76d79913afd?referrer=0xf96c80dab17bccc9e0c0c454fa6ec9234ef240f2', // ganti dengan gambar NFT kamu
    intents: [
      {
        label: 'Claim NFT 🎁',
        action: 'mint',
        target: 'https://zora.co/coin/base:0x431371045e52dac0bd39a722dfc9e76d79913afd', // ganti dengan link NFT
      },
    ],
  })
})

export default app
