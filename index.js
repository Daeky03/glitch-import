const express = require('express');
const app = express();
app.get("/", async (req, res) => {
  res.send("<b>Bu fikir tamamen Speed Uptime adlı Uptime Servisine Aittir ve 28/Nisan/2024 Tarihinde bulunmuştur. diğer uptime servisleri bu sistemi gösteriyor ve tanıtıyor ise lütfen bize https://discord.com/invite/eRf8QVtwTT Adresinden ulaşarak bildiriniz ilk bulan servis tamamen Speed Uptime adlı servistir</b>")
})
app.listen(3000)