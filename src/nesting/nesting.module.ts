import { Module } from '@nestjs/common';
import { NestingController } from './nesting.controller';
import { NestingService } from './nesting.service';
import { UserSchema } from './Schema/User';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { config } from 'process';

@Module({
  imports : [
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.registerAsync({
     inject: [ConfigService],
     useFactory : (config:ConfigService) =>{
      return {
        secret : config.get<string>('JWT_SECRET'),
      }
     }}),
    MongooseModule.forFeature([{name:'User', schema: UserSchema}])
  ],
  controllers: [NestingController],
  providers: [NestingService]
})
export class NestingModule {}
