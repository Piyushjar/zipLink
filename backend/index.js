const express = require("express");
const app = express();
const cors = require("cors");
const connectToDatabase = require("./database/connection");
connectToDatabase();

app.use(
  cors({
    credentials: true,
    origin: process.env.CORS_URL,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running!");
});

app.use("/short", require("./routes/shortUrl"));
app.use("/", require("./routes/visitUrl"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`zipLink listening on ${port}`);
});
