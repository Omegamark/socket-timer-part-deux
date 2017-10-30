import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");
// *** I'm not entirely sure what the cb (callback) function is doing here. Leaving for now simply because the app works.
function subscribeToTwitter(cb) {
  socket.on("twitterStream", tweet => cb(null, tweet));
  socket.emit("subscribeToTwitter", 1000);
}
export { subscribeToTwitter };
