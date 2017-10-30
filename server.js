const io = require("socket.io")();
const port = 8000;
const twitterClient = require("./twitter");
var twitterStream;
var catPic = "";
var catPicArray = [];
var clients = 0;

io.on("connection", socket => {
  clients++;
  console.log("there are " + clients + " users connected");
  tweetCall();
  socket.on("subscribeToTwitter", interval => {
    console.log("client is subscribing to timer with interval", interval);
    setInterval(() => {
      io.sockets.emit("twitterStream", twitterStream);
    }, 1000);
  });
  socket.on("disconnect", () => {
    clients--;
    console.log("there are " + clients + " users connected");
  });
  socket.on("error", err => {
    console.error(err);
  });
});

io.listen(port);
console.log("sanity check ", port);

// Function for socket twitter api calls
function tweetCall() {
  stream = twitterClient.stream("statuses/filter", {
    track: "#cats,#kittens,#meow,#cutecats,#instacats,#catsofinstagram"
  });
  stream.on("data", function(event) {
    twitterStream = event;
  });
}
