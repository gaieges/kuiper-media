'use strict';

const async = require('async');
const _ = require('lodash');


module.exports.getInfo = function( req, res, next ) {
  /**
   * Gets info around ipfs daemon
   *
   * returns ipfsMeta
   **/

  var response = {
    isOnline: req.ipfs.isOnline()
  };

  async.parallel([
    req.ipfs.version,
    req.ipfs.id,
    req.ipfs.swarm.peers
  ], (err, results) => {
    if(err)
      return next(err);

    res.json( _.merge( response, {
      version: results[0],
      nodeId: results[1],
      peers: _.map(results[2], (e)=> _.get(e, 'peer.id').toB58String())
    }));
  })
  

};

