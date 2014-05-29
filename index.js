/**
 * Module dependencies
 */

var envs = require('envs');
var path = require('path');

var MANIFEST_FILE = envs('SIMPLE_ASSETS_MANIFEST', path.join(process.cwd(), 'manifest.json'));

var manifest = {};

try { manifest = require(MANIFEST_FILE); } catch (e) { };

module.exports = function(file, min) {
  file = path.normalize(file);
  if (min) file = minify(file);
  return manifest[file] || file;
};

function minify(file) {
  var ext = path.extname(file);
  if (!ext) return file;
  var base = file.slice(0, -ext.length);
  return base + '.min' + ext;
}
