import express, { Request, Response, json, urlencoded } from 'express';
import morgan from 'morgan';
import app from './libs/app';
import environment from './libs/environment';
import S3Route from './routes/S3Route';

// * Server listener.
app.listen(environment.PORT, () => {
  console.log(`Server is running in http://localhost:${environment.PORT}`);
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

// * Server S3 endpoints.
app.use('/api/s3', S3Route);
