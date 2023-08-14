import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestingModule } from './nesting/nesting.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'auth-nest',
      entities: [],
      synchronize: true,
    }),
    NestingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
