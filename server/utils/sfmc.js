
const submitToSFMC = async (jsonPayload) => {

  // Check for .env file in development
  if (process.env.NODE_ENV !== "production") {
    const dotenv = require("dotenv");
    dotenv.config.configPath = "./.env";
    const result = dotenv.config();
    if (result.error) {
      throw result.error;
    }
  }

  // create base url from SFMC_AUTH_URL, the env variable may have a path after the URL, we don't want that
  let SFMC_AUTH_BASE_URL = process.env.SFMC_AUTH_BASE_URL;
  if (SFMC_AUTH_BASE_URL === undefined) {
    SFMC_AUTH_BASE_URL = process.env.SFMC_AUTH_URL;
    SFMC_AUTH_BASE_URL = `${SFMC_AUTH_BASE_URL.substring(0, SFMC_AUTH_BASE_URL.indexOf(".com"))}.com/`; // split('/')[3] + '/';
  }

  const SDK = require('sfmc-sdk');

  sfmc = new SDK(
    {
        client_id: process.env.SFMC_CLIENT_ID,
        client_secret: process.env.SFMC_CLIENT_SECRET,
        auth_url: SFMC_AUTH_BASE_URL,
        account_id: process.env.SFMC_BUSINESS_ID,
        grant_type: 'client_credentials',
    },
    {
        eventHandlers: {
            onLoop: (type, accumulator) => console.log('Looping', type, accumlator.length),
            onRefresh: (options) => console.log('RefreshingToken.', options),
            logRequest: (req) => console.log(req),
            logResponse: (res) => console.log(res),
            onConnectionError: (ex, remainingAttempts) => console.log(ex.code, remainingAttempts),
        },
        requestAttempts : 1,
        retryOnConnectionError: true
    }
  );

  const restResponse = await sfmc.rest.post(`/hub/v1/dataevents/key:${process.env.SFMC_EXTERNAL_KEY}/rowset`, jsonPayload);
  
  // Check if the date in the response is the same as the date we sent and return promise. This comparison is how we know the SFMC POST worked
  return new Promise((resolve, reject) => {
    const datesMatch = jsonPayload[0].keys.updatedDate === restResponse[0].values.updatedDate;

    if (datesMatch) {
      resolve("Dates are the same.");
    } else {
      reject("Dates are different.");
    }
  });
}

module.exports = submitToSFMC;