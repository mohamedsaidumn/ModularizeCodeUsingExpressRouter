import Server from "./server";
/**
 * Start the application and all services.
 */

//Start the application
class App {
  server: Server;
  constructor() {
    this.server = new Server();
  }

  start(): void {
    this.server.start();
  }
}

let app = new App();
app.start();
