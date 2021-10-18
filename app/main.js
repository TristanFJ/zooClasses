console.log("main.js connected");

import {
  ZooController
} from "./controllers/ZooController.js";

let zooController = new ZooController()

window['zooController'] = zooController