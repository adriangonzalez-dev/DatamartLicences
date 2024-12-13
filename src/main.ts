import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleService } from 'nestjs-console';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  app.useLogger(['error', 'warn', 'log', 'debug', 'verbose']);
  try
  {
    const consoleService = app.get(ConsoleService)
    await consoleService.init(process.argv)
  }
  catch(e)
  {
    console.error(e)
    await app.close()
    process.exit(1)
  }
}
bootstrap();
