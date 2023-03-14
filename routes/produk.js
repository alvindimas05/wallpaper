const { query, user_check } = require("../mysql");

async function get(req, res){
    try {
        var data = await query(`SELECT p.id, p.nama, p.harga, k.nama AS kategori, s.nama AS sub_kategori
        FROM produk p INNER JOIN sub_kategori s ON s.id=p.id_sub_kategori
        INNER JOIN kategori k ON k.id=s.id_kategori`);

        res.success(data);
    } catch(err){
        res.err(err);
    }
}

// user_id, nama, image, harga, id_sub_kategori
async function post(req, res){
    try {
        var body = req.body;
        if(!await user_check(body.user_id)) return res.err("User not found!");
        if(!req.files && !req.files.image) return res.err("Image not found!");

        await query("INSERT INTO produk VALUES (NULL, ?, ?, ?)", [body.nama, body.harga, body.id_sub_kategori]);
        res.success();
    } catch(err){
        res.err(err);
    }
}

module.exports = { post, get };