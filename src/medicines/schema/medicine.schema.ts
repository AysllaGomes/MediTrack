import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
}

export const MedicineSchema = SchemaFactory.createForClass(Medicine);
