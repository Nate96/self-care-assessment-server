const config = require('./configs/db.config')
var sql = require("mssql")

/**
 * Gets all Questions from the database
 * @returns batabase query in JSON
 */
async function GetCategories() {
    try {
        let  pool = await  sql.connect(config.DbConfig);
        let  categories = await  pool.request().execute('getCategories')
        
        return categories.recordset
    }
    catch (error) {
        console.log(error);
    }
}

/**
 * Gets all Questions from the database
 * @returns batabase query in JSON
 */
async function GetQuestions() {
    try {
        let  pool = await  sql.connect(config.DbConfig);
        let  questions = await  pool.request().execute('getQuestions')
        
        return questions.recordset
    }
    catch (error) {
        console.log(error);
    }
}

/**
 * Adds a from to the batabase fro a given userId
 * @param {number} userId 
 * @returns a JSON object of the crated form
 */
async function CreateForm(userId) {
    try {
        let pool = await sql.connect(config.DbConfig);
        let insertForm = await  pool.request()
            .input('UserId', sql.Int, userId)
            .execute('createForm')

        return insertForm.recordset
    }
    catch (error) {
        console.log(error);
    }
}

/**
 * Gets all Forms for a giving user
 * @param {number} userId 
 * @returns a JSON object of the form
 */
async function GetForms(userId) {
    try {
        let pool = await  sql.connect(config.DbConfig);
        let forms = await  pool.request()
            .input('UserId', sql.Int, userId)
            .execute('getForm')

        return forms.recordset
    }
    catch (error) {
        console.log(error);
    }
}

/**
 * Save answers from a given user
 * @param {*} userData 
 * @returns a JSON object of the form
 */
async function CreateUserData(userData) {
    try {
        let pool = await  sql.connect(config.DbConfig);
        let data = await  pool.request()
            .input('UserId', sql.Int, userData.UserId)
            .input('QuestionId', sql.Int, userData.QuestionId)
            .input('FormId', sql.Int, userData.FormId)
            .input('Answer', sql.Int, userData.Answer)
            .input('Improve', sql.Bit, userData.Improve)
            .execute('createUserData')
             
        return 'adding user data for form ' + userData.FormId
    }
    catch (error) {
        console.log(error);
    }   
}

/**
 * Get user data for a given user
 * @param {number} userId 
 * @returns a JSON object of the form
 */
async function GeteUserData(userId) {
    try {
        let pool = await  sql.connect(config.DbConfig);
        let userData = await  pool.request()
            .input('UserId', sql.Int, userId)
            .execute('getUserData')

        return userData.recordset
    }
    catch (error) {
        console.log(error);
    }
}

/**
 * Gets answers for a given assessment
 * @param {number} formId 
 */
async function GetAssessment(formId) {
    try {
        let pool = await sql.connect(config.DbConfig);
        let userData = await  pool.request()
            .input('FormId', sql.Int, formId)
            .execute('getAssessment')
        
        return userData.recordset
    }
    catch(error) {
        console.log(error)
    }
}

/**
 * Builds table with stats of the previous Assessments
 * @param {number} userId 
 * @returns {String, number, number}
 */
async function GetBasicAnalyseCalculating(userId) {
    let totalStars = 0
    let totalAnswers = 0
    let table = []
    let count = 0
    
    //get user data
    let userData = await GeteUserData(userId)
    console.log('user data:', userData)
    
    for (let i = 0; i < userData.length; i++) {
        
        totalAnswers += userData[i].Answer
        
        if(userData[i].Improve === true) {
            totalStars += 1
        }
        count += 1

        if(userData[i + 1] === undefined || userData[i].FormId !== userData[i + 1]?.FormId) {
            let row = {
                formId: userData[i].FormId,
                createdDt: userData[i].createdDt,
                averageRank: totalAnswers / count,
                toalStars: totalStars,
            }

            table.push(row)

            totalAnswers = 0
            totalStars = 0
            count = 0

            console.log('Form ID', userData[i].FormId)
            createBasicAnalyse(userData[i].FormId)
        }
    }

    console.log('Table:', table)
    
    return table
}

/**
 * creates a row in the BasicAnalyse Table
 * @param {number} formId 
 * @returns string
 */
async function createBasicAnalyse(formId) {
    try {
        let pool = await sql.connect(config.DbConfig)
        let request = await pool.request()
            .input('formId', sql.Int, formId)
            .execute('addBasicCalculations')
        
        return 'added' + formId
    }
    catch(error) {
        console.log(error)
    }
}

async function getBasicCalculation(userId) {
    try {
        let pool = await sql.connect(config.DbConfig)
        let request = await pool.request()
            .input('userId', sql.Int, userId)
            .execute('getBasicCalculations')
        
        return request.recordset
    }
    catch(error) {
        console.log(error)
    }
}


module.exports = { GetCategories, GetQuestions, CreateForm, GetForms, CreateUserData, GeteUserData, GetAssessment, GetBasicAnalyseCalculating, createBasicAnalyse, getBasicCalculation }