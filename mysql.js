const mysql = require("mysql2/promise"),
env = process.env,
conn = mysql.createPool({
    user:env.DB_USER,
    password:env.DB_PASS,
    host:env.DB_HOST,
    database:env.DB_DATABASE
});

/** @param {String} sql */
async function query(sql, values){
    var data = await conn.query(sql, values);
    return data[0];
}
async function user_check(user_id){
    var res = await query("SELECT COUNT(*) AS exist FROM users WHERE id=?", [user_id]);
    return !!res[0].exist;
}

module.exports = { user_check, query };