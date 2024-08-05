import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import {
  VersioningType,
  ValidationPipe,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import Helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import * as functions from 'firebase-functions';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
const expressServer = express();
export let pcorCloudFunction:functions.HttpsFunction
const createFunction = async (expressInstance): Promise<void> => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: [VERSION_NEUTRAL, '1'],
  });
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      transform: true,
    }),
  );
  app.use(Helmet());
  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(cookieParser());

  const options = new DocumentBuilder()
    .setTitle('pcor apis')
    .setDescription('The pcor backend description')
    .setVersion('1.0')
    .addApiKey({ type: 'apiKey', name: 'api-key', in: 'header' }, 'api-key')
    // .addServer(options.serverUrl||"localhost:3000")
    .build();

  if (process.env.ENVIRONMENT !== 'prod') {
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger/doc', app, document);
  }

  await app.init();
};
function bootstrap() {
 pcorCloudFunction = functions
  .region('europe-west1')
  .https.onRequest(async (request, response) => {
    // let options = {serverUrl:"http://localhost:5000/linsample-a5638/europe-west1/pcorCloudFunction"};
    await createFunction(expressServer);
    expressServer(request, response);
  });
}
bootstrap();