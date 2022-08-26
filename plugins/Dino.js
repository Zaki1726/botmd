//ubah jadi grup mu

let handler = async m => m.reply(`

*ZAMAN DINOSAURUS*  🔎

 Dinosaurus ada pada periode Mesozoikum, dimana pada masa ini belum ada manusia yang hidup. Periode Mesozoikum terjadi pada 245 juta hingga 66 juta tahun yang lalu.
 
*Kucing Purba* 🐱🐈
kenal pula sebagai kucing Scimitar, Homotherium merupakan salah satu kucing purba yang hidup paling lama. Kelompok ini berhasil bertahan selama 5 juta tahun sebelum akhirnya punah.

*Dinosaurs Punah Karena Apa?*  😕
Hantaman Meteor  🌋

Pada tahun 1980, dua ilmuwan mengusulkan gagasan bahwa meteor seukuran gunung menabrak Bumi 66 juta tahun yang lalu, mengisi atmosfer dengan gas, debu, dan puing-puing yang secara drastis mengubah iklim.

*Apakah Kecoa Termasuk Hewan Binatang  Purba?*  🔎

Fakta yang ditemukan dari sejumlah penelitian mengungkapkan kalau kecoak merupakan salah satu hewan purba yang mampu beradaptasi dan berevolusi hingga bisa bertahan hidup hingga hari ini. Bahkan umur kecoak melebihi usia dinosaurus. kecoak disebut sudah ada 300 juta tahun lebih dulu dari dinosaurus.

*Source : Paste dari Nobita Bot Hehe:)*
`.trim()) 
handler.help = ['zamandino']
handler.tags = ['game']
handler.command = /^(zamandino)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
