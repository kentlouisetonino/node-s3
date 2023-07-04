require('aws-sdk/lib/maintenance_mode_message').suppress = true;
require('dotenv').config();
import express, { Request, Response, json, urlencoded } from 'express';
import morgan from 'morgan';
import S3Route from './routes/S3Route';
import ExpressService from './services/ExpressService';

// * Get the express application instance.
const app = ExpressService.app;

// * App middlewares.
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(json());
app.use(urlencoded({ extended: true }));

// * App root endpoint.
app.get('/', (_: Request, res: Response) => {
  res.sendFile('index.html', { root: 'public' });
});

// * App other endpoints.
app.use('/api/s3', S3Route);

// * Separate app and server.
export default app;
