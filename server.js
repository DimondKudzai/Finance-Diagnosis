const express = require('express');
const app = express();
const financeRoute = require('./routes/finance');

app.use(express.json());
app.use('/api/finance', financeRoute);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
