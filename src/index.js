import dotenv from  'dotenv';
dotenv.config({ path: './.env' });
import {app} from './app.js';
import connectDB from './db/index.js';
const port =process.env.PORT || 4000;   




connectDB()
  .then(() => {
    app.listen(port, () => {   
        console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });
