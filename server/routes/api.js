/* eslint-disable require-jsdoc */

// Check for .env file in development
if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");
  dotenv.config.configPath = "./.env";
  const result = dotenv.config();
  if (result.error) {
    throw result.error;
  }
}

const siteName = "RethinkBronchiectasis.com";

const express = require("express");
const mysql = require('mysql');
const config = require('../config/database');
const getDateAndTime = require("../utils");
const fs = require('fs');
const router = express.Router();
const Sendgrid = require('../utils/sendgrid');

////////////////////////////////////////////////
// UNSUBSCRIBE

router.post("/unsubscribe", function(req, res) {
  const email = req.body.email;
  console.log(`POST /unsubscribe, email = ${email}`);

  // req.body.topics is an array of strings, convert to a string and use | as delimiter
  const topics = req.body.topics ? req.body.topics.join('|') : '';

  // SUBMIT TO SFMC
  const dateNowFormatted = () => {
    function pad2(n) { return n < 10 ? '0' + n : n }
    var date = new Date();
    const dateTime = date.getFullYear().toString() + '-' + pad2(date.getMonth() + 1) + '-' + pad2( date.getDate()) + ' ' + pad2( date.getHours() ) + ':' + pad2( date.getMinutes() ) + ':' + pad2( date.getSeconds() );
    return dateTime;
  }

  const jsonPayload = [
    {
      "keys": {
        "emailAddress": `${email}`,
        "updatedDate": `${dateNowFormatted()}`,
      },
      "values": {
        "emailAddress": `${email}`,
        "updatedDate": `${dateNowFormatted()}`,
        "BrensoConsent":"true",
        "UnsubscribeReason": `${topics}`
      }
    }
  ]

  const submitToSFMC = require('../utils/sfmc');

  submitToSFMC(jsonPayload)
    .then((result) => {
      console.log(`successful sfmc api request for ${email}, result = ${result}`);
      res.send({ 
        success: true
      });
    })
    .catch((error) => {
      console.log(`error in sfmc api request = ${error}`);
      const mailer = new Sendgrid();
      mailer.send(`${siteName} /unsubscribe SFMC API error`, `error = ${error}`);
      res.send({ 
        success: false,
        message: `error in sfmc api request = ${error}`
      });
    });

});

////////////////////////////////////////////////
// SIGNUP

async function getLastSignupId(connection) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT id FROM signups ORDER BY id DESC LIMIT 1';
    connection.query(query, function (error, results, fields) {
      if (error) {
        resolve("0");
      } else {
        
        if (results.length > 0) {
          const lastId = results[0].id;
          resolve(lastId);
        } else {
          resolve("0"); // or resolve an appropriate default value
        }
      }
    });
  });
}

router.post("/signup", function(req, res) {
  console.log(`POST /signup`);

  // if req.body is an empty object, return
  if (Object.keys(req.body).length === 0) {
    console.log(`req.body is empty, problem with data being submit`);
    const mailer = new Sendgrid();
    mailer.send(`${siteName} /signup api call from website error`, `error = req.body is empty, problem with data being submit`);
    res.send({
      success: false,
      message: `req.body is empty, problem with data being submit`
    });
    return;
  }

  const connection = mysql.createConnection(config);
  
  // Call the asynchronous function and console log the result
  getLastSignupId(connection).then((lastSignupId) => {
    const firstName = req.body.first;
    
    const dateTime = getDateAndTime();
    
    // if specialty is Other and we have a value for specify-specialty, use that value
    const specialty = (req.body.specialty === 'Other' && req.body.specify_specialty) ? req.body.specify_specialty : req.body.specialty;

    // req.body.topics is an array of strings, convert to a string and use | as delimiter
    const topics = req.body.topics ? req.body.topics.join('|') : '';
    
    let sql = `INSERT INTO signups (Source_ID, Source_System, First_Name, Last_Name, Email, Specialty, Address_Line_1, Address_Line_2, City, State, Zip, SubmittedDate, SurveyAnswer)
    VALUES ('${1000000000 + lastSignupId}', 'be_web_regn', '${req.body.first}', '${req.body.last}', '${req.body.email}', '${specialty}', '${req.body.practice_1}', '${req.body.practice_2}', '${req.body.city}', '${req.body.state}', '${req.body.zipcode}', '${dateTime}', '${topics}')`;
    
    // execute the insert statment
    connection.query(sql, function (error, results, fields) {

      if (error) {
        console.log(`error in mysql query: ${error}`);
        const mailer = new Sendgrid();
        mailer.send(`${siteName} /signup mysql error`, `error = ${error}`);
        res.send({ 
          success: false,
          message: `error in mysql query: ${error}`
        });
        return false;
      } else {
        res.send({ 
          success: true
        });
      }
    });
  }).catch((error) => {
    console.error(error);
    const mailer = new Sendgrid();
    mailer.send(`${siteName} /signup getLastSignupId error`, `error = ${error}`);
    res.send({ 
      success: false,
      message: `getLastSignupId error: ${error}`
    });
  }).finally(() => {
    // Close the connection to the database
    try {connection.end();} catch (error) {console.log(`error closing connection: ${error}`)}
  });
});

////////////////////////////////////////////////
// SURVEY

router.post("/survey", function(req, res) {
  console.log(`POST /survey`);
  
  // req.body.topics is an array of strings, convert to a string and use | as delimiter
  const topics = req.body.topics ? req.body.topics.join('|') : '';
  
  // temporarily save to unsubscribe database
  let sql = `INSERT INTO survey (topics, updatedDate)
    VALUES ('${topics}', '${new Date()}');`;

  // execute the insert statment
  const connection = mysql.createConnection(config);
  connection.query(sql, function (error, results, fields) {
    if (error) {
      const mailer = new Sendgrid();
      mailer.send(`${siteName} /survey mysql error`, `error = ${error}`);
      res.send({ 
        success: false,
        message: `error in mysql survey query: ${error}`
      });
      try {connection.end();} catch (error) {console.log(`error closing connection: ${error}`)}
      return false;
    } else {
      res.send({ 
        success: true
      });
      try {connection.end();} catch (error) {console.log(`error closing connection: ${error}`)}
    }
  });
});

////////////////////////////////////////////////
// POLLS

router.post('/poll', async (req, res) => {
  try {
    const { pollID, responseID } = req.body;
    const connection = await mysql.createConnection(config);

    await connection.query(
      `INSERT INTO polls (poll_id, response_id) VALUES ('${pollID}', '${responseID}')`
    );

    const query =  `SELECT * FROM polls WHERE poll_id = ${pollID}`;
    connection.query(query, function (error, results, fields) {
      if (error) {
        res.status(500).json({ message: 'An error occurred in Poll SELECT.' });
      } else {
        res.send({
          message: "success",
          results: results
        })
      }
    });

    connection.end();
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your Poll request.' });
  }
});

module.exports = router;