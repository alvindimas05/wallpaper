const { query, user_check } = require("../mysql");

// user_id, kategori
async function post(req, res){
    try {
        var body = req.body;
        if(!await user_check(body.user_id)) return res.err("User not found!");
        console.log(body);
        
        await query("INSERT INTO kategori VALUES (NULL, ?)", [body.kategori]);
        res.success();
    } catch(err){
        res.err(err);
    }
}

async function get(req, res){
    try {
        var data = await query("SELECT * FROM kategori");
        res.success(data);
    } catch(err){
        res.err(err);
    }
}

module.exports = { post, get };