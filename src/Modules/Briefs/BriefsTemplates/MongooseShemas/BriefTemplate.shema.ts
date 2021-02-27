import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from "mongoose";

export type BriefTemplateDocument = Brief_Template & Document;

@Schema()
export class AssessesTypeResponse {
  @Prop({required: true})
  type: "Accesses";
  @Prop({required: true})
  assesses: Array<Access>;
}

@Schema()
export class NoneTypeResponse {
  @Prop({required: true})
  type: "None"
}

@Schema()
export class TextTypeResponse {
  @Prop({required: true})
  type: "Text"
}

@Schema()
export class ContactsTypeResponse {
  @Prop({required: true})
  type: "Contacts"
}

@Schema()
export class LinksTypeResponse {
  @Prop({required: true})
  type: "Links";
  @Prop({required: true})
  numberLinks: number;
}

@Schema()
export class QuestionTextData {
  @Prop({required: true})
  questionText: string;
  @Prop({required: true})
  isChangedQuestionText: boolean;
}



@Schema()
export class QuestionType {
  @Prop({required: true})
  idQuestion: string;
  @Prop({required: true})
  questionTextData: QuestionTextData;
  @Prop({type: mongoose.Schema.Types.Mixed, required: true})
  response: AssessesTypeResponse
    | LinksTypeResponse
    | ContactsTypeResponse
    | TextTypeResponse
    | NoneTypeResponse;
}

@Schema()
export class Access {
  @Prop({required: true})
  idAccess: string;
  @Prop({required: true})
  accessName: string;
  @Prop({required: true})
  accessLink: string;
  @Prop({required: true})
  isChanged: boolean;
  @Prop({required: true})
  isNewAccess?: boolean;
}

@Schema()
export class Brief_Template {
  @Prop({required: true})
  briefTemplateId: string | null;

  @Prop({required: true})
  briefName: string;

  @Prop({required: true})
  assessesTypes: Array<Access>;

  @Prop({required: true})
  questions: Array<QuestionType>;
}

export const BriefTemplateSchema = SchemaFactory.createForClass(Brief_Template);
