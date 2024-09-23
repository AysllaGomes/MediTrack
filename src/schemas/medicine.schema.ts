import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Medicine extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  minQuantity: number;

  @Prop({ default: Date.now })
  lastUpdated: Date;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: Types.ObjectId;
}

export const MedicineSchema = SchemaFactory.createForClass(Medicine);
