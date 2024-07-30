import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { ApiKeyAuthMiddleware } from './common/middleware/apikey-auth.middleware';
import { APP_GUARD } from '@nestjs/core';
import { CareerDataModule } from './career-data/career-data.module';
import { SurveyquestionsModule } from './surveyquestions/surveyquestions.module';
import { LeadGenerationModule } from './lead-generation/lead-generation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ThrottlerModule.forRoot([{
      ttl:60000,
      limit:10
    }]),
  CareerDataModule,
  SurveyquestionsModule,
  LeadGenerationModule 
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiKeyAuthMiddleware).exclude('/api/test').forRoutes('*');
  }
 
}
