const app = require('./app.js');

const port = 3000;

app.listen(port, () => {
  console.log();
  console.log(`listening on port ${port}`);
  console.log(`CTRL + clique em http://localhost:${port}`);
});
