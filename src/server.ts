require('dotenv').config();
import express, { Request, Response, json, urlencoded } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import morgan from 'morgan';
import DefaultRoute from './routes/DefaultRoute';
import ColorService from './services/ColorService';
import EnvironmentService from './services/EnvironmentService';
import ExpressService from './services/ExpressService';
import { ColorEnum } from './services/types';

// * Get the express application instance.
const app = ExpressService.app;

// * Server listener.
app.listen(EnvironmentService.PORT, () => {
  ColorService.logText(
    ColorEnum.FgCyan,
    `Server is running in http://localhost:${EnvironmentService.PORT}`
  );
});

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

// * Server endpoints.
app.use('/api/default/s3', DefaultRoute);
