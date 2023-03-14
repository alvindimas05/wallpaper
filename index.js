require("dotenv").config();

const express = require("express"),
bodyParser = require("body-parser"),
app = express(),

env = process.env,
port = env.PORT,
host = env.HOST;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.set("json spaces", 4);
app.use((req, res, next) => {
    res.err = (msg) => res.status(400).json({ status:false, msg:msg || null });
    res.success = (data) => res.json({ status:true, data:data || null });
    next();
});

const kategori = require("./routes/kategori"),
sub_kategori = require("./routes/sub_kategori"),
produk = require("./routes/produk");

app.get("/kategori", kategori.get);
app.post("/kategori", kategori.post);
app.get("/sub_kategori", sub_kategori.get);
app.post("/sub_kategori", sub_kategori.post);

app.get("/produk", produk.get);
app.post("/produk", produk.post);

app.listen(port, host, () => console.log(`Listening on ${host}:${port}`));