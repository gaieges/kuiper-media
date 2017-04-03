'use strict';

const express      = require('express');
const app          = express();
const swaggerTools = require('swagger-tools');
const jsyaml       = require('js-yaml');
const fs           = require('fs');
const IPFS         = require('ipfs-daemon/src/ipfs-node-daemon')
const OrbitDB      = require('orbit-db')
const bodyParser   = require('body-parser')
const compression  = require('compression');
const errorHandler = require('errorhandler');
const morgan       = require('morgan')

const serverPort = 8080;





const ipfs = new IPFS();

ipfs.on('error', (e) => {
  throw new Error(e);
});


ipfs.on('ready', (e) => {
  const orbitdb = new OrbitDB( ipfs );
  const docstore = orbitdb.docstore( 'kuiper-media' );

  docstore.events.on('write',(dbname, hash, entry) => {
    console.log('writing: %s', JSON.stringify(entry));
  })

  app.use(function(req, res, next) {
    req.orbitdb = docstore;
    next();
  });

  // gzip/deflate outgoing responses
  app.use(compression());

  // parse urlencoded request bodies into req.body
  app.use(bodyParser.json());

  // console logger
  app.use(morgan('tiny'));



  const swaggerOptions = {
    swaggerUi: '/swagger.json',
    controllers: './controllers',
    useStubs: false
  };

  const spec = fs.readFileSync('./api/swagger.yml', 'utf8');
  const swaggerDoc = jsyaml.safeLoad(spec);


  // Initialize the Swagger middleware
  swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(swaggerOptions));

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi());

    // Error handler
    app.use( (err, req, res, next) => {
      console.error( err.stack );
      res.status(500).json(err);
    })

    // Start the server
    app.listen(serverPort, function () {
      console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
      console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
    });
  });
})



// Adds hooks for Docker CTRL-C and Stop
function endProcess(reason) {
  // eslint-disable-next-line no-console
  console.log(`Quitting... Reason: ${reason}`);
  process.exit();
}

['SIGINT', 'SIGTERM' ].forEach( (signal) => {
  process.on(signal, () => {
    endProcess(signal);
  });
});
