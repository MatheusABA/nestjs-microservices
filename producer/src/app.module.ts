import { MiddlewareConsumer, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AppService } from '@/app.service';
import { AppController } from '@/app.controller';
import { LoggingMiddleware } from '@/middlewares/logs/logging.middleware';
import { OrdersModule } from '@/modules/orders/orders.module';

@Module({
  imports: [
    // Rate Limiter
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 5,
        },
      ],
    }),
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // Logging Middleware
    consumer.apply(LoggingMiddleware).forRoutes('*'); // Apply to all routes
  }
}
