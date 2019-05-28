const app = require('./src/factories/express').make();

app.listen(3000, () => {
  process.stdout.write('Starting Github Concierge at port 3000\n');
});
