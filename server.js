const io = require("socket.io")();
const port = 8000;
const twitterClient = require("./twitter");

// Get this to console.log the twitter feed.
var twitterStream;
var catPic = "";
var catPicArray = [];

io.on("connection", client => {
  tweetCall();
  client.on("subscribeToTimer", interval => {
    console.log("client is subscribing to timer with interval", interval);
    setInterval(() => {
      client.emit("twitterStream", twitterStream);
      // console.log("YO I'M A TWITTERSTREAM", twitterStream);
      // **** May not need this statment here. ****
      if (twitterStream.entities.media) {
        console.log(
          "I'm a pic url!!!!!!!",
          twitterStream.entities.media[0].media_url
        );
      }

      // This is where the interval variable is being set, in this case it is 5000ms || interval = 1000ms by default.
    }, 5000);
  });
});

// If statement to check for cat pic urls

// if (!catPicArray.includes(catPic)) {
//   catPicArray.push(catPic);
//   console.log("HEY CATPICARRAY!!!!!!", catPicArray);
// }

io.listen(port);
console.log("sanity check ", port);

// Functions for socket twitter api calls
function tweetCall() {
  stream = twitterClient.stream("statuses/filter", {
    track: "#cats,#kittens,#meow,#cutecats,#instacats,#catsofinstagram"
  });
  stream.on("data", function(event) {
    // console.log("this is event", event);
    // console.log("this event.text", event.text);
    twitterStream = event;

    // if (event.entities.media[0].media_url) {
    //   catPic = event.entities.media[0].media_url;
    //   if (catPicArray.includes(catPic)) {
    //     console.log("do nothing");
    //   } else {
    //     catPicArray.push(catPic);
    //   }
    // }
    // console.log(catPicArray);
    // console.log("I is a CAT PIC!@!!!", catPic);

    // console.log("this is stream", twitterStream);
  });
}
