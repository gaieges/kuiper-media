'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.addEntry = function addEntry (req, res, next) {
  Default.addEntry(req, res, next);
};

module.exports.findMedia = function findMedia (req, res, next) {
  Default.findMedia(req, res, next);
};

module.exports.getEntry = function getEntry (req, res, next) {
  Default.getEntry(req, res, next);
};

module.exports.updateEntryLinks = function updateEntryLinks (req, res, next) {
  Default.updateEntryLinks(req, res, next);
};

module.exports.updateEntryReviews = function updateEntryReviews (req, res, next) {
  Default.updateEntryReviews(req, res, next);
};
