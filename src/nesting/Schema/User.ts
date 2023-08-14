import { Schema  , Prop , SchemaFactory} from "@nestjs/mongoose";
import { timeStamp } from "console";



@Schema({
    timestamps: true
})
export class User {
@Prop()
name: string
@Prop({ unique: true })
email: string; 
@Prop()
password: string
} 
export const UserSchema =  SchemaFactory.createForClass(User);