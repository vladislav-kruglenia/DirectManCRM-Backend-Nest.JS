import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientAccountDocument = Client_Account & Document;

@Schema()
export class Client_Account {
  @Prop({required: true})
  userId: string;
  @Prop({required: true})
  projectsInProgress: Array<string>;
  @Prop({required: true})
  managedProjects: Array<string>;
  @Prop({required: true})
  frozenProjects: Array<string>;
  @Prop({required: true})
  completedProjects: Array<string>;
}

export const ClientAccountSchema = SchemaFactory.createForClass(Client_Account);

const ClientAccount1: Client_Account = {
  userId: "e368defb-bb8c-41ee-a1db-1558cde1f7a3",
  projectsInProgress: ['1'],
  managedProjects: [],
  frozenProjects: [],
  completedProjects: []
};