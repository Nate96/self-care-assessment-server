
var sql = require("mssql")

async function GetCategories(config) {
    try {
        let  pool = await  sql.connect(config);
        let  products = await  pool.request().query("SELECT * FROM Category")
        return products.recordset
    }
    catch (error) {
        console.log(error);
    }
}

  
async function GetQuestions(config) {
    try {
        let  pool = await  sql.connect(config);
        let  products = await  pool.request().query("SELECT * FROM Question")
        return products.recordset
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { GetCategories, GetQuestions }