
var sql = require("mssql")

async function GetCategories(config) {
    try {
        let  pool = await  sql.connect(config);
        let  categories = await  pool.request().query("SELECT * FROM Category")
        return categories.recordset
    }
    catch (error) {
        console.log(error);
    }
}

  
async function GetQuestions(config) {
    try {
        let  pool = await  sql.connect(config);
        let  questions = await  pool.request().query("SELECT * FROM Question")
        return questions.recordset
    }
    catch (error) {
        console.log(error);
    }
}

async function CreateForm(config) {
    try {
        let pool = await  sql.connect(config);
        let insertForm = await  pool.request()
            .input('UserId', sql.Int, 1)
            .query("INSERT INTO Form (UserId, CreatedDt, UpdateDt) VALUES(@UserId, GETDATE(), GETDATE())")

        let formId = await pool.request().query("SELECT TOP 1 formId FROM form ORDER BY FormId DESC")
        return formId.recordset
    }
    catch (error) {
        console.log(error);
    }
}

async function GetForms(config, userId) {
    try {
        let pool = await  sql.connect(config);
        let forms = await  pool.request()
            .input('UserId', sql.Int, userId)
            .query("SELECT * FROM Form WHERE UserId = @UserId")

        return forms.recordset
    }
    catch (error) {
        console.log(error);
    }
}

async function CreateUserData(config, userData) {
    try {
        let pool = await  sql.connect(config);
        let data = await  pool.request()
            .input('UserId', sql.Int, userData.UserId)
            .input('QuestionId', sql.Int, userData.QuestionId)
            .input('FormId', sql.Int, userData.FormId)
            .input('Answer', sql.Int, userData.Answer)
            .input('Improve', sql.Char, userData.Improve)
            .query("INSERT INTO UserData(UserId, QuestionId, FormId, Answer, Improve, CreateDt, UpdatedDt) VALUES(@UserId, @QuestionId, @FormId, @Answer, @Improve, GETDATE(), GETDATE())")
    }
    catch (error) {
        console.log(error);
    }
}

async function GeteUserData(config, userId) {
    try {
        let pool = await  sql.connect(config);
        let userData = await  pool.request()
            .input('UserId', sql.Int, userId)
            .query("SELECT * FROM UserData WHERE UserId = @UserId")
        
        return userData.recordset
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { GetCategories, GetQuestions, CreateForm, GetForms, CreateUserData, GeteUserData }