/**
 * @author    Junxiang Wei {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2015, Junxiang Wei
 * @license   MIT
 */
'use strict';

let path = require('path');
let requireDir = require('require-dir');

// make a note of the calling file's path, so that we can resolve relative
// paths. this only works if a fresh version of this module is run on every
// require(), so important: we clear the require() cache each time!
const parent = module.parent;
const parentFile = parent.filename;
const parentDir = path.dirname(parentFile);
delete require.cache[__filename];

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj }; 
}

function importDir(dir, opts) {
	// default arguments:
    dir = dir || '.';
    opts = opts || {};

    // resolve the path to an absolute one:
    dir = path.resolve(parentDir, dir);

	let required = requireDir(dir, opts);
	for (let moduleName in required) {
		let module = required[moduleName];
		let _module = _interopRequireDefault(module);
		required[moduleName] = _module.default;
	}
	return required;
}

module.exports = importDir;
