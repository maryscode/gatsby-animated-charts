/*
SourceID is the unique identifier for the record in the source system, it starts at 10000000 and increments by 1 for each record
Source_System is the name of the source system, it defaults to "be_web_regn" for brenso
SubmittedDate is the date and time the record was submitted, it is in the format YYYYMMDDHHMMSS

NOTE: this SQL statement may not work in production, it's here as reference only
*/

CREATE TABLE signups (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Source_ID INT NOT NULL,
    Source_System VARCHAR(20) NOT NULL,
    First_Name VARCHAR(255) NOT NULL,
    Last_Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Specialty VARCHAR(255) NOT NULL,
    Address_Line_1 VARCHAR(255) NOT NULL,
    Address_Line_2 VARCHAR(255) NOT NULL,
    City VARCHAR(255) NOT NULL,
    State VARCHAR(80) NOT NULL,
    Zip VARCHAR(10) NOT NULL,
    SubmittedDate VARCHAR(16) NULL,
    SurveyAnswer VARCHAR(255) NOT NULL
);

/* NOTE: this SQL statement may not work in production, it's here as reference only */
CREATE TABLE survey (
    id INT AUTO_INCREMENT PRIMARY KEY,
    topics VARCHAR(512) NOT NULL,
    updatedDate VARCHAR(255) NOT NULL
)

CREATE TABLE polls (
  id INT AUTO_INCREMENT PRIMARY KEY,
  poll_id INT NOT NULL,
  response_id INT NOT NULL
)

/*
miscellaneous useful statements for testing staging DB
*/
SELECT * FROM signups
SELECT * FROM unsubscribe
SELECT * FROM survey

DELETE FROM survey LIMIT 1000000
DELETE FROM signups LIMIT 1000000
DELETE FROM unsubscribe LIMIT 1000000

/* setting up temp data for testing */
INSERT INTO signups (Source_ID, Source_System, First_Name, Last_Name, Email, Specialty, Address_Line_1, Address_Line_2, City, State, Zip, SubmittedDate, SurveyAnswer)
VALUES 
(10000000, 'be_web_regn', 'John', 'Doe', 'johndoe@example.com', 'Dentist', '123 Main St', 'Apt 4B', 'New York', 'NY', '10001', '20220307103000', 'Yes'),
(10000001, 'be_web_regn', 'Jane', 'Smith', 'janesmith@example.com', 'Pediatrician', '456 Oak St', '', 'San Francisco', 'CA', '94102', '20220307113000', 'No'),
(10000002, 'be_web_regn', 'Mike', 'Johnson', 'mikejohnson@example.com', 'Cardiologist', '789 Maple Ave', 'Suite 100', 'Los Angeles', 'CA', '90001', '20220307123000', 'Yes'),
(10000003, 'be_web_regn', 'Emily', 'Davis', 'emilydavis@example.com', 'Dermatologist', '321 Cherry Ln', '', 'Miami', 'FL', '33101', '20220307133000', 'No'),
(10000004, 'be_web_regn', 'David', 'Lee', 'davidlee@example.com', 'Orthopedic Surgeon', '555 Pine St', 'Unit 2', 'Seattle', 'WA', '98101', '20220307143000', 'Yes');