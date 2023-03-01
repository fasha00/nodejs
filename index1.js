const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Goood Nig22d121ht");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
