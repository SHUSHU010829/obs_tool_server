import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import colors from 'colors';
import productsRoutes from './routes/product.route.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/api/products', productsRoutes);
app.get('/', (req, res) => {
    res.send('Hello from Homepage')
})

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("[INFO] MongoDB Atlas is connected".blue))
  .catch(err => console.log(`[INFO] MongoDB Atlas is connected failed: ${err}`.red));

const PORT = 5001;
app.listen(PORT, () => console.log(`[INFO] Server is running on port: http://localhost:${PORT}`.blue))