import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { BosController } from './bos/bos.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, BosController],
  providers: [AppService],
})
export class AppModule {}
