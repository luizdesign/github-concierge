import ExpressFactory from './src/factories/express';

const port = parseInt(process.env.PORT || '3000', 10);
const app = ExpressFactory.make();

app.listen(3000, () => {
  process.stdout.write(`Starting Github Concierge at: http://localhost:${port} \n`);
});
