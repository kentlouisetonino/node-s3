import express, { Request, Response, json, urlencoded } from 'express';
import morgan from 'morgan';
import DefaultRoute from './routes/DefaultRoute';
import EnvironmentService from './services/EnvironmentService';
import ExpressService from './services/ExpressService';

// * Get the express application instance.
const app = ExpressService.app;

// * Server listener.
app.listen(EnvironmentService.PORT, () => {
  console.log(
    `Server is running in http://localhost:${EnvironmentService.PORT}`
  );
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
