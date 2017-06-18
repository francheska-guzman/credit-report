CREATE TABLE account_type(
  id SERIAL PRIMARY KEY,
  account_type VARCHAR(255)
);

CREATE TABLE collection(
  id SERIAL PRIMARY KEY,
  collection VARCHAR(255)
);

CREATE TABLE current_status(
  id SERIAL PRIMARY KEY,
  current_status VARCHAR(255)
);

CREATE TABLE us_credit_score(
  id SERIAL PRIMARY KEY,
  state VARCHAR(255),
  state_average_score INT
);

CREATE TABLE genders(
  id SERIAL PRIMARY KEY,
  gender VARCHAR(255)
);

CREATE TABLE marital_status(
  id SERIAL PRIMARY KEY,
  marital_status VARCHAR(255)
);

CREATE TABLE public_record(
  id SERIAL PRIMARY KEY,
  public_record VARCHAR(255)
);

CREATE TABLE user_information(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  middle_name VARCHAR(255),
  last_name VARCHAR(255),
  date_of_birth VARCHAR(255),
  place_of_birth VARCHAR(255),
  gender INT REFERENCES genders(id),
  marital_status INT REFERENCES marital_status(id),
  annual_household_income INT,
  street_address VARCHAR(255),
  apartment VARCHAR(255),
  city VARCHAR(255),
  state INT REFERENCES us_credit_score(id),
  zip_code VARCHAR(255),
  telephone_number VARCHAR(255),
  email VARCHAR(255),
  public_record INT REFERENCES public_record(id),
  user_credit_score INT
);

CREATE TABLE account_details(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES user_information(id),
  account_type INT REFERENCES account_type(id),
  opened VARCHAR(255),
  creditor VARCHAR(255),
  credit_limit INT,
  credit_use INT,
  current_status INT REFERENCES current_status(id),
  collection INT REFERENCES collection(id),
  collection_agency VARCHAR(255),
  amount_paid_to_collection INT
);

CREATE TABLE hard_inquiries(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES user_information(id),
  posted VARCHAR(255),
  inq_creditor VARCHAR(255),
  account_type INT REFERENCES account_type(id)
);

CREATE TABLE payment_history(
  id SERIAL PRIMARY KEY REFERENCES account_details(id),
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

INSERT INTO account_type (account_type) VALUES 
  ('Credit Card'), 
  ('Personal Loan'),
  ('Student Loan'),
  ('Auto Loan'),
  ('Home Loan'),
  ('Business Loan');

INSERT INTO collection (collection) VALUES 
  ('No Collection Record'), 
  ('In Collection');

INSERT INTO current_status (current_status) VALUES 
  ('Open'), 
  ('Closed');

INSERT INTO us_credit_score (state, state_average_score) VALUES
  ('Alabama', 656),
  ('Alaska', 674),
  ('Arizona', 674),
  ('Arkansas', 653),
  ('California', 677),
  ('Colorado', 689),
  ('Connecticut', 684),
  ('DC', 661),
  ('Delaware', 665),
  ('Florida', 669),
  ('Georgia', 644),
  ('Hawaii', 691),
  ('Idaho', 680),
  ('Illinois', 679),
  ('Indiana', 666),
  ('Iowa', 686),
  ('Kansas', 674),
  ('Kentucky', 656),
  ('Louisiana', 650),
  ('Maine', 671),
  ('Maryland', 667),
  ('Massachusetts', 694),
  ('Michigan', 678),
  ('Minnesota', 707),
  ('Mississipi', 642),
  ('Missouri', 674),
  ('Montana', 684),
  ('Nebraska', 692),
  ('Nevada', 658),
  ('New Hampshire', 690),
  ('New Jersey', 671),
  ('New Mexico', 648),
  ('New York', 692),
  ('North Carolina', 660),
  ('North Dakota', 700),
  ('Ohio', 679),
  ('Oklahoma', 660),
  ('Oregon', 682),
  ('Pennsylvania', 691),
  ('Rhode Island', 672),
  ('South Dakota', 655),
  ('Tennesse', 666),
  ('Texas', 657),
  ('Utah', 678),
  ('Vermont', 677),
  ('Virginia', 679),
  ('Washington', 682),
  ('West Virginia', 660),
  ('Wiscosing', 698),
  ('Wyoming', 671);

INSERT INTO genders (gender) VALUES 
  ('Male'), 
  ('Female');

INSERT INTO marital_status (marital_status) VALUES 
  ('Single'), 
  ('Married'),
  ('Divorced'),
  ('Widowed');

INSERT INTO public_record (public_record) VALUES 
  ('No Public Record'), 
  ('Have Public Record');

INSERT INTO user_information (first_name, middle_name, last_name, date_of_birth, place_of_birth, gender, marital_status, annual_household_income, street_address, apartment, city, state, zip_code, telephone_number, email, public_record, user_credit_score) VALUES 
  ('Alex', 'Daniel', 'Rivera', '1-18-1979', 'New York, NY', 1, 2, 72000, '7601 River Road', '2A', 'North Bergen', 31, '07047', '917-123-4567', 'alex_rivera@gmail.com', 1, 710), 
  ('Sofia', 'Isabelle', 'Monroe', '10-25-1984', 'San Francisco, CA', 2, 1, 94000, '6670 Doriana Street', '101', 'San Diego', 5, '92139', '415-789-1234', 'sofia_monroe@gmail.com', 1, 590);

INSERT INTO account_details (user_id, account_type, opened, creditor, credit_limit, credit_use, current_status, collection, collection_agency, amount_paid_to_collection) VALUES 
  (1, 1, '12-3-2008', 'American Express', 5000, 3490, 1, 1, null, null),
  (1, 2, '4-10-2017', 'JP Morgan Chase', 10000, 9400, 1, 1, null, null),
  (1, 1, '7-29-2010', 'Walmart Credit Card, Synchrony Bank', 4500, 403, 1, 1, null, null),
  (1, 1, '11-5-2009', 'CitiBank Credit Card', 8000, 2334, 1, 1, null, null),
  (1, 2, '10-1-2015', 'JP Morgan Chase', 9500, 1290, 1, 1, null, null),
  (1, 1, '5-12-2001', 'GE Capital Retail Bank', 3200, 203, 1, 1, null, null),
  (2, 4, '3-12-2014', 'Bank of America', 15000, 9500, 1, 1, null, null),
  (1, 1, '2-27-2011', 'PayPal Platinum MasterCard, Synchrony Bank', 6500, 3490, 1, 1, null, null),
  (1, 5, '3-25-2009', 'Bank of America', 50000, 9721, 1, 1, null, null),
  (1, 1, '2-11-2012', 'JetBlue MasterCard, Barclaycard', 4000, 2323, 1, 1, null, null),
  (1, 1, '11-3-2015', 'JP Morgan Chase', 6400, 904, 1, 1, null, null),
  (2, 3, '1-18-2011', 'FedLoan Servicing', 4200, 3420, 1, 1, null, null),
  (2, 1, '5-20-2010', 'Discover', 2500, 1850, 2, 2, 'ABC Collection Agency', 220),
  (2, 3, '9-22-2009', 'FedLoan Servicing', 4500, 3595, 2, 1, null, null),
  (2, 1, '2-09-2015', 'JCPenney, Synchrony Bank', 1000, 398, 1, 1, null, null),
  (2, 1, '4-11-2014', 'Target Credit Card, TD Bank USA', 2300, 292, 1, 1, null, null),
  (2, 1, '11-5-2009', 'CitiBank Credit Card', 2500, 1904, 1, 1, null, null),
  (2, 2, '3-1-2016', 'JP Morgan Chase', 5000, 1500, 1, 1, null, null),
  (2, 1, '6-23-2015', 'Capital One', 7100, 5232, 2, 2, 'XYZ Collection Agency', 1350),
  (2, 4, '9-17-2016', 'Bank of America', 12000, 8300, 1, 1, null, null),
  (2, 1, '6-20-2008', 'Best Buy Visa, Cibibank', 2500, 403, 1, 1, null, null);

INSERT INTO payment_history (jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec) VALUES
  (TRUE, FALSE, TRUE, TRUE, TRUE, TRUE, FALSE, TRUE, TRUE, TRUE, TRUE, TRUE),
  (null, null, null, null, null, null, null, null, null, null, TRUE, TRUE),
  (TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE),
  (TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE),
  (TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, FALSE, TRUE, TRUE, TRUE, TRUE, TRUE),
  (TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE),
  (TRUE, TRUE, TRUE, TRUE, TRUE, FALSE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE),
  (TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE),
  (TRUE, TRUE, FALSE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE),
  (TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE),
  (TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, FALSE, FALSE, TRUE, TRUE, TRUE, TRUE),
  (TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, FALSE, TRUE, TRUE, TRUE),
  (TRUE, TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE),
  (TRUE, TRUE, TRUE, TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, FALSE),
  (FALSE, TRUE, FALSE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE),
  (TRUE, TRUE, TRUE, TRUE, FALSE, FALSE, TRUE, FALSE, TRUE, TRUE, TRUE, FALSE),
  (null, null, null, null, null, null, null, TRUE, TRUE, TRUE, TRUE, TRUE),
  (TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE),
  (TRUE, TRUE, TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE),
  (TRUE, TRUE, TRUE, TRUE, TRUE, FALSE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE),
  (TRUE, TRUE, FALSE, TRUE, TRUE, TRUE, TRUE, TRUE, FALSE, TRUE, TRUE, TRUE);

INSERT INTO hard_inquiries (user_id, posted, inq_creditor, account_type) VALUES
  (1, '10-30-2016', 'Wells Fargo', 4),
  (2, '12-19-2016', 'JP Morgan Chase', 1),
  (2, '1-5-2017', 'Discover', 2),
  (2, '4-20-2017', 'HSBC', 5);