import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");
// *** I'm not entirely sure what the cb (callback) function is doing here. Leaving for now simply because the app works.
function subscribeToTimer(cb) {
  socket.on("twitterStream", timestamp => cb(null, timestamp));
  socket.emit("subscribeToTimer", 1000);
}
export { subscribeToTimer };
