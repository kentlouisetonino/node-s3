require('dotenv').config();
import express, { Request, Response, json, urlencoded } from 'express';
import morgan from 'morgan';
import ExpressService from './libs/services/ExpressService';
import S3Route from './routes/S3Route';

// * Get the express application instance.
const app = ExpressService.app;

// * Server middlewares.
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(json());
app.use(urlencoded({ extended: true }));

// * Server root endpoint.
app.get('/', (_: Request, res: Response) => {
  res.sendFile('index.html', { root: 'public' });
});

// * Server other endpoints.
app.use('/api/s3', S3Route);

// * Separate app and server.
export default app;
