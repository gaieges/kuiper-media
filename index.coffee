IPFS           = require('ipfs')
OrbitDB        = require('orbit-db')
express        = require('express')
bodyParser     = require('body-parser')

api_port   = 8080
app        = express();


ipfs.on('error', (e) => console.error(e))
ipfs.on('ready', (e) => {
  ipfs = new IPFS
  orbitdb = new OrbitDB ipfs

  docstore = orbitdb.docstore 'kuiper-media'

  app.listen api_port, () => {
    console.log 'We are live on ' + api_port ;
  });
})
