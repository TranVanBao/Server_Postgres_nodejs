import config from 'dotenv';
import express from 'express';
//import morgan from 'morgan';
import bodyParser from 'body-parser';

import bookRoutes from '../api/apps/routes/BookRoutes';
config.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(morgan());
const port = process.env.PORT || 3000;

app.use('/test', bookRoutes);

// when a random route is inputed


app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;