import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { ApiModule } from 'src/api/api.module';
import { ApiService } from 'src/api/api.service';

@Module({
  imports: [ApiModule],
  providers: [TaskService ]
})
export class TaskModule {}
