import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Service } from './Orders.shema';

export type TariffsInfoDocument = Tariffs_Info & Document;

@Schema()
export class Tariffs_Info {
  @Prop({ required: true })
  ID: string;

  @Prop({ required: true })
  directionsAndTariffs: Array<Direction>;
}

@Schema()
export class Direction {

  @Prop({default: ""})
  nameDirection: string;

  @Prop({default: ""})
  idDirection: string;

  @Prop({default: true})
  paymentInFull: boolean;

  @Prop({default: false})
  selected: boolean;

  @Prop()
  namesTariffs: Array<Tariff>
}

@Schema()
export class Tariff {

  @Prop({default: ""})
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

  @Prop()
  services: Array<Service>
}


export const TariffsInfoSchema = SchemaFactory.createForClass(Tariffs_Info);