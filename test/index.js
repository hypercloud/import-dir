'use strict';

let importDir = require('..');

let modules = importDir('./test/modules');

modules.moduleA();
modules.moduleB.run();
modules.moduleC.run();
