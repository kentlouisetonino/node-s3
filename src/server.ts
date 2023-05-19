import express, { Request, Response, json, urlencoded } from 'express';
import morgan from 'morgan';
import app from './lib/app';
import environment from './lib/environment';
import S3Route from './routes/S3Route';

// * server listener
app.listen(environment.PORT, () => {
  console.log(`Server is running in http://localhost:${environment.PORT}`);
});

// * middlewares
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(json());
app.use(urlencoded({ extended: true }));

// * root endpoint
app.get('/', (_: Request, res: Response) => {
  res.sendFile('index.html', { root: 'public' });
});

// * s3 endpoints
app.use('/api/s3', S3Route);
