require('dotenv').config();
import express, { Request, Response, json, urlencoded } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import morgan from 'morgan';
import ColorService from './libs/services/ColorService';
import EnvironmentService from './libs/services/EnvironmentService';
import ExpressService from './libs/services/ExpressService';
import { ColorEnum } from './libs/services/types';
import DefaultRoute from './routes/DefaultRoute';
import MongoDBRoute from './routes/MongoDBRoute';

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

// * Server root endpoints.
app.get('/', (_: Request, res: Response) => {
  res.sendFile('index.html', { root: 'public' });
});

// * Server endpoints.
app.use('/api/default/s3', DefaultRoute);
app.use('/api/mongodb/s3', MongoDBRoute);
