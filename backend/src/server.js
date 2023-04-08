require("dotenv").config();

const app = require("./index");
const connect = require("./config/db.config");

const PORT = process.env.PORT || 7878;

app.listen(PORT, async () => {
  try {
    await connect();
    console.log("Listening on port 7878");
  } catch (error) {
    console.log("Error while connecting to database");
  }
});
