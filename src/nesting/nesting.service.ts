import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './Schema/User';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class NestingService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>
    ) {}

async signUp(signUpDto){
    const { name , email, password} = signUpDto
    const hashedPassword = await bcrypt.hash(password , 10)
    const user = await this.userModel.create({
        name,
        email,
        password: hashedPassword,
    })
}}
