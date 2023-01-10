-- https://www.isbe.net/Documents/SQL_server_standards.pdf


DROP DATABASE IF EXISTS SelfAssessmentSurvey;
CREATE DATABASE SelfAssessmentSurvey;

DROP TABLE IF EXISTS Category;
CREATE table Category (
    CategoryId INT IDENTITY(1,1), -- IDENTITY(1,1) increments
    Category VARCHAR(50) UNIQUE NOT NULL,
    CreateDt TIMESTAMP NOT NULL,
    UpdatedDt DATETIME NOT NULL,

    PRIMARY KEY (CategoryId)
);

INSERT INTO Category(Category, UpdatedDt) VALUES('Pyscial Self-Care', GETDATE());
INSERT INTO Category(Category, UpdatedDt) VALUES('Psychological/Emotional Self-Care', GETDATE());
INSERT INTO Category(Category, UpdatedDt) VALUES('Social Self-Care', GETDATE());
INSERT INTO Category(Category, UpdatedDt) VALUES('Spiritual Self-Care', GETDATE());
INSERT INTO Category(Category, UpdatedDt) VALUES('Professional Self-Care', GETDATE());


CREATE TABLE Question (
    QuestionId INT IDENTITY(1,1),
    Question VARCHAR(100) NOT NULL,
    CategoryId INT NOT NULL,
    CreateDt TIMESTAMP NOT NULL,
    UpdatedDt TIMESTAMP NOT NULL,

    PRIMARY KEY(QuestionId),
    FOREIGN KEY(CategoryId) REFERENCES Category(CategoryId)
);

INSERT INTO Question(Question, CategoryId) VAlUES('Eat healthy food', 1);
INSERT INTO Question(Question, CategoryId) VAlUES('Take care of personal hygiene', 1);
INSERT INTO Question(Question, CategoryId) VAlUES('Exercise', 1);
INSERT INTO Question(Question, CategoryId) VAlUES('Wear cloths that help me feel good about myself', 1);
INSERT INTO Question(Question, CategoryId) VAlUES('Eat regularly', 1);
INSERT INTO Question(Question, CategoryId) VAlUES('Participate in fun activites (e.g. walking, swimming, dancing, sport', 1);
INSERT INTO Question(Question, CategoryId) VAlUES('Get enough sleep', 1);
INSERT INTO Question(Question, CategoryId) VAlUES('Go to preventative medical appointment (e.g. checkups, teeth cleanings', 1);
INSERT INTO Question(Question, CategoryId) VAlUES('Rest when sick', 1);
INSERT INTO Question(Question, CategoryId) VAlUES('Overall physical self-care', 1);

INSERT INTO Question(Question, CategoryId) VAlUES('Take time off from work, school, and other obligatons', 2);
INSERT INTO Question(Question, CategoryId) VAlUES('Participate in hobbies', 2);
INSERT INTO Question(Question, CategoryId) VAlUES('Get away from distractions (e.g. phone, email)', 2);
INSERT INTO Question(Question, CategoryId) VAlUES('Learn new things, unrelated to work or school', 2);
INSERT INTO Question(Question, CategoryId) VAlUES('Exress my feelings in a healthy way (e.g. talking, creating art, journaling', 2);
INSERT INTO Question(Question, CategoryId) VAlUES('Recognize my own strengths and achievements', 2);
INSERT INTO Question(Question, CategoryId) VAlUES('Go on vacations or day trips', 2);
INSERT INTO Question(Question, CategoryId) VAlUES('Do something comforting (e.ge rewatching a favorite movie, taking a long bath', 2);
INSERT INTO Question(Question, CategoryId) VAlUES('Find reasons to laugh', 2);
INSERT INTO Question(Question, CategoryId) VAlUES('Talk about my problems', 2);
INSERT INTO Question(Question, CategoryId) VAlUES('Overall psychological and emotional self-care', 2);

INSERT INTO Question(Question, CategoryId) VAlUES('Spend time with people who I like', 3);
INSERT INTO Question(Question, CategoryId) VAlUES('Call or write to friends and family who are far away', 3);
INSERT INTO Question(Question, CategoryId) VAlUES('Have stimulating conversations', 3);
INSERT INTO Question(Question, CategoryId) VAlUES('Meet new people', 3);
INSERT INTO Question(Question, CategoryId) VAlUES('Spend time alone with my romantic partner', 3);
INSERT INTO Question(Question, CategoryId) VAlUES('Ask others for help, when needed', 3);
INSERT INTO Question(Question, CategoryId) VAlUES('Do enjoyable activities with other people', 3);
INSERT INTO Question(Question, CategoryId) VAlUES('Have intimate time with my romantic partner', 3);
INSERT INTO Question(Question, CategoryId) VAlUES('Keep in touch with old friends', 3);
INSERT INTO Question(Question, CategoryId) VAlUES('Overall social self-care', 3);

INSERT INTO Question(Question, CategoryId) VAlUES('Spend time in nature', 4);
INSERT INTO Question(Question, CategoryId) VAlUES('Meditate', 4);
INSERT INTO Question(Question, CategoryId) VAlUES('Pray', 4);
INSERT INTO Question(Question, CategoryId) VAlUES('Recognize the things that give meaning to my life', 4);
INSERT INTO Question(Question, CategoryId) VAlUES('Act in accordance with my morals and values', 4);
INSERT INTO Question(Question, CategoryId) VAlUES('Set aside time for thought and reflection', 4);
INSERT INTO Question(Question, CategoryId) VAlUES('Participate in a cuase tat is important to me', 4);
INSERT INTO Question(Question, CategoryId) VAlUES('Appreciate art that is impactful to me (e.g. music, film, liteture', 4);
INSERT INTO Question(Question, CategoryId) VAlUES('Overall spiritual self-care', 4);

INSERT INTO Question(Question, CategoryId) VAlUES('Improve my [rofessional skills', 5);
INSERT INTO Question(Question, CategoryId) VAlUES('Say "no" to excessive new responsibilities', 5);
INSERT INTO Question(Question, CategoryId) VAlUES('Take on projects that are interesting or rewarding', 5);
INSERT INTO Question(Question, CategoryId) VAlUES('Learn new things related to my profession', 5);
INSERT INTO Question(Question, CategoryId) VAlUES('Make time to talk and build relationships with colleagues', 5);
INSERT INTO Question(Question, CategoryId) VAlUES('Take breaks during work', 5);
INSERT INTO Question(Question, CategoryId) VAlUES('Maintain balance between my professional and personal life', 5);
INSERT INTO Question(Question, CategoryId) VAlUES('Keep a comforable workspace that allows me to be successfuly', 5);
INSERT INTO Question(Question, CategoryId) VAlUES('Advocate for fair pay, benefits, and other needs', 5);
INSERT INTO Question(Question, CategoryId) VAlUES('Overall professional self-care', 5);


CREATE table Users (
    UserId INT IDENTITY(1,1),
    UserName VARCHAR(50) UNIQUE NOT NULL,
    Password VARCHAR(12) NOT NULL,
    CreateDt TIMESTAMP NOT NULL,
    UpdateDt TIMESTAMP NOT NULL,

    PRIMARY KEY(UserId)
);

CREATE table UserData (
    UserDataId INT IDENTITY(1,1),
    UserID INT NOT NULL,   
    QuestionId INT NOT NULL,
    Answer INT NOT NULL,
    Improve varchar(1) NOT NULL,
    CreateDt TIMESTAMP NOT NULL,
    UpdatedDt TIMESTAMP NOT NULL,

    PRIMARY KEY(UserDataId),
    FOREIGN KEY(UserID) REFERENCES users(UserID),
    FOREIGN KEY(QuestionId) REFERENCES Question(QuestionId)
);






