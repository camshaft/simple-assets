/**
 * Module dependencies
 */

var envs = require('envs');
var path = require('path');

var MANIFEST_FILE = envs('SIMPLE_ASSETS_MANIFEST', path.join(process.cwd(), 'manifest.json'));

var manifest = {};

try { manifest = require(MANIFEST_FILE); } catch (e) { };

module.exports = function(file) {
  file = path.normalize(file);
  return manifest[file] || file;
};
