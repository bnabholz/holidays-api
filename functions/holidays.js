const data = require("../public/holiday-data.json")

exports.handler = async (event, context) => {
  const headers = { "Content-Type": "application/json" };
  if (process.env.API_KEY === event.queryStringParameters.api_key) {
    return { statusCode: 200, headers, body: JSON.stringify(data) };
  } else {
    return { statusCode: 429, headers, body: JSON.stringify({message: "Please host your own version of this API https://github.com/blairanderson/holidays-api/"}) };
  }
};
