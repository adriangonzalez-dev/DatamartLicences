import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConsoleModule } from 'nestjs-console';
import { ApiModule } from './api/api.module';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      cache:true
    }),
    ScheduleModule.forRoot(),
    ConsoleModule,
    TaskModule,
    ApiModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
