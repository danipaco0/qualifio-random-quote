import express from 'express';

const apiRouter = require('./router/quote.route.ts')
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/quotes', apiRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
