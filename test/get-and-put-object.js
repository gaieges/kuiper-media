var IPFS = require('ipfs');

var ipfs = new IPFS({start: true, init: true})

var obj = {
  Data: new Buffer('awesome data here 123556'), 
  Links:[]
};


var meh = ipfs.on('ready', () => {
  ipfs.object.put(obj,(putErr,putNode) => { 
    if( putErr )
      return console.error(putErr)

    var hash = putNode.toJSON().multihash

    console.log("successfully put: %s", hash );

    ipfs.object.get(hash,(gotErr, gotNode) => {
      if( gotErr )
        return console.error(`cant get: ${gotErr}`)

      console.log( `successfully got: ${gotNode}` ); 
    })
  })

})
