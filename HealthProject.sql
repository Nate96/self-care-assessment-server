CREATE table categories (
    category_id serial PRIMARY KEY,
    category VARCHAR(50) UNIQUE NOT NULL,
    create_dt TIMESTAMP NOT NULL,
    updated_dt TIMESTAMP NOT NULL
);

CREATE TABLE questions (
    question_id serial PRIMARY KEY,
    FOREIGN KEY(category_id) REFERENCES categories(category_id),
    create_dt TIMESTAMP NOT NULL,
    updated_dt TIMESTAMP NOT NULL
);

CREATE table user (
    user_id serial PRIMARY KEY,
    user_name VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(12) NOT NULL,
    create_dt TIMESTAMP NOT NULL,
    updated_dt TIMESTAMP NOT NULL
);

CREATE table user_data (
    user_data_id serial PRIMARY KEY,
    FOREIGN KEY(user_id) REFERENCES user(user_id),
    FOREIGN KEY(question_id) REFERENCES questions(question_id),
    answer INT NOT NULL,
    improve BOOLEAN DEFAULT FALSE,
    create_dt TIMESTAMP NOT NULL,
    updated_dt TIMESTAMP NOT NULL
);






