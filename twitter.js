var Twitter = require("twitter");
require("dotenv").config();

var twitterClient = new Twitter({
  consumer_key: process.env.REACT_APP_TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.REACT_APP_CONSUMER_SECRET,
  access_token_key: process.env.REACT_APP_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.REACT_APP_ACCESS_TOKEN_SECRET
});

module.exports = twitterClient;
