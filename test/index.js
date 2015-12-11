'use strict';

let importDir = require('..');

let modules = importDir('./modules');

modules.moduleA();
modules.moduleB.run();
modules.moduleC.run();
