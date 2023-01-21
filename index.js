const repository = require('./repository')

var config = {
	user: 'sa',
	password: 'Password5!',
	server: 'localhost', 
	database: 'SelfAssessmentSurvey',
	options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

repository.GetCategories(config)
    .then(categories => console.log(categories))
repository.GetQuestions(config)
    .then(questions => console.log(questions))





