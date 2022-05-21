import http from "http";
import express from "express";
import router from "./routes.js";
import cors from "cors";
import database from "./database.config.js";

//Connect to database
database.connect();

const app = express();

app.use(cors());
app.use("/images", express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

const myServer = http.createServer(app);
myServer.listen(process.env.PORT || 9000);
