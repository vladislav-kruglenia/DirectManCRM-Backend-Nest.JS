import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ClientContactType, DisplayAccesses } from '../../../../Global/GlobalTypes/Types';
import * as mongoose from 'mongoose';

export type BriefDocument = Brief & Document;

@Schema()
export class LinkData {
  @Prop({required: true})
  isChanged: boolean;

  @Prop({required: true})
  productName: string;

  @Prop({required: true})
  productLink: string
}

@Schema()
export class ResponseContactsData {
  @Prop({required: true})
  isNoData: boolean;

  @Prop({required: true})
  contactsData: Array<ClientContactType>
}




@Schema()
export class ResponseAccessData {
  @Prop({required: true})
  accessType: DisplayAccesses;

  @Prop({required: true})
  login: string;

  @Prop({required: true})
  password: string
}



@Schema()
export class ResponseLinksData {
  @Prop({required: true})
  numberLinks: number;

  @Prop({required: true})
  isNoData: boolean;

  @Prop({required: true})
  linksData: Array<LinkData>
}

@Schema()
export class ResponseTextData {
  @Prop({required: true})
  textData: string;

  @Prop({required: true})
  isChanged: boolean
}

@Schema()
export class ResponseContacts {
  @Prop({required: true})
  responseType: "Contacts";

  @Prop({required: true})
  data: ResponseContactsData
}



@Schema()
export class ResponseAccesses {
  @Prop({required: true})
  responseType: "Accesses";

  @Prop({required: true})
  data: Array<ResponseAccessData>
}

@Schema()
export class ResponseLinks {
  @Prop({required: true})
  responseType: "Links";

  @Prop({required: true})
  data: ResponseLinksData
}

@Schema()
export class ResponseText {
  @Prop({required: true})
  responseType: "Text";

  @Prop({required: true})
  data: ResponseTextData
}

@Schema()
export class QuestionAndResponse {
  @Prop({required: true})
  idQuestion: string;

  @Prop({required: true})
  question: string;

  @Prop({type: mongoose.Schema.Types.Mixed, required: true})
  response: ResponseText | ResponseLinks | ResponseAccesses | ResponseContacts
}

@Schema()
export class Brief {
  @Prop({required: true})
  briefId: string;

  @Prop({required: true})
  briefType: 'contextAdvertising' | 'socialNetworksAdvertising' | "youtubeAdvertising" | null;

  @Prop({required: true})
  questions: Array<QuestionAndResponse>
}

export const BriefSchema = SchemaFactory.createForClass(Brief);
