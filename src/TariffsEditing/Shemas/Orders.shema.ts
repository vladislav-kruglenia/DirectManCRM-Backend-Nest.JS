import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true })
  userId: string;

  @Prop({ default: "" })
  nameProject: string;

  @Prop({ required: true })
  directionsAndTariffs: Array<Direction>;
}

@Schema()
export class Direction {
  @Prop({default: ""})
  nameDirection: string;

  @Prop({default: -1})
  idDirection: number;

  @Prop({default: true})
  paymentInFull: boolean;

  @Prop({default: -1})
  directionTotalPrice: number;

  @Prop()
  namesTariffs: Array<Tariff>
}

@Schema()
export class Tariff {
  @Prop({default: -1})
  tariffId: string;

  @Prop({default: ""})
  tariffName: string;

  @Prop({default: false})
  tariffStatus: boolean;

  @Prop({default: -1})
  packetPrice: number;

  @Prop({default: true})
  paymentPackage: boolean;

  @Prop({default: -1})
  deadline: number;

  @Prop({default: -1})
  totalPrice: number;

  @Prop()
  services: Array<Service>
}

export class Service {
  @Prop({default: ""})
  serviceName: string;
  @Prop({default: false})
  serviceStatus: boolean;
  @Prop({default: ''})
  serviceId: string;
  @Prop({default: -1})
  servicePrice: number;
}



export const OrderSchema = SchemaFactory.createForClass(Order);