require('dotenv').config();
const dotenvPlugin = require('cypress-dotenv');

module.exports = (on, config) => {
  config = dotenvPlugin(config);
  config.baseUrl = process.env.BASE_URL;
  config.testEmail = process.env.TEST_EMAIL;
  config.testPassword = process.env.TEST_PASSWORD;

  return config;
}
