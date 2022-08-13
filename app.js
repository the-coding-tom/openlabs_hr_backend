import http from "http";
import express from "express";
import router from "./routes.js";
import cors from "cors";
import database from "./database.config.js";
import axios from "axios";

//Connect to database
database.connect();

const app = express();

app.use(cors());
app.use("/images", express.static("public"));
app.use(express.urlencoded({ extended: false })); // https://www.monkeychops.com
app.use(express.json());
app.use(router);

const myServer = http.createServer(app);
myServer.listen(process.env.PORT || 9000);

let email = "tom.kensah@gmail.com";
let password = "password";

async function makeRequest() {
  try {
    // code to try...
    const response = await axios.post("http://localhost:9090/auth/login", {
      email,
      password,
    });

    console.log(
      `This is the data provided: ${JSON.stringify(response.data.data)}`
    );
  } catch (error) {
    // what should I do about the error...
    console.log(error);
  }
}

makeRequest();
