export default function (app) {
  app.get('*', (req, res, next) => {
    if (req.url.includes('/app-ssr/')) {
      next();
    } else {
      res.render('index', {
        req: req,
        res: res
      },
        (err, html) => {
          if (err) {
            console.error(err);
            return res.status(500).send('Server error');
          }
          res.send(html);
        });
    }
  });
}
