import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { customAlphabet } from 'nanoid';

export const authCode = customAlphabet('0123456789', 5);

@Schema({ timestamps: true, expireAfterSeconds: 180 })
export class AuthCode {
  @Prop({ required: true, unique: true })
  phoneNumber: string;

  @Prop({ default: authCode() })
  pin: string;
}

export type AuthCodeDocument = AuthCode & Document;

export const AuthCodeSchema = SchemaFactory.createForClass(AuthCode);
