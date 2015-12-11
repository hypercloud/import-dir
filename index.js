/**
 * @author    Junxiang Wei {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2015, Junxiang Wei
 * @license   MIT
 */
'use strict';

let requireDir = require('require-dir');

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj }; 
}

function importDir(...args) {
	let required = requireDir(...args);
	for (let moduleName in required) {
		let module = required[moduleName];
		let _module = _interopRequireDefault(module);
		required[moduleName] = _module.default;
	}
	return required;
}

module.exports = importDir;
