const express = require("express");
const app = express();
const cors = require("cors");
const connectToDatabase = require("./database/connection");
connectToDatabase();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.redirect("https://urlshortner.bitwiz.me");
});

app.use("/short", require("./routes/shortUrl"));
app.use("/", require("./routes/visitUrl"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`zipLink listening on ${port}`);
});
