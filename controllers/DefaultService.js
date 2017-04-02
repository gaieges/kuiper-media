'use strict';

exports.addEntry = function(args, res, next) {
  /**
   * Creates a new media entry in the db
   *
   * entry Entry Entry to add to the database
   * returns entry
   **/
  var examples = {};
  examples['application/json'] = {
  "metadata" : [ {
    "value" : "aeiou",
    "key" : "aeiou"
  } ],
  "reviews" : [ {
    "rating" : "aeiou",
    "comment" : "aeiou",
    "when" : "aeiou",
    "who" : "aeiou"
  } ],
  "links" : [ {
    "format" : "aeiou",
    "description" : "aeiou",
    "type" : "aeiou",
    "url" : "aeiou"
  } ],
  "_id" : "aeiou",
  "title" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.findMedia = function(args, res, next) {
  /**
   * Return or search through all media entries in the system, in a paginated fashion.
   *
   * search List string to search through all media entries for (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "metadata" : [ {
    "value" : "aeiou",
    "key" : "aeiou"
  } ],
  "reviews" : [ {
    "rating" : "aeiou",
    "comment" : "aeiou",
    "when" : "aeiou",
    "who" : "aeiou"
  } ],
  "links" : [ {
    "format" : "aeiou",
    "description" : "aeiou",
    "type" : "aeiou",
    "url" : "aeiou"
  } ],
  "_id" : "aeiou",
  "title" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getEntry = function(args, res, next) {
  /**
   * get individual media item entry. will only return the latest version of this media id entry
   *
   * _id String ID to lookup
   * returns entry
   **/
  var examples = {};
  examples['application/json'] = {
  "metadata" : [ {
    "value" : "aeiou",
    "key" : "aeiou"
  } ],
  "reviews" : [ {
    "rating" : "aeiou",
    "comment" : "aeiou",
    "when" : "aeiou",
    "who" : "aeiou"
  } ],
  "links" : [ {
    "format" : "aeiou",
    "description" : "aeiou",
    "type" : "aeiou",
    "url" : "aeiou"
  } ],
  "_id" : "aeiou",
  "title" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.updateEntryLinks = function(args, res, next) {
  /**
   * adds links to an existing media entry
   *
   * _id String Id to add links to
   * link Link new link to add (optional)
   * returns entry
   **/
  var examples = {};
  examples['application/json'] = {
  "metadata" : [ {
    "value" : "aeiou",
    "key" : "aeiou"
  } ],
  "reviews" : [ {
    "rating" : "aeiou",
    "comment" : "aeiou",
    "when" : "aeiou",
    "who" : "aeiou"
  } ],
  "links" : [ {
    "format" : "aeiou",
    "description" : "aeiou",
    "type" : "aeiou",
    "url" : "aeiou"
  } ],
  "_id" : "aeiou",
  "title" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.updateEntryReviews = function(args, res, next) {
  /**
   * adds reviews to existing media entry
   *
   * _id String ID to update
   * review Review new review to add (optional)
   * returns entry
   **/
  var examples = {};
  examples['application/json'] = {
  "metadata" : [ {
    "value" : "aeiou",
    "key" : "aeiou"
  } ],
  "reviews" : [ {
    "rating" : "aeiou",
    "comment" : "aeiou",
    "when" : "aeiou",
    "who" : "aeiou"
  } ],
  "links" : [ {
    "format" : "aeiou",
    "description" : "aeiou",
    "type" : "aeiou",
    "url" : "aeiou"
  } ],
  "_id" : "aeiou",
  "title" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

