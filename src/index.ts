import * as Express from "express";
const app = Express();

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(3000, () =>
  console.log("The app listening on http://localhost:3000")
);
