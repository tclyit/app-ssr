// Angular requires Zone.js
require('zone.js/dist/zone-node');
import { join } from 'path';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { AppServerModule } from './src/main.server';
import * as serverConf from './src/server';

const express = require('express');
const http = require('http');
const distFolder = join(process.cwd(), 'dist/app-ssr/browser');

const app = express();

app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModule,
  })
);

app.set('view engine', 'html');
app.set('views', distFolder);

serverConf.resources(app);
serverConf.render(app);

const port = process.env['PORT'] || 4000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Node Express server listening on http://localhost:${port}`);
});

export * from './src/main.server';
