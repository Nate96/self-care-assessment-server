const repository = require('./repository')

var config = {
	user: 'sa',
	password: 'MyPass@word',
	server: 'localhost', 
	database: 'SelfAssessmentSurvey',
	options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

repository.GetCategories(config)
repository.GetQuestions(config)





