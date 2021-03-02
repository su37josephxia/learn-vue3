var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

let i = 0;
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function (socket) {
  console.log("a user connected");

  //响应某用户发送消息
  socket.on("update", function (data) {
    console.log("update:" + data);
    i = data
    // 广播给所有人
    io.emit("data", data);
  });
  setInterval(() => {
    io.emit("data", i++);
  }, 1000);

  socket.on("disconnect", function () {
    console.log("user disconnected");
  });
});

http.listen(3000, function () {
  console.log("listening on *:3000");
});
