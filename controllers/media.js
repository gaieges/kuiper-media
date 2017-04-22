'use strict';

var url = require('url');



module.exports.addEntry = function addEntry (req, res, next) {
  /**
   * Creates a new media entry in the db
   *
   * entry Entry Entry to add to the database
   * returns entry
   **/

   req.docstore.put( req.body ).then((hash) => {
     res.json(hash);
   })
   .catch((err) => {
     console.log("caught error")
     next(err);
   });
};



module.exports.findMedia = function findMedia (req, res, next) {
  /**
   * Return or search through all media entries in the system, in a paginated fashion.
   *
   * search List string to search through all media entries for (optional)
   * returns List
   **/
  
  res.json(
    req.docstore.query((e) => true)
  );
};



module.exports.getEntry = function getEntry (req, res, next) {
  /**
   * get individual media item entry. will only return the latest version of this media id entry
   *
   * _id String ID to lookup
   * returns entry
   **/

  const id = req.swagger.params._id.value;
  console.log('Getting entry id: %s', id );

  res.json( req.docstore.get(id) );
};



module.exports.updateEntryLinks = function updateEntryLinks (req, res, next) {
  /**
   * adds links to an existing media entry
   *
   * _id String Id to add links to
   * link Link new link to add (optional)
   * returns entry
   **/


};



module.exports.updateEntryReviews = function updateEntryReviews (req, res, next) {
  /**
   * adds reviews to existing media entry
   *
   * _id String ID to update
   * review Review new review to add (optional)
   * returns entry
   **/


};
