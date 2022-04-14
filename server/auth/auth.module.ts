import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberModule } from '../member/member.module';
import { AuthCode, AuthCodeSchema } from './auth-code.schema';
// import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthCodeStrategy } from './strategies/authentication-code.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AuthCode.name, schema: AuthCodeSchema },
    ]),
    MemberModule,
    // JwtModule.registerAsync({
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) => {
    //     return {
    //       secret: config.get('JWT_SECRET'),
    //       signOptions: {
    //         expiresIn: config.get('JWT_EXPIRATION'),
    //       },
    //     };
    //   },
    // }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthCodeStrategy, JwtStrategy],
})
export class AuthModule {}

// Authentication method is someting like that
// 1 - User with his phone number ----> client ---- POST { phoneNumber } ----> server
// ........................................................................... server: create pin and store hashed pin
// ...........................................................................         (we can store it in cashe or database)
// ........................................................................... server: send created pin as sms/email to user's phone number
// ........................................................................... server: send stored pinId as reqId to client
// 2 - User with sended pin ----------> client ---- POST { pin, reqId } -----> server: find pin with reqId from database
// ........................................................................... server: compare hashedPin and posted pin
// ........................................................................... server: register user with jwt token
