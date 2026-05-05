// @ts-ignore: missing type declarations for express
import express from "express";
import router from "./routes";
// @ts-ignore: missing type declarations for cors
import cors from "cors";

function createApp() {
  const app = express();

  app.use(express.json());
  app.use("/api", router);

  const corsOptions = {
    origin: `http://localhost:${process.env.PORT || 3000}`,
    methods: "GET,PATCH,POST,DELETE",
  };

  app.use(cors(corsOptions));

  return app;
}

export default createApp;
