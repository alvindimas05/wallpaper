const { query, user_check } = require("../mysql");

// user_id, id_kategori, sub_kategori
async function post(req, res){
    try {
        var body = req.body;
        if(!await user_check(body.user_id)) return res.err("User not found!");
        
        await query("INSERT INTO sub_kategori VALUES (NULL, ?, ?)", [body.sub_kategori, body.id_kategori]);
        res.success();
    } catch(err){
        res.err(err);
    }
}

async function get(req, res){
    try {
        var data = await query(`SELECT k.nama AS kategori, s.nama AS sub_kategori FROM sub_kategori s
        INNER JOIN kategori k ON k.id=s.id_kategori`);
        res.success(data);
    } catch(err){
        res.err(err);
    }
}

module.exports = { post, get };