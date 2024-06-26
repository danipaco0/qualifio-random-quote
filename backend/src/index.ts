import express from 'express';
import router from './router/quote.route';

const app = express();
const port = process.env.PORT || 5000;

// Route handler
app.use('/', router)

// Starting server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;