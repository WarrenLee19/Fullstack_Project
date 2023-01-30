import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  const options = new DocumentBuilder()
      .setTitle('全栈学习-后端管理API').setDescription('供后端调用API').setVersion('1.1').addTag('1').build();
  const document = SwaggerModule.createDocument(app,options)
  SwaggerModule.setup('api-docs', app, document)
  await app.listen(3000);
  console.log('http://localhost:3000/api-docs')
}
bootstrap();
