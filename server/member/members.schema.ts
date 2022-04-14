import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

enum Degree {
  bachelor = 'Bachelor',
  ma = 'MA',
  phd = 'PHD',
}

@Schema({
  timestamps: true,
})
export class Member {
  @Prop({ trim: true })
  name: string;

  @Prop({ trim: true })
  familyName: string;

  @Prop({ type: Date, default: '2000-01-01' })
  birth: Date;

  @Prop({ trim: true })
  phoneNumber: string;

  @Prop({ type: Boolean, default: false })
  verifyPhoneNumber: boolean;

  @Prop({ trim: true })
  studentNumber: string;

  @Prop({ type: Boolean, default: false })
  dormitoryStudent: boolean;

  @Prop({ trim: true, type: String, default: '' })
  dormitory: string;

  @Prop({ trim: true })
  email: string;

  @Prop(
    raw({
      degree: { type: mongoose.Schema.Types.Mixed, enum: Degree },
      univercity: { type: String },
      college: { type: String },
    }),
  )
  schoolProfile: Record<string, any>;

  @Prop({ trim: true })
  activityRecords: string;

  @Prop()
  cooperationAreas: string;

  @Prop({ trim: true })
  interests: string;
}

export type MemberDocument = Member & Document;

export const MemberSchema = SchemaFactory.createForClass(Member);
