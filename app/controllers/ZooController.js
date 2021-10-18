console.log('ZooController connected');
import {
  Albatross
} from "../models/Albatross.js"

import {
  Bee
} from "../models/Bee.js";

import {
  Cat
} from "../models/Cat.js";

import {
  Duck
} from "../models/Duck.js";

import {
  Elephant
} from "../models/Elephant.js";

import {
  Frog
} from "../models/Frog.js";

import {
  Goat
} from "../models/Goat.js";

import {
  Hawk
} from "../models/Hawk.js";

import {
  Inchworm
} from "../models/Inchworm.js";

import {
  Jellyfish
} from "../models/Jellyfish.js";

import {
  Koala
} from "../models/Koala.js";

import {
  Lion
} from "../models/Lion.js";

import {
  Monkey
} from "../models/Monkey.js";

import {
  Narwhal
} from "../models/Narwhal.js";

import {
  Octopus
} from "../models/Octopus.js";

import {
  Peacock
} from "../models/Peacock.js";

import {
  Quail
} from "../models/Quail.js";

import {
  Raccoon
} from "../models/Raccoon.js";

import {
  Shark
} from "../models/Shark.js";

import {
  SlothBear
} from "../models/SlothBear.js";

import {
  Tiger
} from "../models/Tiger.js";

import {
  Ungulate
} from "../models/Ungulate.js";

import {
  Vulture
} from "../models/Vulture.js";

import {
  Walrus
} from "../models/Walrus.js";

import {
  XrayFish
} from "../models/XrayFish.js";

import {
  Yak
} from "../models/Yak.js";

import {
  Zebra
} from "../models/Zebra.js";

let _animals = {

  ////////////////////// type, name, weight, features, snack
  Adam: new Albatross("Albatross", "Adam", 20, "loud", "fruit"),
  Barry: new Bee("Bee", "Barry", 0.1, "sharp", "honey"),
  Cal: new Cat("Cat", "Cal", 7, "soft", "milk"),
  Darryl: new Duck("Duck", "Darryl", 2, "loud", "bread"),
  Egbert: new Elephant("Elephant", "Egbert", 2000, "thirsty", "peanuts"),
  Frank: new Frog("Frog", "Frank", 0.2, "hoppy", "flies"),
  Gary: new Goat("Goat", "Gary", 20, "kicky", "trash"),
  Harry: new Hawk("Hawk", "Harry", 5, "feathers", "rats"),
  Ivan: new Inchworm("Inchworm", "Ivan", 0.01, "slimy", "plants"),
  Jerry: new Jellyfish("Jellyfish", "Jerry", 0.01, "stings", "plankton"),
  Karen: new Koala("Koala", "Karen", 10, "hands", "leaves"),
  Larry: new Lion("Lion", "Larry", 300, "mane", "meat"),
  Marvin: new Monkey("Monkey", "Marvin", 25, "fingers", "oranges"),
  Nigel: new Narwhal("Narwhal", "Nigel", 250, "flippers", "fish"),
  Oscar: new Octopus("Octopus", "Oscar", 5, "tentacles", "fish"),
  Pete: new Peacock("Peacock", "Pete", 25, "claws", "seeds"),
  Q: new Quail("Quail", "Q", 5, "feathers", "seeds"),
  Rachel: new Raccoon("Raccoon", "Rachel", 5, "hands", "trash"),
  Sharon: new Shark("Shark", "Sharon", 500, "teefs", "prey"),
  Sam: new SlothBear("SlothBear", "Sam", 300, "furry", "meat"),
  Tim: new Tiger("Tiger", "Tim", 200, "scary", "meat"),
  Ultra: new Ungulate("Ungulate", "Ultra", 100, "hoofs", "grass"),
  Vernon: new Vulture("Vulture", "Vernon", 25, "claws", "carcass"),
  Walter: new Walrus("Walrus", "Walter", 70, "tusks", "Apples"),
  Will: new Walrus("Walrus", "Will", 100, "flippers", "Cheez-itz"),
  Dave: new XrayFish("XrayFish", "Dave", 5, "stings", "McDonalds"),
  Yoyo: new Yak("Yak", "Yoyo", 500, "stinks", "grass"),
  Donald: new Zebra("Zebra", "Donald", 250, "stripes", "grass"),

}

function _draw() {
  let template = ''

  for (let key in _animals) {
    let animal = _animals[key]
    template += `<li class="p-2"> ${animal.name} the ${animal.type} likes ${animal.snack}, and has the feature "${animal.features}"</li>`

  }
  document.getElementById('animals').innerHTML = template
}



export class ZooController {
  constructor() {
    console.log('I am ZooController');
    _draw()
  }

  testZoo() {
    console.log("test");
  }
}