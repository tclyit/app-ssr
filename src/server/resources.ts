import * as express from 'express';
import { join } from 'path';
const DIST_FOLDER = join(process.cwd(), 'dist');

export default function resources(app) {
  // static Assets
  app.use(
    '/app-ssr',
    express.static(join(DIST_FOLDER, 'browser'), {
      maxAge: '1y',
    })
  );
}
