import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Console, Command } from 'nestjs-console';
import { ApiService } from 'src/api/api.service';

@Injectable()
@Console()
export class TaskService {
    private readonly logger = new Logger(TaskService.name);
    constructor(private readonly apiService: ApiService){} 
    
    @Cron(CronExpression.EVERY_5_SECONDS)
    async handleCronTask() {
        const now = new Date();

        await this.apiService.Login();
        
        const res = await this.apiService.getLicencesInfo()
        this.logger.log(`Total organizaciones: ${res.totalCount}`)
        this.logger.log(`Tarea programada ejecutándose: ${now.toISOString()}`);
    }
}
