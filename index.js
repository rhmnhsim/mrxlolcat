import { Frog } from 'frog'

// ============================================
// FRAME: CLAIM KONTOL 🎁
// ============================================

const app = new Frog({
  title: 'Claim NFT 🎁',
  assetsPath: '/',
  basePath: '/',
})

// Frame utama — tampil di feed Warpcast
app.frame('/', (c) => {
  return c.res({
    image: 'https://zora.co/static/nft-preview.png', // Ganti dengan gambar NFT kamu
    imageAspectRatio: '1:1',
    intents: [
      {
        label: 'Claim NFT 🎁',
        action: 'post',
      },
    ],
  })
})

// Aksi ketika tombol ditekan
app.frame('/mint', (c) => {
  const { fid } = c
  console.log(`User FID: ${fid} ingin mint NFT!`)

  // Arahkan ke halaman mint NFT kamu di Zora/Base
  return c.res({
    image: 'https://zora.co/static/nft-success.png', // Ganti dengan gambar sukses
    imageAspectRatio: '1:1',
    intents: [
      {
        label: 'Go to Mint Page 🪄',
        action: 'link',
        target: 'https://zora.co/coin/base:0x431371045e52dac0bd39a722dfc9e76d79913afd', // Ganti dengan link NFT kamu
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

