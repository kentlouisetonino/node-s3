require('aws-sdk/lib/maintenance_mode_message').suppress = true;
require('dotenv').config();
import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import DefaultRoute from './routes/DefaultRoute';
import S3Route from './routes/S3Route';
import ExpressService from './services/ExpressService';

// Get the express application instance.
const app = ExpressService.app;

// App middlewares.
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(json());
app.use(urlencoded({ extended: true }));

// App other endpoints.
app.use('/', DefaultRoute);
app.use('/api/s3', S3Route);

// Separate app and server.
export default app;
