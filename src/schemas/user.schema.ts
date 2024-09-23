import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  cpf: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  telefone: string;

  @Prop({ type: Date, required: true })
  dataNascimento: Date;

  @Prop({ default: true })
  status: boolean;

  @Prop({ default: Date.now })
  tsCriacao: Date;

  @Prop({ default: Date.now })
  tsUpdate: Date;

  @Prop({
    type: {
      email: { type: Boolean, default: true },
      telefone: { type: Boolean, default: false },
    },
  })
  notify: {
    email: boolean;
    telefone: boolean;
  };
}

export const UserSchema = SchemaFactory.createForClass(User);
