import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Member, MemberDocument } from './members.schema';

@Injectable()
export class MemberService {
  constructor(
    @InjectModel(Member.name)
    private readonly memberModel: mongoose.Model<MemberDocument>,
  ) {}

  async findByPhoneNumber(phoneNumber: string) {
    return await this.memberModel.findOne({ phoneNumber });
  }

  async create(data: any) {
    const member = new this.memberModel(data);

    try {
      return await member.save();
    } catch (err: any) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async findAll() {
    return await this.memberModel.find();
  }
}
