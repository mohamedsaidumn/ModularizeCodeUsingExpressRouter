import express, { Express, Request, Response } from "express";
import services from "../services";

class Server {
  server: Express;
  constructor() {
    this.server = express();
    this.addServices();
  }

  //   middlewares() {
  //     this.server.use(express.json());
  //   }

  addServices(): void {
    this.server.use(services);
  }

  start(): void {
    this.server.listen(9010, () => {
      console.log("Server listening on Port", 9010);
    });
  }
}

export default Server;
