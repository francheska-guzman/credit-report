CREATE TABLE account_type(
  id SERIAL PRIMARY KEY,
  type VARCHAR(255)
);

CREATE TABLE current_status(
  id SERIAL PRIMARY KEY,
  status VARCHAR(255)
);

CREATE TABLE gender(
  id SERIAL PRIMARY KEY,
  gender VARCHAR(255)
);

CREATE TABLE user_information(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  date_of_birth VARCHAR(255),
  place_of_birth VARCHAR(255),
  gender INT REFERENCES gender(id),
);

CREATE TABLE account_details(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES user_information(id),
  account_type INT REFERENCES type(id),
  opened VARCHAR(255),
  creditor VARCHAR(255),
  credit_limit INT,
  credit_use INT,
  current_status INT REFERENCES status(id)
);

CREATE TABLE payment_history(
  id SERIAL PRIMARY KEY REFERENCES account_details(id),
  user_id INT REFERENCES account_details(user_id),
  jan BOOLEAN,
  feb BOOLEAN,
  mar BOOLEAN,
  apr BOOLEAN,
  may BOOLEAN,
  jun BOOLEAN,
  jul BOOLEAN,
  aug BOOLEAN,
  sep BOOLEAN,
  oct BOOLEAN,
  nov BOOLEAN,
  dec BOOLEAN
);

INSERT INTO account_type (type) VALUES 
  ('Credit Card'), 
  ('Personal Loan'),
  ('Student Loan')
  ('Auto Loan'),
  ('Home Loan'),
  ('Business Loan');

INSERT INTO current_status (status) VALUES 
  ('Open'), 
  ('Closed');

INSERT INTO gender (gender) VALUES 
  ('Male'), 
  ('Female');

INSERT INTO user_information (first_name, last_name, date_of_birth, place_of_birth, gender) VALUES 
  ('John', 'Doe', '1-18-1979', 'New York, NY', 1), 
  ('Jane', 'Monroe', '10-25-1984', 'San Francisco, CA', 2);

INSERT INTO account_details (user_id, account_type, opened, creditor, credit_limit, credit_use, current_status) VALUES 
  (1, 2, '10-1-2004', 'JP Morgan Chase', 9500, 1290, 1),
  (1, 1, '5-12-2001', 'GE Capital Retail Bank', 3200, 203, 1),
  (1, 5, '3-25-2009', 'Bank of America', 50000, 9721, 1),
  (1, 1, '11-3-2015', 'JP Morgan Chase', 6400, 904, 1),
  (2, 3, '1-18-2011', 'FedLoan Servicing', 4200, 3420, 1),
  (2, 1, '5-20-2010', 'Discover', 2500, 1850, 2),
  (2, 3, '9-22-2009', 'Fed Loan Servicing', 4500, 3595 2),
  (2, 1, '4-11-2014', 'TD Bank USA', 2300, 292, 1),
  (2, 1, '6-23-2015', 'Capital One', 7100, 5232, 2),
  (2, 4, '12-17-2016', 'Bank of America', 12000, 8300, 1);
