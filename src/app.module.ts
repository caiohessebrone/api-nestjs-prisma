import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsService } from './posts/posts.service';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UsersModule, PostsModule],
  controllers: [AppController],
  providers: [AppService, PostsService],
})
export class AppModule {}
