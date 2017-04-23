'use strict';

const express      = require('express');
const app          = express();
const swaggerTools = require('swagger-tools');
const jsyaml       = require('js-yaml');
const fs           = require('fs');
const IPFS         = require('ipfs')
const OrbitDB      = require('orbit-db')
const bodyParser   = require('body-parser')
const compression  = require('compression');
const errorHandler = require('errorhandler');
const morgan       = require('morgan')

const serverPort = 3000;
const swaggerDoc = jsyaml.safeLoad(fs.readFileSync('./api/swagger.yml', 'utf8'));





const ipfs = new IPFS({
  repo: process.env.IPFS_PATH || path.join( __dirname , 'ipfs-kuiper' ),
  init: true,
  start: true
});

const orbitdb = new OrbitDB( ipfs );

ipfs.on('ready', (e) => {
  const docstore = orbitdb.docstore( 'kuiper-media' );

  docstore.events.on('write',(dbname, hash, entry) => {
    console.log('writing: %s', JSON.stringify(entry));
  })

  app.use(function(req, res, next) {
    req.orbitdb = orbitdb;
    req.docstore = docstore
    req.ipfs = ipfs;

    next();
  });

  // gzip/deflate outgoing responses
  app.use(compression());

  // parse urlencoded request bodies into req.body
  app.use(bodyParser.json());

  // console logger
  app.use(morgan('tiny'));

  // Error handler
  app.use( (err, req, res, next) => {
    console.error( err.stack );
    res.status(500).json(err);
  });



  // Initialize the Swagger middleware
  swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter({
      swaggerUi: '/swagger.json',
      controllers: './controllers',
      useStubs: false
    }));

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi());

    // Start the server
    app.listen(serverPort, function () {
      console.log('server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
      console.log('documentation is available on http://localhost:%d/docs', serverPort);
    });
  });
});


ipfs.on('error', (e) => {
  endProcess( Error(e) );
});



// Adds hooks for Docker CTRL-C and Stop
function endProcess(reason) {
  // eslint-disable-next-line no-console
  console.log("Quitting... Reason: %s", reason );

  ipfs.stop( () => {
    process.exit()
  });
}


['SIGINT', 'SIGTERM', 'SIGUSR2','SIGUSR1' ].forEach( (signal) => {
  process.on(signal, () => {
    endProcess(signal);
  });
});
