require('dotenv').config();
import express, { Request, Response, json, urlencoded } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import morgan from 'morgan';
import S3Route from './routes/S3Route';
import ColorService from './services/ColorService';
import EnvironmentService from './services/EnvironmentService';
import ExpressService from './services/ExpressService';
import { ColorEnum } from './services/types';

// * Get the express application instance.
const app = ExpressService.app;

// * Connect to mongodb.
mongoose
  .connect(EnvironmentService.MONGODB_URI ?? '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    ColorService.logText(ColorEnum.FgYellow, `Server is connected to MongoD`);
  });

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
