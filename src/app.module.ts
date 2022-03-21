import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsService } from './posts/posts.service';
import { PostsModule } from './posts/posts.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [UsersModule, PostsModule, AuthenticationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users', 'posts');
  }
}
