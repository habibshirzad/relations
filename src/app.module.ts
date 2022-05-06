import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { Channel } from './entity/channel.entity';
import { Tag } from './entity/tag.entity';
import { User } from './entity/user.entity';
import { Video } from './entity/video.entity';

@Module({
  imports: [ DatabaseModule,TypeOrmModule.forFeature([Video,Tag,User,Channel])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
